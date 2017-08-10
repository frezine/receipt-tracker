import express from "express";
import bodyParser from "body-parser";
import ReceiptCategory from "../models/receiptCategory";

const router = express.Router();

router.get("/receipts", (req, res) => {
  ReceiptCategory.getCategory((error, receipts) => {
    if (error){
      throw error;
    }
    res.json(receipts);
  });
});

router.post("/addReceipts", (req, res) => {
  let receipt = new ReceiptCategory({
    id_: req.body.id_,
    fake: req.body.fake,
  });
  ReceiptCategory.addCategory(receipt, err => {
      if (err){
        throw err;
      }
      res.status(200).json(receipt);
  });
});

export default router;
