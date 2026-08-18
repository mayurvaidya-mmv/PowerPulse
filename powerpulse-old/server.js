// server.js
import express from "express";
import http from "http";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import mqtt from "mqtt";
import cookieParser from "cookie-parser";

dotenv.config({ override: true });

import { initWebSocketServer } from "./websocket/websocketServer.js";
import { broadcastToClients } from "./websocket/websocketServer.js";
import { getMLPrediction, checkTHDAnomaly } from "./services/mlService.js";
import { parsePowerpulseData, reloadRegisterMap } from "./utils/parsePowerpulseData.js";
import { initDynamoDb, saveParsedDataToDynamo, getRecentDataByType, getLatestDataByType, getDataByTimeRange } from "./services/dynamoDbService.js";
import { initSns, checkAndAlert, publishAlert, subscribeToTopic, listTopicSubscriptions, unsubscribeFromTopic, createSandboxPhoneNumber, verifySandboxPhoneNumber } from "./services/snsService.js";
import { initEc2, listInstances, getInstanceStatus, startInstances, stopInstances, rebootInstances } from "./services/ec2Service.js";
import { initLambda, listFunctions, getFunctionDetails, invokeFunction, processWithLambda } from "./services/lambdaService.js";
import { initAuth, registerUser, loginUser, getAllUsers } from "./services/authService.js";
import { requireAuth, requireRole } from "./middleware/auth.js";
import { askChatbot, generateReportSummary } from "./services/bedrockChatService.js";

const PORT = 8082;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);
const latestDataCache = { grid: {}, generator: {} };
const throttleTimers = {};  // Tracks last AWS call timestamp per service+source
const GRID_ADDR_NAME_MAP = {
  100: "voltage1",        // R,Y,B Voltage — 6 registers (32-bit floats)
  106: "avg_voltage",     // Average Line Voltage — 2 registers
  114: "RYB_current",     // R,Y,B Current — 6 registers
  140: "Avg_PF",          // Average Power Factor — 2 registers
  148: "3P_active_power_instant",    // 3-Phase Total Active Power — 2 registers
  164: "3P_apparent_power_instant",  // 3-Phase Total Apparent Power — 2 registers
  172: "freq_instant",    // Frequency — 2 registers
  174: "meter_real_time_instant",    // Real Time Power — 2 registers
  178: "RYB_vtg_thd_instant",        // R,Y,B Voltage THD — 6 registers
  184: "RYB_cur_thd_instant",        // R,Y,B Current THD — 6 registers
  320: "PONMins_CMD",     // Power ON Minutes
  322: "POFFMins_CMD",    // Power OFF Minutes
  324: "LONMins_CMD",     // Load ON Minutes
  326: "LOFFMins_CMD",    // Load OFF Minutes
};
const GENERATOR_ADDR_NAME_MAP = {
  100: "voltage1",
  106: "avg_voltage",
  114: "RYB_current",
  140: "Avg_PF",
  148: "3P_active_power_instant",
  164: "3P_apparent_power_instant",
  172: "freq_instant",
  174: "meter_real_time_instant",
  178: "RYB_vtg_thd_instant",
  184: "RYB_cur_thd_instant",
  320: "PONMins_CMD",
  322: "POFFMins_CMD",
  324: "LONMins_CMD",
  326: "LOFFMins_CMD",
};

function hasAnyPhaseValue(phase) {
  if (!phase || typeof phase !== "object") return false;
  return [phase.R, phase.Y, phase.B].some((v) => typeof v === "number" && !Number.isNaN(v));
}

function hasPersistableData(cache) {
  return (
    hasAnyPhaseValue(cache.voltage) ||
    hasAnyPhaseValue(cache.current) ||
    hasAnyPhaseValue(cache.activePower) ||
    cache.avgVoltage != null ||
    cache.avgCurrent != null ||
    cache.avgActivePower != null ||
    cache.powerFactor != null ||
    cache.frequency != null ||
    cache.apparentPower != null ||
    cache.thd != null ||
    (cache.extras && Object.keys(cache.extras).length > 0)
  );
}

/**
 * Deep-merge parsed IoT data into the accumulated cache.
 * Only overwrites fields that have non-null values in the new data.
 * This prevents a voltage-only message from zeroing out current values.
 */
