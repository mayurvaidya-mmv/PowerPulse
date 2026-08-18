// services/authService.js
import { DynamoDBClient, CreateTableCommand, DescribeTableCommand } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand, GetCommand, ScanCommand } from "@aws-sdk/lib-dynamodb";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const USERS_TABLE = "powerpulse_users";
const JWT_SECRET = process.env.JWT_SECRET || "powerpulse-default-secret-change-me";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "24h";
const SALT_ROUNDS = 10;

let docClient = null;

function normalizeEnvValue(value) {
    return (value || "").trim().replace(/^['"]|['"]$/g, "");
}

/**
 * Initialize auth DynamoDB client and ensure users table exists.
 */
export async function initAuth() {
    const region = normalizeEnvValue(process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION);

    if (!region) {
        console.warn("⚠️ Auth: AWS_REGION is missing, auth disabled.");
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
        docClient = DynamoDBDocumentClient.from(rawClient, {
            marshallOptions: { removeUndefinedValues: true },
        });

        // Ensure users table exists
        await ensureUsersTable(rawClient);

        console.log("✅ Auth service initialized");

        // Create default admin if no users exist
        await createDefaultAdmin();
    } catch (err) {
        console.error("❌ Failed to initialize auth service:", err.message);
        docClient = null;
    }
}

/**
 * Create the users table if it doesn't exist.
 */
async function ensureUsersTable(rawClient) {
    try {
        await rawClient.send(new DescribeTableCommand({ TableName: USERS_TABLE }));
    } catch (err) {
        if (err.name === "ResourceNotFoundException") {
            console.log("📦 Creating users table...");
            await rawClient.send(
                new CreateTableCommand({
                    TableName: USERS_TABLE,
                    KeySchema: [{ AttributeName: "email", KeyType: "HASH" }],
                    AttributeDefinitions: [{ AttributeName: "email", AttributeType: "S" }],
                    BillingMode: "PAY_PER_REQUEST",
                })
            );
            // Wait for table to be active
            let active = false;
            for (let i = 0; i < 30 && !active; i++) {
                await new Promise((r) => setTimeout(r, 2000));
                try {
                    const desc = await rawClient.send(new DescribeTableCommand({ TableName: USERS_TABLE }));
                    active = desc.Table?.TableStatus === "ACTIVE";
                } catch {
                    // continue waiting
                }
            }
            console.log("✅ Users table created");
        } else {
            throw err;
        }
    }
}

/**
 * Create a default admin user if no users exist yet.
 */
async function createDefaultAdmin() {
    if (!docClient) return;

    try {
        const scan = await docClient.send(new ScanCommand({ TableName: USERS_TABLE, Limit: 1 }));
        if (scan.Items && scan.Items.length > 0) return;

        // No users exist — create default admin
        const hashedPassword = await bcrypt.hash("admin123", SALT_ROUNDS);
        await docClient.send(
            new PutCommand({
                TableName: USERS_TABLE,
                Item: {
                    email: "admin@powerpulse.com",
                    name: "Admin",
                    password: hashedPassword,
                    role: "admin",
                    createdAt: new Date().toISOString(),
                },
            })
        );
        console.log("✅ Default admin created (admin@powerpulse.com / admin123)");
    } catch (err) {
        console.error("⚠️ Could not create default admin:", err.message);
    }
}

/**
 * Register a new user.
 */
export async function registerUser(email, password, name, role = "viewer") {
    if (!docClient) throw new Error("Auth service not initialized");

    const normalizedEmail = email.toLowerCase().trim();

    // Check if user already exists
    const existing = await docClient.send(
        new GetCommand({ TableName: USERS_TABLE, Key: { email: normalizedEmail } })
    );
    if (existing.Item) {
        throw new Error("User with this email already exists");
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const user = {
        email: normalizedEmail,
        name: name.trim(),
        password: hashedPassword,
        role, // "admin" or "viewer"
        createdAt: new Date().toISOString(),
    };

    await docClient.send(new PutCommand({ TableName: USERS_TABLE, Item: user }));

    // Return user without password
    const { password: _, ...safeUser } = user;
    return safeUser;
}

/**
 * Login user and return JWT token.
 */
export async function loginUser(email, password) {
    if (!docClient) throw new Error("Auth service not initialized");

    const normalizedEmail = email.toLowerCase().trim();

    const result = await docClient.send(
        new GetCommand({ TableName: USERS_TABLE, Key: { email: normalizedEmail } })
    );

    if (!result.Item) {
        throw new Error("Invalid email or password");
    }

    const user = result.Item;
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        throw new Error("Invalid email or password");
    }

    // Generate JWT
    const token = jwt.sign(
        { email: user.email, name: user.name, role: user.role },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRES_IN }
    );

    return { token, user: { email: user.email, name: user.name, role: user.role } };
}

/**
 * Verify a JWT token and return the decoded payload.
 */
export function verifyToken(token) {
    return jwt.verify(token, JWT_SECRET);
}

/**
 * Get all users (admin only).
 */
export async function getAllUsers() {
    if (!docClient) return [];

    const result = await docClient.send(new ScanCommand({ TableName: USERS_TABLE }));
    return (result.Items || []).map(({ password, ...user }) => user);
}
