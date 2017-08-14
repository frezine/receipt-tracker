const express = require("express");
const bodyParser = require("body-parser");
const Receipt = require("../models/Receipt");

const router = express.Router();

router.get("/receipts", (req, res) => {
  Receipt.getReceipt((error, receipts) => {
    if (error){
      throw error;
    }
    res.json(receipts);
  });
});

router.post("/receipts", (req, res) => {
  const receipt = req.body;
  Receipt.addReceipt(receipt, (err, receipt) => {
      if (err){
        throw err;
      }
      res.status(200).json(receipt);
  });
});

module.exports = router;
