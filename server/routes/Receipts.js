import express from "express";
import bodyParser from "body-parser";
import Receipt from "../models/Receipt";

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
  let receipt = new Receipt({
    id_: req.body.id_,
    fake: req.body.fake,
  });

  Receipt.addReceipt(receipt, err => {
      if (err){
        throw err;
      }
      res.status(200).json(receipt);
  });
});

export default router;
