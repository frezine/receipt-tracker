const mongoose = require("mongoose");

//id is user.js auto generated id
// receipt all the receipt assocaited with user
//every new user is associated with one ==> automatically generate one
const ReceiptsUserSchema = mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  receipts: {
    type: [String]
  }
});

const ReceiptsUser = module.exports = mongoose.model("ReceiptsUser", ReceiptsUserSchema);

module.exports.addReceiptUser = (userID, callback) => {
  ReceiptsUser.create(userID, callback);
};

module.exports.getReceiptUser = (callback, limit) => {
  ReceiptsUser.find(callback).limit(limit);
};
