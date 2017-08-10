const mongoose = require("mongoose");

const ReceiptSchema = mongoose.Schema({
  id_: {
    type: String
  },
  fake: {
    type: String
  }
});

const ReceiptCategory = module.exports = mongoose.model("ReceiptCategory", ReceiptSchema);

module.exports.addCategory = (category, callback) => {
  ReceiptCategory.create(category, callback);
};

module.exports.getCategory = (category, limit) => {
  ReceiptCategory.find(category).limit(limit)
};
