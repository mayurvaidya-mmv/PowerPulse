// services/snsService.js
import {
    SNSClient,
    PublishCommand,
    SubscribeCommand,
    ListSubscriptionsByTopicCommand,
    UnsubscribeCommand,
    CreateSMSSandboxPhoneNumberCommand,
    VerifySMSSandboxPhoneNumberCommand,
} from "@aws-sdk/client-sns";

let snsClient = null;
let snsConfig = null;
const lastAlertTimestamps = {};

function normalizeEnvValue(value) {
    return (value || "").trim().replace(/^['"]|['"]$/g, "");
}

function isEnabledFlag(value) {
    return normalizeEnvValue(value).toLowerCase() === "true";
}

/**
 * Initialize the SNS client using the same AWS credentials in .env.
 */
export function initSns() {
    const enabled = isEnabledFlag(process.env.SNS_ENABLED || "false");

    if (!enabled) {
        console.log("ℹ️ SNS is disabled (set SNS_ENABLED=true to enable).");
        return;
    }

    const region = normalizeEnvValue(process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION);
    const topicArn = normalizeEnvValue(process.env.SNS_TOPIC_ARN);

    if (!topicArn) {
        console.warn("⚠️ SNS is enabled but SNS_TOPIC_ARN is missing.");
        return;
    }

    // Extract region from the topic ARN (arn:aws:sns:REGION:account:topic)
    const arnParts = topicArn.split(":");
    const snsRegion = (arnParts.length >= 4 && arnParts[3]) ? arnParts[3] : region;

    if (!snsRegion) {
        console.warn("⚠️ SNS: Could not determine region from ARN or AWS_REGION.");
        return;
    }

    const accessKeyId = normalizeEnvValue(process.env.AWS_ACCESS_KEY_ID);
    const secretAccessKey = normalizeEnvValue(process.env.AWS_SECRET_ACCESS_KEY);
    const sessionToken = normalizeEnvValue(process.env.AWS_SESSION_TOKEN);

    const clientConfig = { region: snsRegion };
    if (accessKeyId && secretAccessKey) {
        clientConfig.credentials = {
            accessKeyId,
            secretAccessKey,
            sessionToken: sessionToken || undefined,
        };
    }

    try {
        snsClient = new SNSClient(clientConfig);

        snsConfig = {
            topicArn,
            // Voltage: Indian grid is 220V ±10%. Alert only on dangerous levels.
            voltageMin: parseFloat(process.env.SNS_ALERT_VOLTAGE_MIN) || 180,   // critically low
            voltageMax: parseFloat(process.env.SNS_ALERT_VOLTAGE_MAX) || 270,   // critically high
            // Power factor: 0.70 is genuinely poor, not a minor dip
            pfMin: parseFloat(process.env.SNS_ALERT_PF_MIN) || 0.70,
            // Frequency: Indian grid = 50 Hz, ±2 Hz is already unusual
            freqMin: parseFloat(process.env.SNS_ALERT_FREQ_MIN) || 48,
            freqMax: parseFloat(process.env.SNS_ALERT_FREQ_MAX) || 52,
            // THD: IEEE 519 limit is ~8%, alert on clearly excessive levels
            thdMax: parseFloat(process.env.SNS_ALERT_THD_MAX) || 15,
            // Phase imbalance: 20% is a real problem, 5–10% is normal
            imbalanceMax: parseFloat(process.env.SNS_ALERT_IMBALANCE_MAX) || 20,
            // Overload: disabled by default (set in .env when you know your load limit)
            powerMax: parseFloat(process.env.SNS_ALERT_POWER_MAX) || 0,
            // Cooldown: 15 minutes between same alert type to avoid flooding
            cooldownSeconds: parseInt(process.env.SNS_ALERT_COOLDOWN_SECONDS, 10) || 900,
        };

        console.log(`✅ SNS client initialized`);
    } catch (err) {
        console.error("❌ Failed to initialize SNS client:", err.message);
        snsClient = null;
        snsConfig = null;
    }
}

/**
 * Publish a message to the configured SNS topic.
 */
export async function publishAlert(subject, message) {
    if (!snsClient || !snsConfig) return null;

    const command = new PublishCommand({
        TopicArn: snsConfig.topicArn,
        Subject: subject.substring(0, 100), // SNS subject max 100 chars
        Message: message,
    });

    const response = await snsClient.send(command);
    console.log(`📢 SNS alert published (MessageId: ${response.MessageId})`);
    return response;
}

/**
 * Check if cooldown has elapsed for a given alert key.
 */
function isCooldownActive(alertKey) {
    const now = Date.now();
    const lastSent = lastAlertTimestamps[alertKey] || 0;
    return now - lastSent < (snsConfig?.cooldownSeconds || 300) * 1000;
}

/**
 * Record that an alert was sent for a given key.
 */
function recordAlert(alertKey) {
    lastAlertTimestamps[alertKey] = Date.now();
}

/**
 * Check parsed IoT data against thresholds and publish SNS alerts if breached.
 * This function is safe to call on every message — cooldown prevents flooding.
 *
 * Alert types:
 *   - Low / High Voltage
 *   - Low Power Factor
 *   - Frequency out of range (47–53 Hz)
 *   - High Voltage THD (> 8%)
 *   - Phase Voltage Imbalance (> 10%)
 *   - High Active Power (overload warning)
 */
export async function checkAndAlert(parsedData) {
    if (!snsClient || !snsConfig || !parsedData) return;

    const { type, avgVoltage, powerFactor, voltage, current, frequency,
            thdVoltage, avgActivePower, apparentPower } = parsedData;
    const alerts = [];
    const now = new Date().toISOString();
    const src = (type || "unknown").toUpperCase();

    // Helper to build consistent alert messages
    const buildMsg = (metric, value, threshold, extra = "") =>
        `[PowerPulse Alert]\n\n` +
        `Source: ${src} meter\n` +
        `Metric: ${metric}\n` +
        `Value: ${value}\n` +
        `Threshold: ${threshold}\n` +
        `Time: ${now}\n` +
        (extra ? `\n${extra}` : "");

    const phaseStr = (obj, unit = "") =>
        `R: ${obj?.R ?? "N/A"}${unit}, Y: ${obj?.Y ?? "N/A"}${unit}, B: ${obj?.B ?? "N/A"}${unit}`;

    // ─── 1. Voltage threshold check ───
    if (avgVoltage != null) {
        if (avgVoltage < snsConfig.voltageMin) {
            const key = `${type}_low_voltage`;
            if (!isCooldownActive(key)) {
                alerts.push({
                    key,
                    subject: `⚠️ PowerPulse: Low Voltage (${src})`,
                    message: buildMsg(
                        "Average Voltage",
                        `${avgVoltage.toFixed(2)} V`,
                        `< ${snsConfig.voltageMin} V`,
                        `Phase voltages — ${phaseStr(voltage, " V")}`
                    ),
                });
            }
        }

        if (avgVoltage > snsConfig.voltageMax) {
            const key = `${type}_high_voltage`;
            if (!isCooldownActive(key)) {
                alerts.push({
                    key,
                    subject: `⚠️ PowerPulse: High Voltage (${src})`,
                    message: buildMsg(
                        "Average Voltage",
                        `${avgVoltage.toFixed(2)} V`,
                        `> ${snsConfig.voltageMax} V`,
                        `Phase voltages — ${phaseStr(voltage, " V")}`
                    ),
                });
            }
        }
    }

    // ─── 2. Power factor threshold check ───
    if (powerFactor != null && powerFactor < snsConfig.pfMin) {
        const key = `${type}_low_pf`;
        if (!isCooldownActive(key)) {
            alerts.push({
                key,
                subject: `⚠️ PowerPulse: Low Power Factor (${src})`,
                message: buildMsg(
                    "Power Factor",
                    powerFactor.toFixed(3),
                    `< ${snsConfig.pfMin}`,
                    `Current — ${phaseStr(current, " A")}`
                ),
            });
        }
    }

    // ─── 3. Frequency out-of-range check (47–53 Hz) ───
    const freqMin = snsConfig.freqMin ?? 47;
    const freqMax = snsConfig.freqMax ?? 53;
    if (frequency != null && (frequency < freqMin || frequency > freqMax)) {
        const key = `${type}_freq_anomaly`;
        if (!isCooldownActive(key)) {
            alerts.push({
                key,
                subject: `⚠️ PowerPulse: Frequency Anomaly (${src})`,
                message: buildMsg(
                    "Frequency",
                    `${frequency.toFixed(2)} Hz`,
                    `Expected ${freqMin}–${freqMax} Hz`,
                    `Active Power: ${avgActivePower != null ? avgActivePower.toFixed(2) + " W" : "N/A"}`
                ),
            });
        }
    }

    // ─── 4. High Voltage THD (> 8% on any phase) ───
    const thdMax = snsConfig.thdMax ?? 8;
    if (thdVoltage) {
        const phases = ["R", "Y", "B"];
        const highPhases = phases.filter(p => thdVoltage[p] != null && thdVoltage[p] > thdMax);
        if (highPhases.length > 0) {
            const key = `${type}_high_thd`;
            if (!isCooldownActive(key)) {
                alerts.push({
                    key,
                    subject: `⚠️ PowerPulse: High THD (${src})`,
                    message: buildMsg(
                        "Voltage THD",
                        `${phaseStr(thdVoltage, "%")}`,
                        `> ${thdMax}% on phase(s): ${highPhases.join(", ")}`,
                        `High harmonics can damage equipment and cause overheating.`
                    ),
                });
            }
        }
    }

    // ─── 5. Phase Voltage Imbalance (> 10%) ───
    if (voltage?.R != null && voltage?.Y != null && voltage?.B != null) {
        const vals = [voltage.R, voltage.Y, voltage.B].filter(v => v > 0);
        if (vals.length >= 2) {
            const maxV = Math.max(...vals);
            const minV = Math.min(...vals);
            const avgV = vals.reduce((a, b) => a + b, 0) / vals.length;
            const imbalance = avgV > 0 ? ((maxV - minV) / avgV) * 100 : 0;
            const imbalanceMax = snsConfig.imbalanceMax ?? 10;
            if (imbalance > imbalanceMax) {
                const key = `${type}_phase_imbalance`;
                if (!isCooldownActive(key)) {
                    alerts.push({
                        key,
                        subject: `⚠️ PowerPulse: Phase Imbalance (${src})`,
                        message: buildMsg(
                            "Phase Voltage Imbalance",
                            `${imbalance.toFixed(1)}%`,
                            `> ${imbalanceMax}%`,
                            `Phase voltages — ${phaseStr(voltage, " V")}`
                        ),
                    });
                }
            }
        }
    }

    // ─── 6. High Active Power / Overload ───
    const powerMax = snsConfig.powerMax ?? null; // optional, set in .env
    if (powerMax && avgActivePower != null && avgActivePower > powerMax) {
        const key = `${type}_overload`;
        if (!isCooldownActive(key)) {
            alerts.push({
                key,
                subject: `⚠️ PowerPulse: Overload Warning (${src})`,
                message: buildMsg(
                    "Active Power",
                    `${avgActivePower.toFixed(2)} W`,
                    `> ${powerMax} W`,
                    `Apparent Power: ${apparentPower != null ? apparentPower.toFixed(2) + " VA" : "N/A"}\n` +
                    `Power Factor: ${powerFactor != null ? powerFactor.toFixed(3) : "N/A"}`
                ),
            });
        }
    }

    // ─── Send all triggered alerts ───
    for (const alert of alerts) {
        try {
            await publishAlert(alert.subject, alert.message);
            recordAlert(alert.key);
        } catch (err) {
            console.error(`❌ SNS alert failed (${alert.key}):`, err.message);
        }
    }
}

/**
 * Subscribe an email or SMS endpoint to the SNS topic.
 * @param {"email"|"sms"} protocol
 * @param {string} endpoint — email address or phone number (E.164 format for SMS)
 */
export async function subscribeToTopic(protocol, endpoint) {
    if (!snsClient || !snsConfig) {
        throw new Error("SNS is not initialized");
    }

    const snsProtocol = protocol === "sms" ? "sms" : "email";

    const command = new SubscribeCommand({
        TopicArn: snsConfig.topicArn,
        Protocol: snsProtocol,
        Endpoint: endpoint,
    });

    const response = await snsClient.send(command);
    console.log(`✅ SNS subscription created: ${snsProtocol} → ${endpoint}`);
    return response;
}

/**
 * List all subscriptions on the configured SNS topic.
 */
export async function listTopicSubscriptions() {
    if (!snsClient || !snsConfig) {
        return [];
    }

    const command = new ListSubscriptionsByTopicCommand({
        TopicArn: snsConfig.topicArn,
    });

    const response = await snsClient.send(command);
    return response.Subscriptions || [];
}

/**
 * Unsubscribe from the SNS topic by subscription ARN.
 */
export async function unsubscribeFromTopic(subscriptionArn) {
    if (!snsClient) {
        throw new Error("SNS is not initialized");
    }

    const command = new UnsubscribeCommand({
        SubscriptionArn: subscriptionArn,
    });

    await snsClient.send(command);
    console.log(`✅ Unsubscribed: ${subscriptionArn}`);
}

/**
 * Send an OTP to a phone number for SMS sandbox verification.
 * @param {string} phoneNumber — E.164 format (e.g. +919876543210)
 */
export async function createSandboxPhoneNumber(phoneNumber) {
    if (!snsClient) {
        throw new Error("SNS is not initialized");
    }

    const command = new CreateSMSSandboxPhoneNumberCommand({
        PhoneNumber: phoneNumber,
    });

    await snsClient.send(command);
    console.log(`✅ SMS sandbox OTP sent to ${phoneNumber}`);
}

/**
 * Verify a phone number in the SMS sandbox using the OTP received.
 * @param {string} phoneNumber — E.164 format
 * @param {string} otp — The one-time password received via SMS
 */
export async function verifySandboxPhoneNumber(phoneNumber, otp) {
    if (!snsClient) {
        throw new Error("SNS is not initialized");
    }

    const command = new VerifySMSSandboxPhoneNumberCommand({
        PhoneNumber: phoneNumber,
        OneTimePassword: otp,
    });

    await snsClient.send(command);
    console.log(`✅ SMS sandbox phone verified: ${phoneNumber}`);
}
