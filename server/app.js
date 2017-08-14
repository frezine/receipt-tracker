const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const config = require("./config/database");
const Users = require("./routes/Users");
const ReceiptsUsers = require("./routes/ReceiptsUsers");
const Category = require("./routes/Category");
const Receipts = require("./routes/Receipts");

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

app.use(bodyParser.json());
app.use(cors());
app.use("/api", Users);
app.use("/api", Receipts);
app.use("/api", Category);
app.use("/api", ReceiptsUsers);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.listen(3001, () => {
  console.log("Server running at http://localhost:3001");
});
