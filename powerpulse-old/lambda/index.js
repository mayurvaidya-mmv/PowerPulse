// ============================================================
// PowerPulse IoT Processor — AWS Lambda Function
// ============================================================
// Deploy this to AWS Lambda with:
//   Function name: powerpulse-iot-processor
//   Runtime: Node.js 20.x
//   Handler: index.handler
//
// This Lambda receives IoT data from the PowerPulse server,
// performs anomaly detection, and returns processed results.
// ============================================================

const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, PutCommand } = require("@aws-sdk/lib-dynamodb");
const { SNSClient, PublishCommand } = require("@aws-sdk/client-sns");

// ─── Configuration (set via Lambda Environment Variables in AWS Console) ───
const REGION = process.env.AWS_REGION || "ap-south-1";
const DYNAMODB_TABLE = process.env.DYNAMODB_TABLE_NAME || "powerpulse_iot_data";
const SNS_TOPIC_ARN = process.env.SNS_TOPIC_ARN || "";
const VOLTAGE_MIN = parseFloat(process.env.VOLTAGE_MIN || "200");
const VOLTAGE_MAX = parseFloat(process.env.VOLTAGE_MAX || "260");
const PF_MIN = parseFloat(process.env.PF_MIN || "0.85");

// ─── AWS Clients ───
const dynamoClient = DynamoDBDocumentClient.from(
    new DynamoDBClient({ region: REGION }),
    { marshallOptions: { removeUndefinedValues: true } }
);
const snsClient = new SNSClient({ region: REGION });

// ============================================================
// Main Handler
// ============================================================
exports.handler = async (event) => {
    console.log("📥 Received event:", JSON.stringify(event, null, 2));

    try {
        const data = event.data || event;
        const source = event.source || "unknown";
        const timestamp = event.timestamp || new Date().toISOString();

        // ─── 1. Anomaly Detection ───
        const anomalies = detectAnomalies(data);

        // ─── 2. Store processed result in DynamoDB ───
        const processedRecord = {
            pk: `LAMBDA#${(data.type || "unknown").toUpperCase()}`,
            sk: timestamp,
            source,
            type: data.type || "unknown",
            timestamp,
            avgVoltage: data.avgVoltage || null,
            avgCurrent: data.avgCurrent || null,
            avgActivePower: data.avgActivePower || null,
            powerFactor: data.powerFactor || null,
            voltage: data.voltage || null,
            current: data.current || null,
            activePower: data.activePower || null,
            anomalies: anomalies.length > 0 ? anomalies : null,
            processedAt: new Date().toISOString(),
        };

        await dynamoClient.send(
            new PutCommand({
                TableName: DYNAMODB_TABLE,
                Item: processedRecord,
            })
        );
        console.log("✅ Processed record saved to DynamoDB");

        // ─── 3. Send SNS alert if anomalies found ───
        if (anomalies.length > 0 && SNS_TOPIC_ARN) {
            const alertMessage =
                `[PowerPulse Lambda Alert]\n\n` +
                `Source: ${(data.type || "unknown").toUpperCase()} meter\n` +
                `Time: ${timestamp}\n\n` +
                `Anomalies Detected:\n` +
                anomalies.map((a) => `  • ${a.metric}: ${a.value} (${a.reason})`).join("\n") +
                `\n\nProcessed by Lambda at ${processedRecord.processedAt}`;

            await snsClient.send(
                new PublishCommand({
                    TopicArn: SNS_TOPIC_ARN,
                    Subject: `⚠️ PowerPulse: ${anomalies.length} anomal${anomalies.length === 1 ? "y" : "ies"} detected`,
                    Message: alertMessage,
                })
            );
            console.log("📢 Anomaly alert sent via SNS");
        }

        // ─── 4. Return result ───
        return {
            statusCode: 200,
            body: {
                message: "IoT data processed successfully",
                type: data.type,
                anomalyCount: anomalies.length,
                anomalies,
                processedAt: processedRecord.processedAt,
            },
        };
    } catch (err) {
        console.error("❌ Lambda processing error:", err);
        return {
            statusCode: 500,
            body: { error: err.message },
        };
    }
};

// ============================================================
// Anomaly Detection
// ============================================================
function detectAnomalies(data) {
    const anomalies = [];

    // Voltage range check
    if (data.avgVoltage != null) {
        if (data.avgVoltage < VOLTAGE_MIN) {
            anomalies.push({
                metric: "avgVoltage",
                value: data.avgVoltage,
                threshold: VOLTAGE_MIN,
                reason: `Below minimum ${VOLTAGE_MIN}V`,
            });
        }
        if (data.avgVoltage > VOLTAGE_MAX) {
            anomalies.push({
                metric: "avgVoltage",
                value: data.avgVoltage,
                threshold: VOLTAGE_MAX,
                reason: `Above maximum ${VOLTAGE_MAX}V`,
            });
        }
    }

    // Power factor check
    if (data.powerFactor != null && data.powerFactor < PF_MIN) {
        anomalies.push({
            metric: "powerFactor",
            value: data.powerFactor,
            threshold: PF_MIN,
            reason: `Below minimum ${PF_MIN}`,
        });
    }

    // Phase imbalance check (voltage)
    if (data.voltage && data.voltage.R != null && data.voltage.Y != null && data.voltage.B != null) {
        const phases = [data.voltage.R, data.voltage.Y, data.voltage.B];
        const avg = phases.reduce((a, b) => a + b, 0) / 3;
        const maxDeviation = Math.max(...phases.map((p) => Math.abs(p - avg)));
        const imbalancePercent = avg > 0 ? (maxDeviation / avg) * 100 : 0;

        if (imbalancePercent > 5) {
            anomalies.push({
                metric: "voltageImbalance",
                value: `${imbalancePercent.toFixed(2)}%`,
                threshold: "5%",
                reason: `Phase imbalance exceeds 5% (R:${data.voltage.R}, Y:${data.voltage.Y}, B:${data.voltage.B})`,
            });
        }
    }

    // Phase imbalance check (current)
    if (data.current && data.current.R != null && data.current.Y != null && data.current.B != null) {
        const phases = [data.current.R, data.current.Y, data.current.B];
        const avg = phases.reduce((a, b) => a + b, 0) / 3;
        if (avg > 0) {
            const maxDeviation = Math.max(...phases.map((p) => Math.abs(p - avg)));
            const imbalancePercent = (maxDeviation / avg) * 100;

            if (imbalancePercent > 10) {
                anomalies.push({
                    metric: "currentImbalance",
                    value: `${imbalancePercent.toFixed(2)}%`,
                    threshold: "10%",
                    reason: `Current imbalance exceeds 10% (R:${data.current.R}, Y:${data.current.Y}, B:${data.current.B})`,
                });
            }
        }
    }

    return anomalies;
}
