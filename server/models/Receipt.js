const mongoose = require("mongoose");

const ReceiptSchema = mongoose.Schema({
  fake: {
    type: String
  }
});

//auto generated id
const Receipt = module.exports = mongoose.model("Receipt", ReceiptSchema);

module.exports.addReceipt = (category, callback) => {
  Receipt.create(category, callback);
};

module.exports.getReceipt = (category, limit) => {
  Receipt.find(category).limit(limit)
};
