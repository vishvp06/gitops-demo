const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;
const frontendDir = path.join(__dirname, "..", "frontend");

app.get("/", (_req, res) => {
  res.send("Hello GitOps v1");
});

app.get("/healthz", (_req, res) => {
  res.json({
    status: "ok",
    service: "gitops-app",
    version: "v1",
    timestamp: new Date().toISOString()
  });
});

app.get("/api/info", (_req, res) => {
  res.json({
    message: "GitOps App Running",
    api: "Hello GitOps v1",
    version: "v1"
  });
});

app.get("/ui", (_req, res) => {
  res.sendFile(path.join(frontendDir, "index.html"));
});

app.use("/ui", express.static(frontendDir));

app.listen(port, () => {
  console.log(`GitOps app listening on port ${port}`);
});

// updated at Fri Apr 17 05:26:19 UTC 2026
// updated at Fri Apr 17 05:34:46 UTC 2026
