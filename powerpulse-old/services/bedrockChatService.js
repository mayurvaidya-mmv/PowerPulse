export async function askChatbot(userMessage, chatHistory, contextData) {
  try {
    const MODEL_ID = "meta.llama3-70b-instruct-v1:0";
    const ENDPOINT_URL = `https://bedrock-runtime.ap-south-1.amazonaws.com/model/${encodeURIComponent(MODEL_ID)}/converse`;
    
    // Bedrock API Key
    const BEARER_TOKEN = "ABSKQmVkcm9ja0FQSUtleS13cXB3LWF0LTU1OTA1MDI0NTU4NjpjQWNnSG9tOUo0azZ5NVdNcU5tZUpuVElkc2QydG9YN2ZpTVZtRDBSQm05LzlXcUpxLzJOYWJsYnJEVT0=";

    const liveData = contextData.live || contextData;
    const storedData = contextData.stored || { grid: [], generator: [] };

    // Build a compact summary of stored data to stay within token limits
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

    const resp = await fetch(ENDPOINT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${BEARER_TOKEN}`
      },
      body: JSON.stringify({
        system: [{ text: systemPrompt }],
        messages: messages,
        inferenceConfig: { maxTokens: 512, temperature: 0.5, topP: 0.9 }
      })
    });

    if (!resp.ok) {
      const errText = await resp.text();
      console.error("Bedrock API Error:", errText);
      throw new Error(`Bedrock HTTP ${resp.status}: ${errText}`);
    }

    const data = await resp.json();
    
    return {
      text: data.output.message.content[0].text,
      updatedHistory: [...messages, data.output.message]
    };
  } catch (error) {
    console.error("❌ Bedrock Chat Error:", error);
    throw new Error("Failed to process chat request using AWS Bedrock API: " + error.message);
  }
}

export async function generateReportSummary(reportData, range, startDate, endDate) {
  try {
    const MODEL_ID = "meta.llama3-70b-instruct-v1:0";
    const ENDPOINT_URL = `https://bedrock-runtime.ap-south-1.amazonaws.com/model/${encodeURIComponent(MODEL_ID)}/converse`;
    const BEARER_TOKEN = "ABSKQmVkcm9ja0FQSUtleS13cXB3LWF0LTU1OTA1MDI0NTU4NjpjQWNnSG9tOUo0azZ5NVdNcU5tZUpuVElkc2QydG9YN2ZpTVZtRDBSQm05LzlXcUpxLzJOYWJsYnJEVT0=";

    // Create a summarized version of the report to save tokens
    const dataSummary = {
      period: reportData.periodDurationStr,
      uptime: reportData.uptimePercent + "%",
      switches: reportData.totalSwitches,
      downtime: reportData.totalDowntimeStr,
      grid: {
        avgPower: (reportData.consumption && reportData.consumption.grid) ? reportData.consumption.grid.avgPower.toFixed(2) + " kW" : "0 kW",
        consumption: (reportData.consumption && reportData.consumption.grid) ? reportData.consumption.grid.kWh + " kWh" : "0 kWh"
      },
      generator: {
        avgPower: (reportData.consumption && reportData.consumption.generator) ? reportData.consumption.generator.avgPower.toFixed(2) + " kW" : "0 kW",
        consumption: (reportData.consumption && reportData.consumption.generator) ? reportData.consumption.generator.kWh + " kWh" : "0 kWh"
      },
      msgPerMin: reportData.messagesPerMin,
      downtimeIncidents: (reportData.downtimePeriods && reportData.downtimePeriods.length) ? reportData.downtimePeriods.length : 0,
    };

    const periodText = (range === 'custom') ? `Custom Range (${startDate} to ${endDate})` : `Last ${range}`;
    
    const systemPrompt = `You are an expert electrical engineer and AI Analyst for the PowerPulse Dashboard.
Your task is to generate a comprehensive, structured summary of the historical power system data provided.

REQUIREMENTS:
1. Format your response in a highly structured, point-wise layout.
2. Use Markdown tables, bullet points, or figures to present the data clearly if needed.
3. Highlight ANY major abnormal changes, interruptions, downtime, or significant source switching.
4. Include an "Overall Assessment" section.
5. Provide detailed explanations for the metrics but keep it concise and analytical.
6. The output must NOT exceed 1000 tokens.
7. Only output the final markdown report. Do NOT include generic conversational filler like "Here is the summary:"`;

    const userMessage = `Please generate the AI Summary Report for the time range: ${periodText}

REPORT DATA:
${JSON.stringify(dataSummary, null, 2)}`;

    const resp = await fetch(ENDPOINT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${BEARER_TOKEN}`
      },
      body: JSON.stringify({
        system: [{ text: systemPrompt }],
        messages: [{ role: "user", content: [{ text: userMessage }] }],
        inferenceConfig: { maxTokens: 1000, temperature: 0.4, topP: 0.9 }
      })
    });

    if (!resp.ok) {
      const errText = await resp.text();
      console.error("Bedrock API Error (Summary):", errText);
      throw new Error(`Bedrock HTTP ${resp.status}: ${errText}`);
    }

    const data = await resp.json();
    return data.output.message.content[0].text;
  } catch (error) {
    console.error("❌ Report Summary Error:", error);
    throw new Error("Failed to generate AI report summary: " + error.message);
  }
}
