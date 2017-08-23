const mongoose = require("mongoose");

const GroupSchema = mongoose.Schema({
  group: {
    type: String
  },
  receipts: {
    type: [String]
  }
});

const Group = module.exports = mongoose.model("GroupSchema", GroupSchema);

module.exports.addGroup = (group, callback) => {
  Group.create(group, callback);
};

module.exports.getGroups = (callback, limit) => {
  Group.find(callback).limit(limit);
};

module.exports.findGroupById = (group_info, callback) => {
    var group_id = group_info._id;
    console.log("this is the Group_id:" + group_id);
    Group.findOne({_id: group_id}, callback);
};

module.exports.addReceipt = (userinfo, callback) => {
  const Group_id = userinfo.group_id;
  const receipt_id = userinfo.receipt_id;
  Group.findByIdAndUpdate(
        group_id,
        {$push: {"receipts": receipt_id}},
        {safe: true, upsert: true, new : true},
        function(err, model) {
            console.log(err);
        }
    );
}
