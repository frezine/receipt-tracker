const mongoose = require("mongoose");

//id is user.js auto generated id
// receipt all the receipt assocaited with user
const ReceiptsUserSchema = mongoose.Schema({
  id_: {
    type: String
  },
  receipts: {
    type: [String]
  }
});

const ReceiptsUser = module.exports = mongoose.model("ReceiptsUser",
  ReceiptsUserSchema;

  module.exports.getUserById = (userID, callback) => {
    User.findOne({id_: userID}, callback);
  }
