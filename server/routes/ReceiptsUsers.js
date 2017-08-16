const express = require("express");
const bodyParser = require("body-parser");
const ReceiptsUser = require("../models/ReceiptsUser");

const router = express.Router();

// "../models/ReceiptsUser";
router.post("/receiptUser", (req, res) => {
  const user_id = req.body;
  ReceiptsUser.addReceiptUser(user_id, (error, user) =>{
    if (error){
      throw error;
    }
    res.json(user);
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

router.post("/receiptUserCategory", (req,res) => {
  const category_info = req.body;
  ReceiptsUser.addCategory(category_info, (error, user) => {
    if (error) {
      throw error;
    }
    res.json(user);
  });
});

router.get("/allCategoriesReceiptUser", (req,res) => {
  ReceiptsUser.getAllCategory(req.query, (error, user_category) => {
    if (error) {
      throw error;
    }
    res.json(user_category);
  });
});

module.exports = router;
