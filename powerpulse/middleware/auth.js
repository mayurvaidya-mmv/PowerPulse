// middleware/auth.js
import { verifyToken } from "../services/authService.js";

/**
 * Authentication middleware.
 * Checks for JWT in cookies (token) or Authorization header (Bearer <token>).
 * If valid, sets req.user with the decoded payload.
 */
export function requireAuth(req, res, next) {
    const token = extractToken(req);

    if (!token) {
        return handleUnauthorized(req, res, "Authentication required");
    }

    try {
        const decoded = verifyToken(token);
        req.user = decoded;
        next();
    } catch (err) {
        return handleUnauthorized(req, res, "Invalid or expired token");
    }
}

/**
 * Role-based authorization middleware.
 * Must be used AFTER requireAuth.
 * @param  {...string} allowedRoles — roles that can access the route (e.g. "admin", "viewer")
 */
export function requireRole(...allowedRoles) {
    return (req, res, next) => {
        if (!req.user) {
            return handleUnauthorized(req, res, "Authentication required");
        }

        if (!allowedRoles.includes(req.user.role)) {
            // For page requests, redirect to dashboard with error
            if (isPageRequest(req)) {
                return res.redirect("/dashboard?error=access_denied");
            }
            return res.status(403).json({ error: "Access denied. Insufficient permissions." });
        }

        next();
    };
}

/**
 * Optional auth — sets req.user if a valid token exists, but does NOT block.
 */
export function optionalAuth(req, res, next) {
    const token = extractToken(req);

    if (token) {
        try {
            req.user = verifyToken(token);
        } catch {
            // Token invalid — proceed without user
        }
    }

    next();
}

// ─── Helpers ───

function extractToken(req) {
    // 1. Check cookie
    if (req.cookies && req.cookies.token) {
        return req.cookies.token;
    }

    // 2. Check Authorization header
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer ")) {
        return authHeader.slice(7);
    }

    return null;
}

function isPageRequest(req) {
    const accept = req.headers.accept || "";
    return accept.includes("text/html");
}

function handleUnauthorized(req, res, message) {
    if (isPageRequest(req)) {
        return res.redirect("/login");
    }
    return res.status(401).json({ error: message });
}
