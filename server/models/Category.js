const mongoose = require("mongoose");

// id is auto generated (this id will be in the ReceiptUser)
const CategorySchema = mongoose.Schema({
  category: {
    type: String
  },
  receipts: {
    type: [String]
  }
});

const Category = module.exports = mongoose.model("CategorySchema", CategorySchema);

module.exports.addCategory = (category, callback) => {
  Category.create(category, callback);
};

module.exports.getCategory = (callback, limit) => {
  Category.find(callback).limit(limit);
};

module.exports.findCategoryById = (category_info, callback) => {
    var category_id = category_info._id;
    console.log("this is the category_id:" + category_id);
    Category.findOne({_id: category_id}, callback);
};

module.exports.addReceipt = (userinfo, callback) => {
  var category_id = userinfo.category_id;
  var receipt_id = userinfo.receipt_id;
  Category.findByIdAndUpdate(
        category_id,
        {$push: {"receipts": receipt_id}},
        {safe: true, upsert: true, new : true},
        function(err, model) {
            console.log(err);
        }
    );
}
