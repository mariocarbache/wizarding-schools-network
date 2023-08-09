const express = require("express");
const path = require("path");
const cors = require("cors");
const volleyball = require("volleyball");
const app = express();
const apiRouter = require("./api/index");

// static middleware
app.use(express.static(path.join(__dirname, "..", "public")));


app.use("/api", apiRouter);

app.use(cors());
app.use(volleyball);

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;
