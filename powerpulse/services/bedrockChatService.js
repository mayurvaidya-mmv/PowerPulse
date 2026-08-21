import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SETTINGS_PATH = path.join(__dirname, "..", "config", "settings.json");

// Fallback hardcoded key (used if settings file has no key)

function getAIConfig() {
  try {
    const raw = fs.readFileSync(SETTINGS_PATH, "utf8");
    const settings = JSON.parse(raw);

    // The new logic uses modelId as the single source of truth
    const modelId = settings.ai?.modelId || settings.ai?.bedrockModelId || "meta.llama3-70b-instruct-v1:0";

    // Auto-detect provider based on model ID prefix
    const isOpenAi = modelId.startsWith("gpt-") || modelId.startsWith("o1-");
    const provider = isOpenAi ? "openai" : "bedrock";

    return {
      provider,
      bedrockKey: settings.ai?.bedrockApiKey || process.env.BEDROCK_API_KEY || "",
      openaiKey: settings.ai?.openaiApiKey || process.env.OPENAI_API_KEY || "",
      modelId,
      maxTokens: settings.ai?.maxTokens || 1000,
      temperature: settings.ai?.temperature ?? 0.4,
    };
  } catch {
    return {
      provider: "bedrock",
      bedrockKey: FALLBACK_BEARER_TOKEN,
      openaiKey: "",
      modelId: "meta.llama3-70b-instruct-v1:0",
      maxTokens: 1000,
      temperature: 0.4,
    };
  }
}

async function callOpenAi(config, systemPrompt, messages) {
  const url = "https://api.openai.com/v1/chat/completions";
  // Convert Bedrock format [{role, content: [{text}]}] to OpenAI [{role, content}]
  const formattedMessages = messages.map(m => ({
    role: m.role,
    content: typeof m.content === "string" ? m.content : (m.content?.[0]?.text || "")
  }));

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${config.openaiKey}`
    },
    body: JSON.stringify({
      model: config.modelId,
      messages: [{ role: "system", content: systemPrompt }, ...formattedMessages],
      max_tokens: config.maxTokens,
      temperature: config.temperature
    })
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`OpenAI Error: ${err}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
}

// Model-specific max output token limits for Bedrock Converse API
const MODEL_TOKEN_LIMITS = {
  "meta.llama3-70b-instruct-v1:0": 2048,
  "meta.llama3-8b-instruct-v1:0": 2048,
  "amazon.titan-text-express-v1": 4096,
  "amazon.titan-text-lite-v1": 4096,
  "anthropic.claude-3-sonnet-20240229-v1:0": 4096,
  "anthropic.claude-3-haiku-20240307-v1:0": 4096,
};

function getModelTokenLimit(modelId) {
  return MODEL_TOKEN_LIMITS[modelId] || 2048; // conservative default
}

async function callBedrock(config, systemPrompt, messages, overrideMaxTokens) {
  const url = `https://bedrock-runtime.ap-south-1.amazonaws.com/model/${encodeURIComponent(config.modelId)}/converse`;
  const modelLimit = getModelTokenLimit(config.modelId);
  const tokenLimit = Math.min(overrideMaxTokens || Math.min(config.maxTokens, 512), modelLimit);

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${config.bedrockKey}`
    },
    body: JSON.stringify({
      system: [{ text: systemPrompt }],
      messages: messages,
      inferenceConfig: { maxTokens: tokenLimit, temperature: config.temperature, topP: 0.9 }
    })
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Bedrock Error: ${err}`);
  }

  const data = await response.json();
  return data.output.message.content[0].text;
}

