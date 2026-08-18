// websocket/websocketServer.js
import { WebSocketServer, WebSocket } from "ws";

let clients = new Set();
let wss = null;

/**
 * Initialize WebSocket server and manage client connections.
 */
export function initWebSocketServer(server) {
  wss = new WebSocketServer({ server });

  wss.on("connection", (ws) => {
    console.log("✅ Client Connected");
    clients.add(ws);

    ws.on("close", () => {
      console.log("❌ Client Disconnected");
      clients.delete(ws);
    });

    ws.on("error", (err) => {
      console.error("⚠️ WebSocket Error:", err);
      clients.delete(ws);
    });
  });

  console.log("🚀 WebSocket Server Initialized");
}

/**
 * Broadcast a message to all connected clients.
 */
export function broadcastToClients(message) {
  if (!wss) return;
  const msg = JSON.stringify(message);
  for (const client of clients) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(msg);
    }
  }
}
