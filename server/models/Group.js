const mongoose = require("mongoose");

const GroupSchema = mongoose.Schema({
  group: {
    type: String,
    required: true
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
    Group.findOne({_id: group_id}, callback);
};

module.exports.addReceipt = (userinfo, callback) => {
  const group_id = userinfo.group_id;
  const image_url = userinfo.image_url;
  Group.findByIdAndUpdate(
        group_id,
        {$push: {"receipts": image_url}},
        {safe: true, upsert: true, new : true},
        function(err, model) {
            console.log(err);
        }
    );
}
