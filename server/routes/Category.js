const express = require("express");
const bodyParser = require("body-parser");
const Category = require("../models/Category");

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

router.get("/categoryNameById", (req,res) => {
  console.log("before calling category by id");
  Category.findCategoryById(req.query, (error, user_category) => {
    if (error) {
      throw error;
    }
    res.json(user_category);
  });
});

module.exports = router;
