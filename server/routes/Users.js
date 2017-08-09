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
  User.countUser(user.username, (err, count) => {
    if (err){
      throw err;
    }
    if (count > 0){
      let errors = {};
      errors.username = "Username is already taken";
      return res.status(400).json(errors);
    }
    User.addUser(user, (error, user) => {
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
  User.getUserByUsername(username, (err, user) => {
    if (err){
      throw err;
    }
    if (!user){
      let errors = {};
      errors.username = "Username does not exist";
      return res.status(400).json(errors);
    }
    User.getUserByBoth(username, password, (err, user) => {
      if (err){
        throw err;
      }
      return res.json(user);
    });
  });
});

export default router;