export async function askChatbot(userMessage, chatHistory, contextData) {
  try {
    const config = getAIConfig();
    const ENDPOINT_URL = `https://bedrock-runtime.ap-south-1.amazonaws.com/model/${encodeURIComponent(config.modelId)}/converse`;

    const liveData = contextData.live || contextData;
    const storedData = contextData.stored || { grid: [], generator: [] };

    function summarizeRecords(records) {
      if (!records || records.length === 0) return { available: false };
      const latest = records[0];
      const oldest = records[records.length - 1];
      return {
        available: true,
        recordCount: records.length,
        timeRange: {
          from: oldest?.timestamp || oldest?.sk || "unknown",
          to: latest?.timestamp || latest?.sk || "unknown"
        },
        latestReading: {
          timestamp: latest.timestamp || latest.sk,
          avgVoltage: latest.avgVoltage,
          avgCurrent: latest.avgCurrent,
          avgActivePower: latest.avgActivePower,
          powerFactor: latest.powerFactor,
          frequency: latest.frequency,
          apparentPower: latest.apparentPower,
          voltage: latest.voltage,
          current: latest.current,
        }
      };
    }

    const storedSummary = {
      grid: summarizeRecords(storedData.grid),
      generator: summarizeRecords(storedData.generator)
    };

    const systemPrompt = `You are the PowerPulse AI Assistant, an expert electrical engineer and IoT data analyst.
You help operators understand their power consumption, generator health, and anomalies.

LIVE DATA: ${JSON.stringify(liveData)}
STORED DATA: ${JSON.stringify(storedSummary)}

Use stored data when live data is empty. Be concise. Use Markdown.`;

    const messages = chatHistory || [];
    messages.push({ role: "user", content: [{ text: userMessage }] });

    let finalResponse;
    if (config.provider === "openai") {
      finalResponse = await callOpenAi(config, systemPrompt, messages);
    } else {
      finalResponse = await callBedrock(config, systemPrompt, messages);
    }

    return {
      text: finalResponse,
      updatedHistory: [...messages, { role: "assistant", content: [{ text: finalResponse }] }]
    };
  } catch (error) {
    console.error("❌ AI Assistant Error:", error);
    throw new Error("Failed to process chat request: " + error.message);
  }
}

