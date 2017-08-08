import express from "express";
import bodyParser from "body-parser";
import User from "../models/User";
import Validate from "../utils/Validate";

const router = express.Router();

router.get("/users", (req, res) => {
  User.getUsers((error, users) => {
    if (error){
      throw error;
    }
    res.json(users);
  });
});

router.post("/register", (req, res) => {
  const user = req.body;
  const { errors, valid } = Validate(user);
  if (!valid){
    return res.status(400).json(errors);
  }
  User.getUserByUsername(user.username, (err, user) => {
    if (err){
      throw err;
    }
    if (user){
      let errors = {};
      errors.username = "Username is already taken";
      return res.status(400).json(errors);
    }
    User.addUser(user, (error, user) => {
      console.log(user);
      if (error){
        throw error;
      }
      res.status(200).json(user);
    });
  });
});

router.post("/authenticate", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  User.getUserByBoth(username, password, (err, user) => {
    if (err){
      throw error;
    }
    res.json(user);
  });
});

export default router;
