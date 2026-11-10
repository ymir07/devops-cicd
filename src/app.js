const express = require("express");

function createApp() {
  const app = express();

  app.get("/", (req, res) => {
    res.status(200).send("KT3 App");
  });

  app.get("/health", (req, res) => {
    res.status(200).json({ status: "ok" });
  });

  return app;
}

module.exports = createApp;
