// AI Report Prompts — only asks the AI for TEXT analysis content (not HTML).
// The HTML template is built server-side by aiReportBuilder.js

export const SYSTEM_PROMPT = `You are an expert Electrical Energy Auditor and Power Quality Analyst for the PowerPulse IoT monitoring system at AISSMS IOIT, Pune.
Analyze sensor data and provide professional engineering insights. Use Indian electrical standards (MSEDCL, IS 14697, BEE EC Act 2001, CEA Technical Standards 2010).
STRICT RULES:
- Output ONLY valid JSON. No markdown. No backtick fences. No conversational text.
- All analysis must reference specific numbers from the sensor data.
- Use Indian Rupee (INR/₹) for costs.
- Be professional and concise.`;

export function buildAnalysisPrompt(sensorData) {
  return `Analyze this power monitoring data and return a JSON object with exactly these 4 keys:

SENSOR DATA:
${sensorData}

Return this exact JSON structure (no extra text before or after):
{
  "executiveSummary": "A detailed 4-5 sentence professional summary paragraph. Include: total energy consumed, peak demand, power factor status vs 0.90 MSEDCL threshold, voltage profile vs IS 14697 (216-244V), THD assessment, and overall system health verdict. Use specific numbers from the data.",
  "anomalyAnalysis": "A 2-3 sentence paragraph summarizing the key anomalies detected. Reference specific parameters that are outside normal ranges and their potential impact on equipment and costs.",
  "recommendations": [
    {"title": "Recommendation title", "description": "2-3 sentence practical recommendation based on actual data findings", "saving": "Estimated saving: ₹X,XXX/month or X% improvement"},
    {"title": "Second recommendation", "description": "Description based on data", "saving": "Estimated saving"},
    {"title": "Third recommendation", "description": "Description based on data", "saving": "Estimated saving"},
    {"title": "Fourth recommendation", "description": "Description based on data", "saving": "Estimated saving"}
  ],
  "conclusion": "A 3-4 sentence professional conclusion. Summarize key findings, most critical action needed, projected savings potential, and mention PowerPulse Dashboard's role in continuous monitoring."
}

Output ONLY the JSON object. No other text.`;
}

export function buildSensorDataString(metrics) {
  return `- Total Energy: ${metrics.totalKwh} kWh (Grid: ${metrics.gridKwh} kWh, DG: ${metrics.dgKwh} kWh)
- Peak Demand: ${metrics.peakKw} kW | Average Demand: ${metrics.avgKw} kW
- Power Factor: Avg ${metrics.pfAvg}, Min ${metrics.pfMin} (MSEDCL threshold: 0.90)
- Voltage: Avg ${metrics.vAvg}V, Min ${metrics.vMin}V, Max ${metrics.vMax}V (IS norm: 216-244V)
- Current: Avg ${metrics.iAvg}A, Min ${metrics.iMin}A, Max ${metrics.iMax}A
- Grid Hours: ~${metrics.periodHrs}hrs | Downtime: ${metrics.dgHrs} | Uptime: ${metrics.uptimePct}%
- MSEDCL Cost: ₹${metrics.msedclCost} | DG Cost: ₹${metrics.dgCost}
- Load Factor: ${metrics.loadFactor} | THD: ${metrics.thdVal}
- Source Switches: ${metrics.totalSwitches} | Alerts: ${metrics.alertsCount}
- Period: ${metrics.periodStart} to ${metrics.periodEnd}`;
}
