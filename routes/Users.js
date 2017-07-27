const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();
const User = require("../models/User");

router.get("/users", (req, res) => {
  User.getUsers((error, users) => {
    if (error){
      throw error;
    }
    res.json(users);
  });
});

router.post("/users", (req, res) => {
  const user = req.body;
  User.addUser(user, (error, user) => {
    if (error){
      throw error;
    }
    res.json(user);
  });
});

module.exports = router;
