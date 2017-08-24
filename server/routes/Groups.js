const express = require("express");
const bodyParser = require("body-parser");
const Group = require("../models/Group");

const router = express.Router();

router.get("/groups", (req, res) => {
  Group.getGroups((error, groups) => {
    if (error){
      throw error;
    }
    res.json(groups);
  });
});

router.post("/groups", (req, res) => {
  const group = req.body;
  Group.addGroup(group, (err, group) => {
      if (err){
        throw err;
      }
      res.status(200).json(group);
  });
});

router.post("/addReceipt", (req,res) => {
  const group_info = req.body;
  Group.addReceipt(group_info, (error, group) => {
    if (error) {
      throw error;
    }
    res.json(group);
  });
});

router.get("/groupNameById", (req, res) => {
  Group.findGroupById(req.query, (error, user_group) => {
    if (error) {
      throw error;
    }
    res.json(user_group);
  });
});

module.exports = router;
