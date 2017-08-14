const mongoose = require("mongoose");

//id is user.js auto generated id
// receipt all the receipt assocaited with user
//every new user is associated with one ==> automatically generate one
const ReceiptsUserSchema = mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  categories: {
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

module.exports.addCategory = (userinfo, callback) => {
  var user_id = userinfo.user_id;
  var category_id = userinfo.category_id;
  console.log("this is category_id" + category_id);
  ReceiptsUser.findByIdAndUpdate(
        user_id,
        {$push: {"categories": category_id}},
        {safe: true, upsert: true, new : true},
        function(err, model) {
            console.log(err);
        }
    );
}

module.exports.getAllCategory = (user_info, callback) => {
  var user_id = user_info._id;
  console.log("this is the user id in router user" + user_id);
  ReceiptsUser.findOne({_id: user_id}, callback);
}
