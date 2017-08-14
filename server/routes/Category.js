import express from "express";
import bodyParser from "body-parser";
import Category from "../models/Category";

const router = express.Router();

router.get("/category", (req, res) => {
  Category.getCategory((error, category) => {
    if (error){
      throw error;
    }
    res.json(category);
  });
});

router.post("/category", (req, res) => {
  const category = req.body;
  Category.addCategory(category, (err, category) => {
      if (err){
        throw err;
      }
      res.status(200).json(category);
  });
});

router.get("/categoryByName", (req, res) => {
  const category = req.query;
  console.log("in get category by name" + category);
  Category.findCategoryById(category, (err, category) => {
      if (err){
        throw err;
      }
      res.status(200).json(category);
  });
});

export default router;
