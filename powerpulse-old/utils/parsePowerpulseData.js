// utils/parsePowerpulseData.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CONFIG_PATH = path.join(__dirname, "..", "config", "register-map.json");

/**
 * Dynamic Powerpulse data parser.
 *
 * Register map is loaded from config/register-map.json.
 * Each register entry has: addr, field, isPhase, source (grid/generator/both),
 * label, unit, enabled flag.
 *
 * Any unrecognized register is stored as a dynamic "extra" field.
 */

// ── Dynamic register map loaded from JSON config ──
let REGISTER_MAP = {};
let REGISTER_CONFIG = [];

function loadRegisterMapFromFile() {
  try {
    const raw = fs.readFileSync(CONFIG_PATH, "utf8");
    const config = JSON.parse(raw);
    REGISTER_CONFIG = config.registers || [];
    rebuildMap(REGISTER_CONFIG);
    console.log(`✅ Register map loaded: ${Object.keys(REGISTER_MAP).length} entries from config/register-map.json`);
  } catch (err) {
    console.warn("⚠️ Could not load register-map.json, using empty map:", err.message);
    REGISTER_MAP = {};
    REGISTER_CONFIG = [];
  }
}

function rebuildMap(registers) {
  REGISTER_MAP = {};
  for (const reg of registers) {
    if (reg.enabled === false) continue;
    REGISTER_MAP[reg.addr] = {
      field: reg.field,
      isPhase: !!reg.isPhase,
      source: reg.source || "both",
    };
  }
}

/**
 * Reload the register map from a new config (called by server.js after CRUD).
 */
export function reloadRegisterMap(registers) {
  REGISTER_CONFIG = registers;
  rebuildMap(registers);
  console.log(`🔄 Register map reloaded: ${Object.keys(REGISTER_MAP).length} entries`);
}

// Load on import
loadRegisterMapFromFile();

// ── Name-based fallback map (case-insensitive match) ──
const NAME_PATTERNS = [
  { pattern: /^voltage1?$/i, field: "voltage", isPhase: true },
  { pattern: /avg[_\s]?voltage/i, field: "avgVoltage" },
  { pattern: /ryb[_\s]?current|current/i, field: "current", isPhase: true },
  { pattern: /avg[_\s]?pf|power[_\s]?factor/i, field: "powerFactor" },
  { pattern: /3p[_\s]?active[_\s]?power|active[_\s]?power/i, field: "avgActivePower" },
  { pattern: /3p[_\s]?apparent[_\s]?power|apparent/i, field: "apparentPower" },
  { pattern: /freq/i, field: "frequency" },
  { pattern: /real[_\s]?time/i, field: "realTimePower" },
  { pattern: /vtg[_\s]?thd|voltage[_\s]?thd/i, field: "thdVoltage", isPhase: true },
  { pattern: /cur[_\s]?thd|current[_\s]?thd/i, field: "thdCurrent", isPhase: true },
  { pattern: /ponmin/i, field: "powerOnMins" },
  { pattern: /poffmin/i, field: "powerOffMins" },
  { pattern: /lonmin/i, field: "loadOnMins" },
  { pattern: /loffmin/i, field: "loadOffMins" },
  { pattern: /ryb[_\s]?activepower/i, field: "activePower", isPhase: true },
  { pattern: /avg[_\s]?activepower/i, field: "avgActivePower" },
  { pattern: /meter[_\s]?temp/i, field: "meterTemp" },
];