function mergeNonNull(target, source) {
  for (const key of Object.keys(source)) {
    const val = source[key];
    if (val === null || val === undefined) continue;
    if (key === "timestamp" || key === "sourceTimestamp") {
      target[key] = val; // always update timestamps
      continue;
    }
    if (typeof val === "object" && !Array.isArray(val) && val !== null) {
      // For phase objects like { R, Y, B } — merge each phase
      if (!target[key] || typeof target[key] !== "object") target[key] = {};
      for (const subKey of Object.keys(val)) {
        if (val[subKey] !== null && val[subKey] !== undefined) {
          target[key][subKey] = val[subKey];
        }
      }
    } else {
      target[key] = val;
    }
  }
}

function saveParsedDataAndBroadcast(parsed) {
  if (!parsed || parsed.type === "unknown") return;

  const type = parsed.type;
  // Auto-create cache for new source types (future meters)
  if (!latestDataCache[type]) {
    latestDataCache[type] = {};
    console.log(`🆕 New source type detected: "${type}"`);
  }
  const cache = latestDataCache[type];

  // Deep-merge: only overwrite non-null values
  mergeNonNull(cache, parsed);
  cache.type = type;

  // Broadcast the FULL accumulated cache to WebSocket clients
  // This ensures all parameters always have their latest values
  broadcastToClients({ type: "iot", data: { ...cache } });
}

async function saveCacheToDynamo(type) {
  const cache = latestDataCache[type];
  if (!cache || !hasPersistableData(cache)) return;

  const combinedData = { ...cache, timestamp: new Date(), type };

  saveParsedDataToDynamo(combinedData).catch((err) => {
    console.error("❌ DynamoDB save error:", err.message);
  });
}

function loadPemFile(filePath, label) {
  if (!filePath) {
    throw new Error(`Missing required ${label} path in .env`);
  }

  try {
    return fs.readFileSync(filePath, "utf8");
  } catch (err) {
    throw new Error(`Unable to read ${label} at ${filePath}: ${err.message}`);
  }
}

