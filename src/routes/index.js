const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("✅ Non-Sim Pricing API is live");
});

router.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", time: new Date() });
});

module.exports = router;
