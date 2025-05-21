export default async function handler(req, res) {
  const { message } = req.body;

  // Παράδειγμα απλού AI με MCP
  const response = await fetch("https://dam2005.app.n8n.cloud/mcp/9fecdc44-3fa6-4825-956b-053ed3631f48/sse", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ input: message }),
  });

  const text = await response.text();
  res.status(200).json({ reply: text || "Δεν υπάρχει απάντηση." });
}
