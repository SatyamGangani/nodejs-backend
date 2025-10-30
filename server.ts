import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("✅ Node.js backend running successfully!");
});

app.get("/check", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.get("/check-ci", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString(), ci: true });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});