function normalizeEnvValue(value) {
  return (value || "").trim().replace(/^['\"]|['\"]$/g, "");
}

function extractPowerpulseMessages(rawMessage) {
  if (!rawMessage || typeof rawMessage !== "object") return [];

  // Handle legacy format: { Powerpulse: {...} }
  if (rawMessage.Powerpulse && typeof rawMessage.Powerpulse === "object") {
    return [rawMessage];
  }

  const normalizedMessages = [];

  // Handle real format: { Powerpulse1: {...}, Powerpulse2: {...}, ... }
  for (const [key, value] of Object.entries(rawMessage)) {
    if (!key.match(/^Powerpulse/i) || !value || typeof value !== "object") continue;

    // Use the actual server_id and name from the MQTT payload — NOT from the key
    const serverId = Number(value.server_id);
    const addr = Number(value.addr);
    const name = value.name || "";

    if (isNaN(serverId) || isNaN(addr)) {
      console.warn(`⚠️ Invalid server_id or addr in ${key}:`, value);
      continue;
    }

    normalizedMessages.push({
      Powerpulse: {
        server_id: serverId,
        addr,
        name,
        data: Array.isArray(value.data) ? value.data.join(",") : String(value.data ?? ""),
        date: value.date,
        server_name: value.server_name || "",   // "Grid" / "Generator" from Teltonika
        full_addr: value.full_addr || "",
      },
    });
  }

  return normalizedMessages;
}

function startAwsIotStreaming() {
  const endpoint = normalizeEnvValue(process.env.AWS_IOT_ENDPOINT);
  const clientId = normalizeEnvValue(process.env.AWS_IOT_CLIENT_ID);
  const topic = normalizeEnvValue(process.env.AWS_IOT_TOPIC);
  const certPath = normalizeEnvValue(process.env.AWS_IOT_CERT_PATH);
  const keyPath = normalizeEnvValue(process.env.AWS_IOT_PRIVATE_KEY_PATH);
  const caPath = normalizeEnvValue(process.env.AWS_IOT_CA_PATH);

  if (!endpoint || !clientId || !topic || !certPath || !keyPath) {
    console.warn("⚠️ AWS IoT Core config incomplete. Check AWS_IOT_* values in .env");
    return;
  }

  try {
    const options = {
      clientId,
      cert: loadPemFile(certPath, "AWS certificate"),
      key: loadPemFile(keyPath, "AWS private key"),
      protocol: "mqtts",
      reconnectPeriod: 5000,
      rejectUnauthorized: true,
    };

    if (caPath) {
      options.ca = loadPemFile(caPath, "AWS CA certificate");
    }

    const client = mqtt.connect(`mqtts://${endpoint}:8883`, options);

    client.on("connect", () => {
      console.log("✅ Connected to AWS IoT Core");
      client.subscribe(topic, { qos: 1 }, (err) => {
        if (err) {
          console.error("❌ Failed to subscribe AWS IoT topic:", err.message);
          return;
        }
        console.log(`📡 Subscribed to topic: ${topic}`);
      });
    });

    client.on("message", async (_, payload) => {
      try {
        const raw = JSON.parse(payload.toString());
        const messages = extractPowerpulseMessages(raw);

        if (!messages.length) {
          console.warn("⚠️ AWS IoT payload did not match expected Powerpulse format");
          return;
        }

        for (const message of messages) {
          const parsed = parsePowerpulseData(message);
          if (!parsed) continue;

          console.log("📡 AWS IoT Data Parsed:", {
            type: parsed.type,
            sourceTimestamp: parsed.sourceTimestamp,
            voltage: parsed.voltage,
            current: parsed.current,
            activePower: parsed.activePower,
            avgVoltage: parsed.avgVoltage,
            avgCurrent: parsed.avgCurrent,
            avgActivePower: parsed.avgActivePower,
            powerFactor: parsed.powerFactor,
            frequency: parsed.frequency,
            apparentPower: parsed.apparentPower,
            thdVoltage: parsed.thdVoltage,
            thdCurrent: parsed.thdCurrent,
          });

          if (parsed.sourceTimestamp instanceof Date) {
            const latencyMs = Date.now() - parsed.sourceTimestamp.getTime();
            if (latencyMs >= 0) {
              console.log(`⏱️ Source-to-server latency: ${(latencyMs / 1000).toFixed(2)}s`);
            }
          }
          // Merge parsed into cache FIRST (saveParsedData does this),
          // then broadcast the FULL accumulated cache (not raw parsed)
          // so that null fields from partial messages don't overwrite live data
          saveParsedDataAndBroadcast(parsed);

          // ── Throttled AWS calls to save credits ──
          // DynamoDB: save accumulated cache at most once every 30 seconds per source
          const dbKey = `db_${parsed.type}`;
          if (!throttleTimers[dbKey] || Date.now() - throttleTimers[dbKey] >= 30000) {
            throttleTimers[dbKey] = Date.now();
            saveCacheToDynamo(parsed.type).catch((err) => {
              console.error("❌ Async save error:", err.message);
            });
          }

          // SNS: check alerts using accumulated cache (has all latest values)
          const snsKey = `sns_${parsed.type}`;
          if (!throttleTimers[snsKey] || Date.now() - throttleTimers[snsKey] >= 120000) {
            throttleTimers[snsKey] = Date.now();
            const cache = latestDataCache[parsed.type] || {};
            checkAndAlert(cache).catch((err) => {
              console.error("❌ SNS alert check error:", err.message);
            });
          }

          // Lambda: invoke with accumulated cache (has all latest values)
          const lambdaKey = `lambda_${parsed.type}`;
          if (!throttleTimers[lambdaKey] || Date.now() - throttleTimers[lambdaKey] >= 300000) {
            throttleTimers[lambdaKey] = Date.now();
            const cache = latestDataCache[parsed.type] || {};
            processWithLambda(cache).catch((err) => {
              console.error("❌ Lambda processing error:", err.message);
            });
          }
        }
      } catch (err) {
        console.error("❌ Invalid AWS IoT payload:", err.message);
      }
    });

    client.on("reconnect", () => console.log("🔄 Reconnecting to AWS IoT Core..."));
    client.on("error", (err) => console.error("❌ AWS IoT Core error:", err.message));
    client.on("close", () => console.warn("⚠️ AWS IoT Core connection closed"));
  } catch (error) {
    console.error("❌ Failed to initialize AWS IoT Core client:", error.message);
  }
}

// ✅ Initialize WebSocket
initWebSocketServer(server);

// ✅ DynamoDB Connection
initDynamoDb();

// ✅ SNS Alerts
initSns();

// ✅ EC2 Monitoring
initEc2();

// ✅ Lambda
initLambda();

// ✅ Auth Service
initAuth();

// ✅ Middleware
app.use(cookieParser());

// ✅ Initialize AWS IoT Core stream
startAwsIotStreaming();

// ✅ Auth Routes (public)
app.post("/api/auth/register", express.json(), async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: "name, email, and password are required" });
    }
    if (password.length < 6) {
      return res.status(400).json({ error: "Password must be at least 6 characters" });
    }
    const user = await registerUser(email, password, name, role || "viewer");
    res.status(201).json({ message: "User registered successfully", user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.post("/api/auth/login", express.json(), async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "email and password are required" });
    }
    const { token, user } = await loginUser(email, password);
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000, // 24h
    });
    res.json({ message: "Login successful", user });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

