const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/database");

const app = express();

mongoose.connect(config.database, {
  useMongoClient: true
});

mongoose.connection.on("connected", () => {
  console.log("Connected to database: " + config.database);
});

mongoose.connection.on("error", (error) => {
  console.log("Database Error: " + error);
});

app.get("/*", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
