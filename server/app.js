import express from "express";
import path from "path";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import webpack from "webpack";
import webpackMiddleware from "webpack-dev-middleware";
import webpackConfig from "../webpack.config.dev";

import config from "./config/database";
import Users from "./routes/Users";
import Receipts from "./routes/Receipts";
import Category from "./routes/Category";

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

app.use(webpackMiddleware(webpack(webpackConfig)));
app.use(bodyParser.json());
app.use("/api", Users);
app.use("/api", Receipts);
app.use("/api", Category);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
