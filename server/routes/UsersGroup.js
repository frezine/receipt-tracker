const express = require("express");
const bodyParser = require("body-parser");
const UserGroup = require("../models/UserGroup");

const router = express.Router();

router.post("/userGroup", (req, res) => {
  const user_id = req.body;
  UserGroup.addUserGroup(user_id, (error, user) =>{
    if (error){
      throw error;
    }
    res.json(user);
  });
});

router.get("/userGroup", (req, res) => {
  UserGroup.getUsersGroups((error, users) => {
    if (error){
      throw error;
    }
    res.json(users);
  })
});

router.post("/associateUserGroup", (req,res) => {
  const group_info = req.body;
  UserGroup.addGroup(group_info, (error, user) => {
    if (error) {
      throw error;
    }
    res.json(user);
  });
});

router.get("/acquireUserGroups", (req,res) => {
  UserGroup.getUserGroups(req.query, (error, user_category) => {
    if (error) {
      throw error;
    }
    res.json(user_category);
  });
});

module.exports = router;