export async function generateReportSummary(reportData, range, startDate, endDate, customPrompt) {
  try {
    const config = getAIConfig();
    const { SYSTEM_PROMPT: sysPrompt, buildAnalysisPrompt, buildSensorDataString } = await import("./aiReportPrompts.js");
    const { buildReportHtml } = await import("./aiReportBuilder.js");

    // ── Extract metrics ──
    const metrics = {
      totalKwh: reportData.consumption?.total?.kWh || "0.00",
      gridKwh: reportData.consumption?.grid?.kWh || "0.00",
      dgKwh: reportData.consumption?.generator?.kWh || "0.00",
      peakKw: reportData.grid?.avgActivePower?.max != null ? (reportData.grid.avgActivePower.max / 1000).toFixed(2) : "N/A",
      avgKw: reportData.grid?.avgActivePower?.avg != null ? (reportData.grid.avgActivePower.avg / 1000).toFixed(2) : "N/A",
      pfAvg: reportData.grid?.powerFactor?.avg != null ? reportData.grid.powerFactor.avg.toFixed(3) : "N/A",
      pfMin: reportData.grid?.powerFactor?.min != null ? reportData.grid.powerFactor.min.toFixed(3) : "N/A",
      vAvg: reportData.grid?.avgVoltage?.avg != null ? reportData.grid.avgVoltage.avg.toFixed(1) : "N/A",
      vMin: reportData.grid?.avgVoltage?.min != null ? reportData.grid.avgVoltage.min.toFixed(1) : "N/A",
      vMax: reportData.grid?.avgVoltage?.max != null ? reportData.grid.avgVoltage.max.toFixed(1) : "N/A",
      iAvg: reportData.grid?.avgCurrent?.avg != null ? reportData.grid.avgCurrent.avg.toFixed(1) : "N/A",
      iMin: reportData.grid?.avgCurrent?.min != null ? reportData.grid.avgCurrent.min.toFixed(1) : "N/A",
      iMax: reportData.grid?.avgCurrent?.max != null ? reportData.grid.avgCurrent.max.toFixed(1) : "N/A",
      msedclCost: reportData.consumption?.grid?.cost || "0.00",
      dgCost: reportData.consumption?.generator?.cost || "0.00",
      periodHrs: reportData.periodDurationMs ? (reportData.periodDurationMs / 3600000).toFixed(1) : "24",
      dgHrs: reportData.totalDowntimeStr || "0s",
      uptimePct: reportData.uptimePercent || "N/A",
      totalSwitches: reportData.totalSwitches || 0,
      loadFactor: "N/A",
      thdVal: reportData.grid?.thdVoltage?.avg != null ? reportData.grid.thdVoltage.avg.toFixed(2) + "%" : "N/A",
      alertsCount: reportData.totalAlerts || "N/A",
      periodStart: reportData.periodStart || startDate || "N/A",
      periodEnd: reportData.periodEnd || endDate || "N/A",
      generatedOn: new Date().toLocaleString("en-IN", { dateStyle: "long", timeStyle: "short" }),
    };

    if (reportData.grid?.avgActivePower?.avg != null && reportData.grid?.avgActivePower?.max != null && reportData.grid.avgActivePower.max > 0) {
      metrics.loadFactor = (reportData.grid.avgActivePower.avg / reportData.grid.avgActivePower.max).toFixed(2);
    }

    // Build sensor data string for the AI prompt
    const sensorDataStr = buildSensorDataString(metrics);
    const analysisPrompt = customPrompt || buildAnalysisPrompt(sensorDataStr);

    // ── Single AI call — ask for JSON text analysis only ──
    const modelLimit = getModelTokenLimit(config.modelId);
    console.log(`📊 AI Report — requesting analysis from ${config.modelId} (limit: ${modelLimit} tokens)...`);

    const messages = [{ role: "user", content: [{ text: analysisPrompt }] }];
    let aiResponse;
    if (config.provider === "openai") {
      aiResponse = await callOpenAi(config, sysPrompt, messages);
    } else {
      aiResponse = await callBedrock(config, sysPrompt, messages, Math.min(modelLimit, 2000));
    }

    console.log("✅ AI analysis received. Building report HTML...");

    // ── Parse AI response as JSON ──
    let aiText;
    try {
      // Clean up the response — remove any markdown fences or extra text
      let cleaned = aiResponse.trim();
      cleaned = cleaned.replace(/^```json?\s*\n?/i, "").replace(/\n?\s*```\s*$/i, "").trim();
      // Find the JSON object in the response
      const jsonMatch = cleaned.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        aiText = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error("No JSON object found in AI response");
      }
    } catch (parseErr) {
      console.warn("⚠️ Could not parse AI response as JSON, using fallback text...");
      console.warn("Raw AI response:", aiResponse.substring(0, 500));
      // Fallback: clean the raw response and use as executive summary
      let rawText = aiResponse
        .replace(/```json?\s*/gi, '').replace(/```\s*/g, '')  // remove code fences
        .replace(/[{}\[\]"]/g, '')  // remove JSON brackets/quotes
        .replace(/executiveSummary\s*:/gi, '')  // remove key names
        .replace(/anomalyAnalysis\s*:/gi, '')
        .replace(/recommendations\s*:/gi, '')
        .replace(/conclusion\s*:/gi, '')
        .replace(/title\s*:/gi, '• ')
        .replace(/description\s*:/gi, '')
        .replace(/saving\s*:/gi, '— Saving: ')
        .replace(/\n\s*\n/g, '\n')  // collapse blank lines
        .trim();
      aiText = {
        executiveSummary: rawText.substring(0, 600),
        anomalyAnalysis: "AI analysis could not be fully parsed. Please review the data manually or try regenerating.",
        recommendations: [
          { title: "Power Factor Improvement", description: "Install automatic power factor correction (APFC) panels to maintain PF above 0.95 and avoid MSEDCL penalty charges.", saving: "Estimated 8-12% reduction in electricity bill" },
          { title: "Voltage Stabilization", description: "Deploy servo voltage stabilizers to maintain voltage within IS 14697 norms and protect sensitive equipment.", saving: "Prevents equipment damage worth ₹50,000+/year" },
          { title: "Load Management", description: "Implement load scheduling to improve load factor and reduce peak demand charges.", saving: "Estimated 5-8% reduction in demand charges" },
          { title: "DG Optimization", description: "Minimize diesel generator usage through better grid reliability monitoring and UPS backup for critical loads.", saving: "Estimated 15% reduction in DG fuel costs" }
        ],
        conclusion: "The PowerPulse monitoring system provides comprehensive visibility into the facility's power quality parameters. Implementing the recommended measures can significantly reduce energy costs and improve supply reliability. Continuous monitoring via the PowerPulse Dashboard enables proactive maintenance and rapid anomaly detection."
      };
    }

    // Ensure recommendations is an array
    if (!Array.isArray(aiText.recommendations)) {
      aiText.recommendations = [
        { title: "Power Factor Correction", description: "Install APFC panels to maintain PF above 0.95.", saving: "8-12% bill reduction" },
        { title: "Voltage Monitoring", description: "Deploy stabilizers for voltage regulation.", saving: "Equipment protection" },
        { title: "Load Optimization", description: "Schedule loads to improve load factor.", saving: "5-8% demand charge reduction" },
        { title: "DG Runtime Reduction", description: "Minimize generator usage with better grid monitoring.", saving: "15% fuel savings" }
      ];
    }

    // ── Build the complete HTML using the server-side template ──
    const finalHtml = buildReportHtml(metrics, aiText);
    console.log("✅ AI Report complete — professional HTML generated.");
    return finalHtml;

  } catch (error) {
    console.error("❌ Report Summary Error:", error);
    throw new Error("Failed to generate AI report summary: " + error.message);
  }
}
