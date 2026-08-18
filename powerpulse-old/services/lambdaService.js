// services/lambdaService.js
import {
    LambdaClient,
    InvokeCommand,
    ListFunctionsCommand,
    GetFunctionCommand,
} from "@aws-sdk/client-lambda";

let lambdaClient = null;

function normalizeEnvValue(value) {
    return (value || "").trim().replace(/^['"]|['"]$/g, "");
}

function isEnabledFlag(value) {
    return normalizeEnvValue(value).toLowerCase() === "true";
}

/**
 * Initialize the Lambda client using the same AWS credentials in .env.
 */
export function initLambda() {
    const enabled = isEnabledFlag(process.env.LAMBDA_ENABLED || "false");

    if (!enabled) {
        console.log("ℹ️ Lambda is disabled (set LAMBDA_ENABLED=true to enable).");
        return;
    }

    const region = normalizeEnvValue(process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION);

    if (!region) {
        console.warn("⚠️ Lambda is enabled but AWS_REGION is missing.");
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
        lambdaClient = new LambdaClient(clientConfig);
        console.log(`✅ Lambda client initialized in region ${region}`);
    } catch (err) {
        console.error("❌ Failed to initialize Lambda client:", err.message);
        lambdaClient = null;
    }
}

/**
 * List all Lambda functions in the configured region.
 */
export async function listFunctions() {
    if (!lambdaClient) {
        throw new Error("Lambda is not initialized");
    }

    const command = new ListFunctionsCommand({});
    const response = await lambdaClient.send(command);

    return (response.Functions || []).map((fn) => ({
        functionName: fn.FunctionName,
        runtime: fn.Runtime,
        handler: fn.Handler,
        memorySize: fn.MemorySize,
        timeout: fn.Timeout,
        lastModified: fn.LastModified,
        state: fn.State || "Active",
        description: fn.Description || "",
        codeSize: fn.CodeSize,
    }));
}

/**
 * Get details of a specific Lambda function.
 */
export async function getFunctionDetails(functionName) {
    if (!lambdaClient) {
        throw new Error("Lambda is not initialized");
    }

    const command = new GetFunctionCommand({ FunctionName: functionName });
    const response = await lambdaClient.send(command);

    const config = response.Configuration || {};
    return {
        functionName: config.FunctionName,
        functionArn: config.FunctionArn,
        runtime: config.Runtime,
        handler: config.Handler,
        role: config.Role,
        memorySize: config.MemorySize,
        timeout: config.Timeout,
        lastModified: config.LastModified,
        state: config.State,
        description: config.Description || "",
        codeSize: config.CodeSize,
        environment: config.Environment?.Variables || {},
    };
}

/**
 * Invoke a Lambda function synchronously (RequestResponse) or asynchronously (Event).
 * @param {string} functionName — Name or ARN of the Lambda function
 * @param {object} payload — JSON payload to send to the function
 * @param {"RequestResponse"|"Event"} invocationType — sync or async
 */
export async function invokeFunction(functionName, payload = {}, invocationType = "RequestResponse") {
    if (!lambdaClient) {
        throw new Error("Lambda is not initialized");
    }

    const command = new InvokeCommand({
        FunctionName: functionName,
        InvocationType: invocationType,
        Payload: new TextEncoder().encode(JSON.stringify(payload)),
    });

    const response = await lambdaClient.send(command);

    const result = {
        statusCode: response.StatusCode,
        executedVersion: response.ExecutedVersion || null,
        functionError: response.FunctionError || null,
    };

    // Decode response payload for synchronous invocations
    if (invocationType === "RequestResponse" && response.Payload) {
        try {
            const decoded = new TextDecoder().decode(response.Payload);
            result.payload = JSON.parse(decoded);
        } catch {
            result.payload = null;
        }
    }

    console.log(`✅ Lambda invoked: ${functionName} (${invocationType}) → ${response.StatusCode}`);
    return result;
}

/**
 * Invoke a Lambda for IoT data processing.
 * Sends the full three-phase parsed data to the configured Lambda function.
 */
export async function processWithLambda(parsedData) {
    const functionName = normalizeEnvValue(process.env.LAMBDA_IOT_FUNCTION);

    if (!lambdaClient || !functionName) return null;

    try {
        const result = await invokeFunction(functionName, {
            source: "powerpulse-server",
            timestamp: new Date().toISOString(),
            device: (parsedData.type || "unknown").toUpperCase(),
            // Three-phase voltages
            voltage_R: parsedData.voltage?.R ?? null,
            voltage_Y: parsedData.voltage?.Y ?? null,
            voltage_B: parsedData.voltage?.B ?? null,
            avgVoltage: parsedData.avgVoltage ?? null,
            // Three-phase currents
            current_R: parsedData.current?.R ?? null,
            current_Y: parsedData.current?.Y ?? null,
            current_B: parsedData.current?.B ?? null,
            avgCurrent: parsedData.avgCurrent ?? null,
            // Power metrics
            avgActivePower: parsedData.avgActivePower ?? null,
            apparentPower: parsedData.apparentPower ?? null,
            powerFactor: parsedData.powerFactor ?? null,
            frequency: parsedData.frequency ?? null,
            // THD per phase
            thdVoltage_R: parsedData.thdVoltage?.R ?? null,
            thdVoltage_Y: parsedData.thdVoltage?.Y ?? null,
            thdVoltage_B: parsedData.thdVoltage?.B ?? null,
            thdCurrent_R: parsedData.thdCurrent?.R ?? null,
            thdCurrent_Y: parsedData.thdCurrent?.Y ?? null,
            thdCurrent_B: parsedData.thdCurrent?.B ?? null,
            // Full raw data for flexibility
            data: parsedData,
        });
        return result;
    } catch (err) {
        console.error(`❌ Lambda IoT processing error:`, err.message);
        return null;
    }
}