export function parsePowerpulseData(iotData) {
  if (!iotData || !iotData.Powerpulse) return null;

  const { server_id, addr, name = "", data, date, server_name = "" } = iotData.Powerpulse;
  if (data == null) return null;

  // ── Determine source type ──
  const numId = Number(server_id);
  let type;
  if (server_name) {
    // Dynamic: use actual server_name from Teltonika ("Grid", "Generator", etc.)
    type = server_name.toLowerCase().replace(/\s+/g, "_");
  } else {
    type = numId === 1 ? "grid" : numId === 2 ? "generator" : `source_${numId}`;
  }

  const values = parseValues(data);
  const numAddr = Number(addr);

  // ── Initialize base structure ──
  const parsed = {
    type,
    sourceTimestamp: parsePowerpulseTimestamp(date),
    registerAddr: numAddr,
    registerName: name,
    // Three-phase measurements
    voltage: { R: null, Y: null, B: null },
    current: { R: null, Y: null, B: null },
    activePower: { R: null, Y: null, B: null },
    thdVoltage: { R: null, Y: null, B: null },
    thdCurrent: { R: null, Y: null, B: null },
    // Scalar values
    avgVoltage: null,
    avgCurrent: null,
    avgActivePower: null,
    apparentPower: null,
    powerFactor: null,
    frequency: null,
    realTimePower: null,
    thd: null,
    // Uptime CMD
    powerOnMins: null,
    powerOffMins: null,
    loadOnMins: null,
    loadOffMins: null,
    // Dynamic extras (auto-detected new params go here)
    extras: {},
    timestamp: new Date(),
  };

  // ── Find the matching rule: addr first, then name pattern ──
  let rule = REGISTER_MAP[numAddr] || null;

  // Source filtering: skip rule if it doesn't apply to this source type
  if (rule && rule.source && rule.source !== "both" && rule.source !== type) {
    rule = null; // Register not assigned to this source → treat as unknown/extra
  }

  if (!rule && name) {
    const match = NAME_PATTERNS.find(p => p.pattern.test(name));
    if (match) rule = match;
  }

  // ── Apply the rule ──
  if (rule) {
    if (rule.isPhase) {
      // Phase data: up to 3 values → R, Y, B
      parsed[rule.field] = {
        R: values[0] ?? null,
        Y: values[1] ?? null,
        B: values[2] ?? null,
      };
    } else {
      // Scalar data: single value
      parsed[rule.field] = values[0] ?? null;
    }
  } else {
    // ── DYNAMIC AUTO-DETECT: unknown register → store as extra ──
    const extraKey = name || `addr_${numAddr}`;
    if (values.length === 1) {
      parsed.extras[extraKey] = values[0];
    } else if (values.length === 3) {
      parsed.extras[extraKey] = { R: values[0], Y: values[1], B: values[2] };
    } else {
      parsed.extras[extraKey] = values;
    }
    console.log(`🔍 Auto-detected new parameter: "${extraKey}" (addr=${numAddr}) → ${JSON.stringify(values)}`);
  }

  // ── Also set avgActivePower from realTimePower if missing ──
  if (parsed.avgActivePower == null && parsed.realTimePower != null) {
    parsed.avgActivePower = parsed.realTimePower;
  }

  // ── Auto-calculate averages ──
  if (parsed.avgVoltage == null && hasPhaseData(parsed.voltage)) {
    parsed.avgVoltage = avgNonZero([parsed.voltage.R, parsed.voltage.Y, parsed.voltage.B]);
  }

  if (parsed.avgCurrent == null && hasPhaseData(parsed.current)) {
    parsed.avgCurrent = avgAll([parsed.current.R, parsed.current.Y, parsed.current.B]);
  }

  if (parsed.avgActivePower == null && hasPhaseData(parsed.activePower)) {
    parsed.avgActivePower = avgAll([parsed.activePower.R, parsed.activePower.Y, parsed.activePower.B]);
  }

  // Set flat THD from voltage THD average (backward compat)
  if (parsed.thd == null && hasPhaseData(parsed.thdVoltage)) {
    parsed.thd = avgAll([parsed.thdVoltage.R, parsed.thdVoltage.Y, parsed.thdVoltage.B]);
  }

  // ── Validate ──
  const hasData =
    hasPhaseData(parsed.voltage) ||
    hasPhaseData(parsed.current) ||
    hasPhaseData(parsed.activePower) ||
    parsed.avgVoltage != null ||
    parsed.avgCurrent != null ||
    parsed.avgActivePower != null ||
    parsed.powerFactor != null ||
    parsed.frequency != null ||
    parsed.apparentPower != null ||
    parsed.thd != null ||
    parsed.powerOnMins != null ||
    Object.keys(parsed.extras).length > 0;

  if (!hasData) return null;

  return parsed;
}

// ── Helpers ──

function parseValues(data) {
  const source = Array.isArray(data) ? data.join(",") : String(data);
  const cleaned = source.replace(/[\[\]]/g, "").trim();
  if (!cleaned) return [];
  return cleaned.split(",").map(v => {
    const n = Number.parseFloat(String(v).trim());
    return Number.isFinite(n) ? n : null;
  });
}

function parsePowerpulseTimestamp(rawDate) {
  if (!rawDate || typeof rawDate !== "string") return null;
  const match = rawDate.match(/^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/);
  if (!match) return null;
  const [, dd, mm, yyyy, hh, min, ss] = match;
  const parsed = new Date(`${yyyy}-${mm}-${dd}T${hh}:${min}:${ss}`);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function hasPhaseData(phase) {
  if (!phase) return false;
  return [phase.R, phase.Y, phase.B].some(v => v !== null && v !== undefined);
}

// Average ignoring null/0 values (for voltage where 0 means phase not connected)
function avgNonZero(arr) {
  const valid = arr.filter(v => typeof v === "number" && !isNaN(v) && v > 0);
  return valid.length ? valid.reduce((a, b) => a + b, 0) / valid.length : null;
}

// Average ignoring only null (0 is valid for current/power)
function avgAll(arr) {
  const valid = arr.filter(v => typeof v === "number" && !isNaN(v));
  return valid.length ? valid.reduce((a, b) => a + b, 0) / valid.length : null;
}
