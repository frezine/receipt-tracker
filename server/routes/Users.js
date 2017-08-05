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

router.post("/users", (req, res) => {
  const user = req.body;
  const { errors, valid } = Validate(user);
  if (!valid){
    res.status(400).json(errors);
  }
  else{
    User.addUser(user, (error, user) => {
      if (error){
        throw error;
      }
      res.json(user);
    });
  }
});

export default router;
