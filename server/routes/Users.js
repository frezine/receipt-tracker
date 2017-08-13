import express from "express";
import bodyParser from "body-parser";
import User from "../models/User";
import ReceiptsUser from "../models/ReceiptsUser";
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

router.get("/receiptUser", (req, res) => {
  ReceiptsUser.getReceiptUser((error, users) => {
    if (error){
      throw error;
    }
    res.json(users);
  })
});

router.post("/receiptUser", (req, res) => {
  const user_id = req.body;
  ReceiptsUser.addReceiptUser(user_id, (error, user) =>{
    if (error){
      throw error;
    }
    res.json(user);
  });
});

router.post("/receiptUserReceipt", (req, res) => {
  const receipt_info = req.body;
  ReceiptsUser.addReceipt(receipt_info, (error, user) => {
    if (error) {
      throw error;
    }
    res.json(user);
  });
});

router.post("/register", (req, res) => {
  let user = new User({
    username: req.body.username,
    password: req.body.password
  });

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
    User.comparePassword(password, user.password, (err, matched) => {
      if (err){
        throw err;
      }
      if (!matched){
        let errors = {};
        errors.password = "Password does not match";
        return res.status(400).json(errors);
      }
      return res.json(user);
    });
  });
});

export default router;
