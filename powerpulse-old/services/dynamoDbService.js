import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand, QueryCommand } from "@aws-sdk/lib-dynamodb";

let dynamoDbDocClient = null;
let dynamoConfig = null;

function normalizeEnvValue(value) {
  return (value || "").trim().replace(/^['\"]|['\"]$/g, "");
}

function isEnabledFlag(value) {
  return normalizeEnvValue(value).toLowerCase() === "true";
}

export function initDynamoDb() {
  const enabled = isEnabledFlag(process.env.DYNAMODB_ENABLED || "false");

  if (!enabled) {
    console.log("ℹ️ DynamoDB is disabled (set DYNAMODB_ENABLED=true to enable).");
    return;
  }

  const region = normalizeEnvValue(process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION);
  const tableName = normalizeEnvValue(process.env.DYNAMODB_TABLE_NAME);
  const pkName = normalizeEnvValue(process.env.DYNAMODB_PK_NAME || "pk");
  const skName = normalizeEnvValue(process.env.DYNAMODB_SK_NAME || "sk");

  if (!region || !tableName) {
    console.warn("⚠️ DynamoDB is enabled but AWS_REGION or DYNAMODB_TABLE_NAME is missing.");
    return;
  }

  const accessKeyId = normalizeEnvValue(process.env.AWS_ACCESS_KEY_ID);
  const secretAccessKey = normalizeEnvValue(process.env.AWS_SECRET_ACCESS_KEY);
  const sessionToken = normalizeEnvValue(process.env.AWS_SESSION_TOKEN);

  const clientConfig = { region };
  if (accessKeyId && secretAccessKey) {
    clientConfig.credentials = {
      accessKeyId,
      secretAccessKey,
      sessionToken: sessionToken || undefined,
    };
  }

  try {
    const rawClient = new DynamoDBClient(clientConfig);
    dynamoDbDocClient = DynamoDBDocumentClient.from(rawClient, {
      marshallOptions: { removeUndefinedValues: true },
    });

    dynamoConfig = { tableName, pkName, skName };
    console.log(`✅ DynamoDB client initialized in region ${region}`);
  } catch (err) {
    console.error("❌ Failed to initialize DynamoDB client:", err.message);
    dynamoDbDocClient = null;
    dynamoConfig = null;
  }
}

export async function saveParsedDataToDynamo(combinedData) {
  if (!dynamoDbDocClient || !dynamoConfig) {
    return;
  }

  const timestampIso =
    combinedData.timestamp instanceof Date
      ? combinedData.timestamp.toISOString()
      : new Date(combinedData.timestamp || Date.now()).toISOString();

  const item = {
    [dynamoConfig.pkName]: `${(combinedData.type || "unknown").toUpperCase()}#LATEST`,
    [dynamoConfig.skName]: timestampIso,
    type: combinedData.type,
    timestamp: timestampIso,
    sourceTimestamp:
      combinedData.sourceTimestamp instanceof Date
        ? combinedData.sourceTimestamp.toISOString()
        : combinedData.sourceTimestamp || null,
    // Three-phase measurements
    voltage: combinedData.voltage,
    current: combinedData.current,
    activePower: combinedData.activePower,
    // Per-phase THD
    thdVoltage: combinedData.thdVoltage,
    thdCurrent: combinedData.thdCurrent,
    // Averages / totals
    avgVoltage: combinedData.avgVoltage,
    avgCurrent: combinedData.avgCurrent,
    avgActivePower: combinedData.avgActivePower,
    apparentPower: combinedData.apparentPower,
    powerFactor: combinedData.powerFactor,
    frequency: combinedData.frequency,
    realTimePower: combinedData.realTimePower,
    // Legacy flat THD (avg of voltage THD)
    thd: combinedData.thd,
    // Uptime CMD registers
    powerOnMins: combinedData.powerOnMins,
    powerOffMins: combinedData.powerOffMins,
    loadOnMins: combinedData.loadOnMins,
    loadOffMins: combinedData.loadOffMins,
    // Dynamic extras (auto-detected new params)
    extras: combinedData.extras || {},
  };


  await dynamoDbDocClient.send(
    new PutCommand({
      TableName: dynamoConfig.tableName,
      Item: item,
    })
  );

  console.log(`✅ ${combinedData.type} data snapshot saved to DynamoDB`);
}

export async function getRecentDataByType(type, limit = 100) {
  if (!dynamoDbDocClient || !dynamoConfig) {
    return [];
  }

  const normalizedType = String(type || "").toLowerCase();
  if (!normalizedType) {
    return [];
  }

  const response = await dynamoDbDocClient.send(
    new QueryCommand({
      TableName: dynamoConfig.tableName,
      KeyConditionExpression: "#pk = :pk",
      ExpressionAttributeNames: {
        "#pk": dynamoConfig.pkName,
      },
      ExpressionAttributeValues: {
        ":pk": `${normalizedType.toUpperCase()}#LATEST`,
      },
      ScanIndexForward: false,
      Limit: limit,
    })
  );

  return response.Items || [];
}

export async function getLatestDataByType(type) {
  const items = await getRecentDataByType(type, 1);
  return items[0] || null;
}

/**
 * Query data for a specific type within a time range.
 * @param {string} type — "grid" or "generator"
 * @param {string} startISO — ISO start timestamp
 * @param {string} endISO — ISO end timestamp
 * @param {number} limit — max items to return (default 5000)
 */
export async function getDataByTimeRange(type, startISO, endISO, limit = 5000) {
  if (!dynamoDbDocClient || !dynamoConfig) {
    return [];
  }

  const normalizedType = String(type || "").toLowerCase();
  if (!normalizedType) return [];

  const response = await dynamoDbDocClient.send(
    new QueryCommand({
      TableName: dynamoConfig.tableName,
      KeyConditionExpression: "#pk = :pk AND #sk BETWEEN :start AND :end",
      ExpressionAttributeNames: {
        "#pk": dynamoConfig.pkName,
        "#sk": dynamoConfig.skName,
      },
      ExpressionAttributeValues: {
        ":pk": `${normalizedType.toUpperCase()}#LATEST`,
        ":start": startISO,
        ":end": endISO,
      },
      ScanIndexForward: true,
      Limit: limit,
    })
  );

  return response.Items || [];
}
