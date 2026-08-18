// services/ec2Service.js
import {
    EC2Client,
    DescribeInstancesCommand,
    StartInstancesCommand,
    StopInstancesCommand,
    RebootInstancesCommand,
    DescribeInstanceStatusCommand,
} from "@aws-sdk/client-ec2";

let ec2Client = null;

function normalizeEnvValue(value) {
    return (value || "").trim().replace(/^['"]|['"]$/g, "");
}

function isEnabledFlag(value) {
    return normalizeEnvValue(value).toLowerCase() === "true";
}

/**
 * Initialize the EC2 client using the same AWS credentials in .env.
 */
export function initEc2() {
    const enabled = isEnabledFlag(process.env.EC2_ENABLED || "false");

    if (!enabled) {
        console.log("ℹ️ EC2 monitoring is disabled (set EC2_ENABLED=true to enable).");
        return;
    }

    const region = normalizeEnvValue(process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION);

    if (!region) {
        console.warn("⚠️ EC2 is enabled but AWS_REGION is missing.");
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
        ec2Client = new EC2Client(clientConfig);
        console.log(`✅ EC2 client initialized in region ${region}`);
    } catch (err) {
        console.error("❌ Failed to initialize EC2 client:", err.message);
        ec2Client = null;
    }
}

/**
 * List all EC2 instances (or filter by instance IDs).
 * Returns a simplified array of instance objects.
 */
export async function listInstances(instanceIds = []) {
    if (!ec2Client) {
        throw new Error("EC2 is not initialized");
    }

    const params = {};
    if (instanceIds.length > 0) {
        params.InstanceIds = instanceIds;
    }

    const command = new DescribeInstancesCommand(params);
    const response = await ec2Client.send(command);

    const instances = [];
    for (const reservation of response.Reservations || []) {
        for (const instance of reservation.Instances || []) {
            const nameTag = (instance.Tags || []).find((t) => t.Key === "Name");
            instances.push({
                instanceId: instance.InstanceId,
                name: nameTag?.Value || "—",
                state: instance.State?.Name || "unknown",
                type: instance.InstanceType,
                publicIp: instance.PublicIpAddress || null,
                privateIp: instance.PrivateIpAddress || null,
                launchTime: instance.LaunchTime,
                availabilityZone: instance.Placement?.AvailabilityZone || null,
                platform: instance.PlatformDetails || instance.Platform || "Linux/UNIX",
            });
        }
    }

    return instances;
}

/**
 * Get detailed status checks for specific instances.
 */
export async function getInstanceStatus(instanceIds) {
    if (!ec2Client) {
        throw new Error("EC2 is not initialized");
    }

    const command = new DescribeInstanceStatusCommand({
        InstanceIds: instanceIds,
        IncludeAllInstances: true,
    });

    const response = await ec2Client.send(command);

    return (response.InstanceStatuses || []).map((status) => ({
        instanceId: status.InstanceId,
        instanceState: status.InstanceState?.Name || "unknown",
        systemStatus: status.SystemStatus?.Status || "unknown",
        instanceStatus: status.InstanceStatus?.Status || "unknown",
        availabilityZone: status.AvailabilityZone,
    }));
}

/**
 * Start one or more EC2 instances.
 */
export async function startInstances(instanceIds) {
    if (!ec2Client) {
        throw new Error("EC2 is not initialized");
    }

    const command = new StartInstancesCommand({ InstanceIds: instanceIds });
    const response = await ec2Client.send(command);

    console.log(`✅ EC2 start requested for: ${instanceIds.join(", ")}`);
    return (response.StartingInstances || []).map((i) => ({
        instanceId: i.InstanceId,
        previousState: i.PreviousState?.Name,
        currentState: i.CurrentState?.Name,
    }));
}

/**
 * Stop one or more EC2 instances.
 */
export async function stopInstances(instanceIds) {
    if (!ec2Client) {
        throw new Error("EC2 is not initialized");
    }

    const command = new StopInstancesCommand({ InstanceIds: instanceIds });
    const response = await ec2Client.send(command);

    console.log(`✅ EC2 stop requested for: ${instanceIds.join(", ")}`);
    return (response.StoppingInstances || []).map((i) => ({
        instanceId: i.InstanceId,
        previousState: i.PreviousState?.Name,
        currentState: i.CurrentState?.Name,
    }));
}

/**
 * Reboot one or more EC2 instances.
 */
export async function rebootInstances(instanceIds) {
    if (!ec2Client) {
        throw new Error("EC2 is not initialized");
    }

    const command = new RebootInstancesCommand({ InstanceIds: instanceIds });
    await ec2Client.send(command);

    console.log(`✅ EC2 reboot requested for: ${instanceIds.join(", ")}`);
    return { success: true, instanceIds };
}