app.get("/api/auth/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/login");
});

app.get("/api/auth/me", requireAuth, (req, res) => {
  res.json({ user: req.user });
});

app.get("/api/auth/users", requireAuth, requireRole("admin"), async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Optional route to test ML API
app.post("/api/test-ml", requireAuth, express.json(), async (req, res) => {
  try {
    const mlResult = await getMLPrediction(req.body);
    const thdResult = await checkTHDAnomaly(req.body);
    res.json({ mlResult, thdResult });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ REST APIs (require login — viewer or admin)
app.post("/api/chat", requireAuth, express.json(), async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) return res.status(400).json({ error: "Message is required" });

    // Fetch latest context from our in-memory cache
    const liveData = {
      grid: latestDataCache.grid || {},
      generator: latestDataCache.generator || {}
    };

    // Also fetch recent stored data from DynamoDB for richer context
    let storedData = { grid: [], generator: [] };
    try {
      const [gridStored, genStored] = await Promise.all([
        getRecentDataByType("grid", 20),
        getRecentDataByType("generator", 20)
      ]);
      storedData.grid = gridStored || [];
      storedData.generator = genStored || [];
    } catch (dbErr) {
      console.warn("⚠️ Could not fetch stored data for chatbot:", dbErr.message);
    }

    const contextData = { live: liveData, stored: storedData };

    const result = await askChatbot(message, history, contextData);
    res.json(result);
  } catch (err) {
    console.error("❌ Chatbot Error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/grid-data", requireAuth, async (req, res) => {
  try {
    const data = await getRecentDataByType("grid", 100);
    res.json(data);
  } catch (err) {
    console.error("❌ Error fetching grid data:", err.message);
    res.status(500).json({ message: "Error fetching grid data" });
  }
});

app.get("/api/grid-data/latest", requireAuth, async (req, res) => {
  try {
    const data = await getLatestDataByType("grid");
    res.json(data);
  } catch (err) {
    console.error("❌ Error fetching latest grid data:", err.message);
    res.status(500).json({ message: "Error fetching latest grid data" });
  }
});

app.get("/api/generator-data", requireAuth, async (req, res) => {
  try {
    const data = await getRecentDataByType("generator", 100);
    res.json(data);
  } catch (err) {
    console.error("❌ Error fetching generator data:", err.message);
    res.status(500).json({ message: "Error fetching generator data" });
  }
});

app.get("/api/generator-data/latest", requireAuth, async (req, res) => {
  try {
    const data = await getLatestDataByType("generator");
    res.json(data);
  } catch (err) {
    console.error("❌ Error fetching latest generator data:", err.message);
    res.status(500).json({ message: "Error fetching latest generator data" });
  }
});

// ✅ Historic Data API (daily / weekly / monthly / yearly / custom)
app.get("/api/history/:type", requireAuth, async (req, res) => {
  try {
    const type = req.params.type;
    const range = (req.query.range || "daily").toLowerCase();

    const now = new Date();
    let start, end;

    if (range === "custom") {
      if (!req.query.start || !req.query.end) {
        return res.status(400).json({ error: "start and end query params required for custom range" });
      }
      start = new Date(req.query.start);
      end = new Date(req.query.end);
      // Set end to end-of-day if only date provided
      if (req.query.end.length <= 10) {
        end.setHours(23, 59, 59, 999);
      }
    } else if (range === "yearly") {
      start = new Date(now);
      start.setFullYear(start.getFullYear() - 1);
      end = now;
    } else if (range === "monthly") {
      start = new Date(now);
      start.setDate(start.getDate() - 30);
      end = now;
    } else if (range === "weekly") {
      start = new Date(now);
      start.setDate(start.getDate() - 7);
      end = now;
    } else {
      // daily
      start = new Date(now);
      start.setDate(start.getDate() - 1);
      end = now;
    }

    const items = await getDataByTimeRange(type, start.toISOString(), end.toISOString());

    let resultData;
    let aggregated = false;
    let granularity = req.query.frequency || "raw";
    const freq = req.query.frequency;

    if (freq && ["hour", "6hour", "12hour", "day"].includes(freq)) {
      resultData = sampleAtIntervals(items, freq);
      aggregated = false;
    } else {
      // return raw data, downsampled
      const limitParam = req.query.limit;
      let maxPoints = 200; // default downsampling
      let exactLimit = false;

      if (limitParam === "all") {
        maxPoints = Infinity;
      } else if (!isNaN(parseInt(limitParam))) {
        maxPoints = parseInt(limitParam);
        exactLimit = true;
      }

      resultData = items;
      
      if (exactLimit) {
        // Slice from the end of the array to get the most recent exact records
        if (items.length > maxPoints) {
           resultData = items.slice(-maxPoints);
        }
      } else if (items.length > maxPoints && maxPoints !== Infinity) {
        // Downsample evenly across the time range
        const step = Math.ceil(items.length / maxPoints);
        resultData = items.filter((_, i) => i % step === 0);
      }
    }

    // Apply sorting (items from DynamoDB are naturally chronological asc)
    const sortParams = req.query.sort || "asc";
    if (sortParams === "desc") {
      resultData.reverse();
    }

    res.json({ range, granularity, aggregated, count: resultData.length, total: items.length, data: resultData });
  } catch (err) {
    console.error(`❌ Error fetching history:`, err.message);
    res.status(500).json({ error: err.message });
  }
});

// ✅ Reports Health Data API
app.get("/api/reports/health", requireAuth, async (req, res) => {
  try {
    const range = (req.query.range || "daily").toLowerCase();
    const now = new Date();
    let start;

    if (range === "monthly") {
      start = new Date(now); start.setDate(start.getDate() - 30);
    } else if (range === "weekly") {
      start = new Date(now); start.setDate(start.getDate() - 7);
    } else if (range === "custom" && req.query.start && req.query.end) {
      start = new Date(req.query.start);
    } else {
      start = new Date(now); start.setDate(start.getDate() - 1);
    }

    const end = (range === "custom" && req.query.end) ? new Date(req.query.end) : now;

    const [gridData, generatorData] = await Promise.all([
      getDataByTimeRange("grid", start.toISOString(), end.toISOString()),
      getDataByTimeRange("generator", start.toISOString(), end.toISOString()),
    ]);

    res.json({
      range,
      start: start.toISOString(),
      end: end.toISOString(),
      grid: gridData,
      generator: generatorData,
    });
  } catch (err) {
    console.error("❌ Error fetching report data:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// ✅ AI Report Summary Endpoint
app.post("/api/reports/summary", requireAuth, express.json(), async (req, res) => {
  try {
    const { report, range, startDate, endDate } = req.body;
    if (!report) return res.status(400).json({ error: "Report data is required" });

    const summary = await generateReportSummary(report, range, startDate, endDate);
    res.json({ summary });
  } catch (err) {
    console.error("❌ Report Summary Error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

/**
 * Sample exact items at specific time intervals.
 * @param {Array} items - Raw DynamoDB items, expected to be sorted by timestamp
 * @param {"hour"|"6hour"|"12hour"|"day"} intervalType 
 */
function sampleAtIntervals(items, intervalType) {
  if (!items.length) return [];

  const sampledMap = new Map();

  items.forEach((item) => {
    const d = new Date(item.timestamp || item.sk);
    let key;

    if (intervalType === "day") {
      key = d.toISOString().slice(0, 10); // YYYY-MM-DD
    } else if (intervalType === "hour") {
      key = d.toISOString().slice(0, 13); // YYYY-MM-DDTHH
    } else if (intervalType === "6hour") {
      const hour = d.getUTCHours();
      const bucketHour = Math.floor(hour / 6) * 6;
      key = `${d.toISOString().slice(0, 10)}T${String(bucketHour).padStart(2, '0')}:00`;
    } else if (intervalType === "12hour") {
      const hour = d.getUTCHours();
      const bucketHour = Math.floor(hour / 12) * 12;
      key = `${d.toISOString().slice(0, 10)}T${String(bucketHour).padStart(2, '0')}:00`;
    }

    // Only store the first item we encounter for this time bucket
    // Since items are returned chronologically (or reverse), the first one defines the boundary
    if (!sampledMap.has(key)) {
      // Create a clean copy to avoid modifying the original and to fit frontend expectations
      // We pass the raw item, so it contains exact readings instead of averages
      sampledMap.set(key, item);
    }
  });

  // Return the sampled items, re-sorted by actual date
  return Array.from(sampledMap.values()).sort((a, b) => {
    return new Date(a.timestamp || a.sk) - new Date(b.timestamp || b.sk);
  });
}

/**
 * Aggregate items into time buckets and compute averages.
 * @param {Array} items — raw DynamoDB items with timestamp, voltage, current, avgVoltage, avgActivePower, avgCurrent
 * @param {"day"|"week"|"month"} bucketType
 */
function aggregateIntoBuckets(items, bucketType) {
  if (!items.length) return [];

  const buckets = {};

  items.forEach((item) => {
    const d = new Date(item.timestamp || item.sk);
    let key;

    if (bucketType === "day") {
      key = d.toISOString().slice(0, 10); // YYYY-MM-DD
    } else if (bucketType === "week") {
      // Week number within dataset: group by ISO week
      const startOfYear = new Date(d.getFullYear(), 0, 1);
      const weekNum = Math.ceil(((d - startOfYear) / 86400000 + startOfYear.getDay() + 1) / 7);
      key = `${d.getFullYear()}-W${String(weekNum).padStart(2, "0")}`;
    } else if (bucketType === "month") {
      key = d.toISOString().slice(0, 7); // YYYY-MM
    } else if (bucketType === "hour") {
      key = d.toISOString().slice(0, 13); // YYYY-MM-DDTHH
    } else if (bucketType === "6hour") {
      const hour = d.getUTCHours();
      const bucketHour = Math.floor(hour / 6) * 6;
      key = `${d.toISOString().slice(0, 10)}T${String(bucketHour).padStart(2, '0')}:00`;
    } else if (bucketType === "12hour") {
      const hour = d.getUTCHours();
      const bucketHour = Math.floor(hour / 12) * 12;
      key = `${d.toISOString().slice(0, 10)}T${String(bucketHour).padStart(2, '0')}:00`;
    }

    if (!buckets[key]) {
      buckets[key] = { key, timestamps: [], voltageR: [], voltageY: [], voltageB: [], avgVoltage: [], avgCurrent: [], avgActivePower: [], powerFactor: [], thd: [] };
    }

    const b = buckets[key];
    b.timestamps.push(d.toISOString());
    if (item.voltage?.R != null) b.voltageR.push(item.voltage.R);
    if (item.voltage?.Y != null) b.voltageY.push(item.voltage.Y);
    if (item.voltage?.B != null) b.voltageB.push(item.voltage.B);
    if (item.avgVoltage != null) b.avgVoltage.push(item.avgVoltage);
    if (item.avgCurrent != null) b.avgCurrent.push(item.avgCurrent);
    if (item.avgActivePower != null) b.avgActivePower.push(item.avgActivePower);
    if (item.powerFactor != null) b.powerFactor.push(item.powerFactor);
    if (item.thd != null) b.thd.push(item.thd);
  });

  const avg = (arr) => arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : null;

  return Object.values(buckets)
    .sort((a, b) => a.key.localeCompare(b.key))
    .map((b) => ({
      timestamp: b.timestamps[Math.floor(b.timestamps.length / 2)],
      bucketKey: b.key,
      dataPoints: b.timestamps.length,
      voltage: { R: avg(b.voltageR), Y: avg(b.voltageY), B: avg(b.voltageB) },
      avgVoltage: avg(b.avgVoltage),
      avgCurrent: avg(b.avgCurrent),
      avgActivePower: avg(b.avgActivePower),
      powerFactor: avg(b.powerFactor),
      thd: avg(b.thd),
    }));
}

// ✅ Static Files (block direct access to protected HTML pages)
app.use("/public/html", (req, res, next) => {
  const protectedPages = ["/dashboard.html", "/stored-data.html", "/reports.html"];
  if (protectedPages.includes(req.path)) {
    const route = req.path.replace(".html", "").replace("/", "/");
    return res.redirect(route === "/dashboard" ? "/dashboard" : "/stored-data");
  }
  next();
});
app.use("/public", express.static(path.join(__dirname, "public")));

// ✅ Public Pages
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "public/html/index.html")));
app.get("/login", (req, res) => res.sendFile(path.join(__dirname, "public/html/login.html")));
app.get("/register", (req, res) => res.sendFile(path.join(__dirname, "public/html/register.html")));
app.get("/favicon.ico", (req, res) => res.status(204).end());

// ✅ Protected Pages (login required)
app.get("/dashboard", requireAuth, (req, res) => res.sendFile(path.join(__dirname, "public/html/dashboard.html")));
app.get("/stored-data", requireAuth, (req, res) => res.sendFile(path.join(__dirname, "public/html/stored-data.html")));
app.get("/reports", requireAuth, (req, res) => res.sendFile(path.join(__dirname, "public/html/reports.html")));
app.get("/register-config", requireAuth, (req, res) => res.sendFile(path.join(__dirname, "public/html/register-config.html")));

// ✅ Register Config CRUD APIs
const REGISTER_CONFIG_PATH = path.join(__dirname, "config", "register-map.json");

function readRegisterConfig() {
  try {
    const raw = fs.readFileSync(REGISTER_CONFIG_PATH, "utf8");
    return JSON.parse(raw);
  } catch {
    return { registers: [] };
  }
}

function writeRegisterConfig(config) {
  fs.writeFileSync(REGISTER_CONFIG_PATH, JSON.stringify(config, null, 2), "utf8");
  // Reload the parser's register map in memory
  reloadRegisterMap(config.registers);
}

// reloadRegisterMap is imported at top of file

app.get("/api/register-config", requireAuth, (req, res) => {
  res.json(readRegisterConfig());
});

app.post("/api/register-config", requireAuth, requireRole("admin"), express.json(), (req, res) => {
  try {
    const { addr, field, isPhase, source, label, unit, enabled } = req.body;
    if (addr == null || !field) {
      return res.status(400).json({ error: "addr and field are required" });
    }
    const config = readRegisterConfig();
    if (config.registers.some(r => r.addr === Number(addr))) {
      return res.status(409).json({ error: `Register address ${addr} already exists` });
    }
    config.registers.push({
      addr: Number(addr),
      field: field.trim(),
      isPhase: !!isPhase,
      source: source || "both",
      label: label || field,
      unit: unit || "",
      enabled: enabled !== false,
    });
    config.registers.sort((a, b) => a.addr - b.addr);
    writeRegisterConfig(config);
    res.status(201).json({ message: "Register added", register: config.registers.find(r => r.addr === Number(addr)) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/api/register-config/:addr", requireAuth, requireRole("admin"), (req, res) => {
  try {
    const addr = Number(req.params.addr);
    const config = readRegisterConfig();
    const before = config.registers.length;
    config.registers = config.registers.filter(r => r.addr !== addr);
    if (config.registers.length === before) {
      return res.status(404).json({ error: `Register ${addr} not found` });
    }
    writeRegisterConfig(config);
    res.json({ message: `Register ${addr} deleted` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/api/register-config/:addr/toggle", requireAuth, requireRole("admin"), (req, res) => {
  try {
    const addr = Number(req.params.addr);
    const config = readRegisterConfig();
    const reg = config.registers.find(r => r.addr === addr);
    if (!reg) return res.status(404).json({ error: `Register ${addr} not found` });
    reg.enabled = !(reg.enabled !== false);
    writeRegisterConfig(config);
    res.json({ message: `Register ${addr} ${reg.enabled ? 'enabled' : 'disabled'}`, register: reg });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/register-config/bulk-delete", requireAuth, requireRole("admin"), express.json(), (req, res) => {
  try {
    const { addrs } = req.body;
    if (!Array.isArray(addrs) || !addrs.length) {
      return res.status(400).json({ error: "addrs array is required" });
    }
    const addrSet = new Set(addrs.map(Number));
    const config = readRegisterConfig();
    const before = config.registers.length;
    config.registers = config.registers.filter(r => !addrSet.has(r.addr));
    writeRegisterConfig(config);
    res.json({ message: `${before - config.registers.length} register(s) deleted` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ SNS APIs (admin only)
app.post("/api/sns/subscribe", requireAuth, requireRole("admin"), express.json(), async (req, res) => {
  try {
    const { protocol, endpoint } = req.body;
    if (!protocol || !endpoint) {
      return res.status(400).json({ error: "protocol and endpoint are required" });
    }
    const result = await subscribeToTopic(protocol, endpoint);
    res.json({ message: "Subscription request sent", subscriptionArn: result.SubscriptionArn });
  } catch (err) {
    console.error("❌ SNS subscribe error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/sns/subscriptions", requireAuth, requireRole("admin"), async (req, res) => {
  try {
    const subscriptions = await listTopicSubscriptions();
    res.json(subscriptions);
  } catch (err) {
    console.error("❌ SNS list subscriptions error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

app.delete("/api/sns/unsubscribe", requireAuth, requireRole("admin"), express.json(), async (req, res) => {
  try {
    const { subscriptionArn } = req.body;
    if (!subscriptionArn) {
      return res.status(400).json({ error: "subscriptionArn is required" });
    }
    await unsubscribeFromTopic(subscriptionArn);
    res.json({ message: "Unsubscribed successfully" });
  } catch (err) {
    console.error("❌ SNS unsubscribe error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/sns/test-alert", requireAuth, requireRole("admin"), express.json(), async (req, res) => {
  try {
    const subject = req.body.subject || "PowerPulse Test Alert";
    const message = req.body.message || `This is a test alert from PowerPulse.\nTime: ${new Date().toISOString()}`;
    const result = await publishAlert(subject, message);
    if (!result) {
      return res.status(503).json({ error: "SNS is not initialized" });
    }
    res.json({ message: "Test alert sent", messageId: result.MessageId });
  } catch (err) {
    console.error("❌ SNS test alert error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/sns/sandbox/send-otp", requireAuth, requireRole("admin"), express.json(), async (req, res) => {
  try {
    const { phoneNumber } = req.body;
    if (!phoneNumber) {
      return res.status(400).json({ error: "phoneNumber is required (E.164 format, e.g. +919876543210)" });
    }
    await createSandboxPhoneNumber(phoneNumber);
    res.json({ message: `OTP sent to ${phoneNumber}` });
  } catch (err) {
    console.error("❌ SNS sandbox send-otp error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/sns/sandbox/verify", requireAuth, requireRole("admin"), express.json(), async (req, res) => {
  try {
    const { phoneNumber, otp } = req.body;
    if (!phoneNumber || !otp) {
      return res.status(400).json({ error: "phoneNumber and otp are required" });
    }
    await verifySandboxPhoneNumber(phoneNumber, otp);
    res.json({ message: `Phone number ${phoneNumber} verified successfully` });
  } catch (err) {
    console.error("❌ SNS sandbox verify error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// ✅ EC2 APIs (admin only)
app.get("/api/ec2/instances", requireAuth, requireRole("admin"), async (req, res) => {
  try {
    const instances = await listInstances();
    res.json(instances);
  } catch (err) {
    console.error("❌ EC2 list instances error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/ec2/instances/:instanceId/status", requireAuth, requireRole("admin"), async (req, res) => {
  try {
    const statuses = await getInstanceStatus([req.params.instanceId]);
    res.json(statuses[0] || { error: "Instance not found" });
  } catch (err) {
    console.error("❌ EC2 instance status error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/ec2/instances/start", requireAuth, requireRole("admin"), express.json(), async (req, res) => {
  try {
    const { instanceIds } = req.body;
    if (!instanceIds || !Array.isArray(instanceIds)) {
      return res.status(400).json({ error: "instanceIds array is required" });
    }
    const result = await startInstances(instanceIds);
    res.json(result);
  } catch (err) {
    console.error("❌ EC2 start error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/ec2/instances/stop", requireAuth, requireRole("admin"), express.json(), async (req, res) => {
  try {
    const { instanceIds } = req.body;
    if (!instanceIds || !Array.isArray(instanceIds)) {
      return res.status(400).json({ error: "instanceIds array is required" });
    }
    const result = await stopInstances(instanceIds);
    res.json(result);
  } catch (err) {
    console.error("❌ EC2 stop error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/ec2/instances/reboot", requireAuth, requireRole("admin"), express.json(), async (req, res) => {
  try {
    const { instanceIds } = req.body;
    if (!instanceIds || !Array.isArray(instanceIds)) {
      return res.status(400).json({ error: "instanceIds array is required" });
    }
    const result = await rebootInstances(instanceIds);
    res.json(result);
  } catch (err) {
    console.error("❌ EC2 reboot error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// ✅ Lambda APIs (admin only)
app.get("/api/lambda/functions", requireAuth, requireRole("admin"), async (req, res) => {
  try {
    const functions = await listFunctions();
    res.json(functions);
  } catch (err) {
    console.error("❌ Lambda list functions error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/lambda/functions/:functionName", requireAuth, requireRole("admin"), async (req, res) => {
  try {
    const details = await getFunctionDetails(req.params.functionName);
    res.json(details);
  } catch (err) {
    console.error("❌ Lambda get function error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/lambda/invoke", requireAuth, requireRole("admin"), express.json(), async (req, res) => {
  try {
    const { functionName, payload, invocationType } = req.body;
    if (!functionName) {
      return res.status(400).json({ error: "functionName is required" });
    }
    const result = await invokeFunction(functionName, payload || {}, invocationType || "RequestResponse");
    res.json(result);
  } catch (err) {
    console.error("❌ Lambda invoke error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// ✅ Start Server (EC2 Continuous Deployment)
server.listen(PORT, () => console.log(`🚀 Server running continuously at http://localhost:${PORT}`));
