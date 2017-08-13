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

module.exports.addReceipt = (userinfo, callback) => {
  var user_id = userinfo.user_id;
  var receipt_id = userinfo.receipt_id;
  console.log("this is the user_id:" + user_id);
  console.log("this is the receipt_id" + receipt_id);
//  ReceiptsUser.findOneAndUpdate({_id: user_id}, {$push: {receipts: receipt_id}});
  ReceiptsUser.findByIdAndUpdate(
        user_id,
        {$push: {"receipts": receipt_id}},
        {safe: true, upsert: true, new : true},
        function(err, model) {
            console.log(err);
        }
    );

}
