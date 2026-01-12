const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Internee.pk Backend Running");
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

app.get("/error", (req, res) => {
  res.status(500).send("Test Error");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
