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

router.get("/groupNameById", (req, res) => {
  console.log("before calling Group by id");
  Group.findGroupById(req.query, (error, user_Group) => {
    if (error) {
      throw error;
    }
    res.json(user_Group);
  });
});

module.exports = router;
