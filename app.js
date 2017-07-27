const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require("./config/database");

const app = express();
const users = require("./routes/Users");

mongoose.connect(config.database, {
  useMongoClient: true
});

mongoose.connection.on("connected", () => {
  console.log("Connected to database: " + config.database);
});

mongoose.connection.on("error", (error) => {
  console.log("Database Error: " + error);
});

app.use(bodyParser.json());
app.use("/", users);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
