const mongoose = require("mongoose");

const ReceiptSchema = mongoose.Schema({
  id_: {
    type: String
  },
  fake: {
    type: String
  }
});

const Receipt = module.exports = mongoose.model("Receipt", ReceiptSchema);

module.exports.addCategory = (category, callback) => {
  Receipt.create(category, callback);
};

module.exports.getCategory = (category, limit) => {
  Receipt.find(category).limit(limit)
};
