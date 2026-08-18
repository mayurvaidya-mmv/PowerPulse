// services/mlService.js
import axios from "axios";

const ML_API_URL = process.env.ML_API_URL || "http://localhost:8083";

/**
 * Send full three-phase data to Flask ML API for anomaly/prediction analysis.
 * Includes voltage, current (R/Y/B), active power, power factor, frequency,
 * apparent power, and per-phase THD.
 */
export async function getMLPrediction(data) {
  try {
    const response = await axios.post(`${ML_API_URL}/predict`, {
      // Three-phase voltages
      voltage_R: data.voltage?.R || 0,
      voltage_Y: data.voltage?.Y || 0,
      voltage_B: data.voltage?.B || 0,
      avgVoltage: data.avgVoltage || 0,
      // Three-phase currents
      current_R: data.current?.R || 0,
      current_Y: data.current?.Y || 0,
      current_B: data.current?.B || 0,
      avgCurrent: data.avgCurrent || 0,
      // Power metrics
      activePower: data.avgActivePower || 0,
      apparentPower: data.apparentPower || 0,
      powerFactor: data.powerFactor || 1,
      frequency: data.frequency || 50,
      // THD per phase (voltage)
      thd_voltage_R: data.thdVoltage?.R || 0,
      thd_voltage_Y: data.thdVoltage?.Y || 0,
      thd_voltage_B: data.thdVoltage?.B || 0,
      // THD per phase (current)
      thd_current_R: data.thdCurrent?.R || 0,
      thd_current_Y: data.thdCurrent?.Y || 0,
      thd_current_B: data.thdCurrent?.B || 0,
      // Legacy flat THD (for backward compat)
      thd: data.thd || 0,
      // Device info
      device: (data.type || "unknown").toUpperCase(),
    });

    console.log("🧠 ML Prediction Response:", response.data);
    return response.data;
  } catch (err) {
    console.error("⚠️ ML Prediction Error:", err.message);
    return { is_anomaly: null, predicted_activePower: null };
  }
}

/**
 * Send per-phase THD data to Flask ML API for harmonic anomaly detection.
 * Now includes both voltage and current THD per phase and frequency.
 */
export async function checkTHDAnomaly(data) {
  try {
    const response = await axios.post(`${ML_API_URL}/detect_thd`, {
      // Per-phase voltage THD
      thd_voltage_R: data.thdVoltage?.R || 0,
      thd_voltage_Y: data.thdVoltage?.Y || 0,
      thd_voltage_B: data.thdVoltage?.B || 0,
      // Per-phase current THD
      thd_current_R: data.thdCurrent?.R || 0,
      thd_current_Y: data.thdCurrent?.Y || 0,
      thd_current_B: data.thdCurrent?.B || 0,
      // Per-phase voltages (context)
      voltage_R: data.voltage?.R || 0,
      voltage_Y: data.voltage?.Y || 0,
      voltage_B: data.voltage?.B || 0,
      // Frequency and power factor (context)
      frequency: data.frequency || 50,
      powerFactor: data.powerFactor || 1,
      // Legacy flat THD (backward compat)
      thd: data.thd || 0,
    });

    console.log("📈 THD Detection Response:", response.data);
    return response.data;
  } catch (err) {
    console.error("⚠️ THD Anomaly Detection Error:", err.message);
    return { is_thd_anomaly: false, threshold_violation: false, message: "Error" };
  }
}
