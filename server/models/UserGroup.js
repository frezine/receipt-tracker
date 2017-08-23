const mongoose = require("mongoose");

const UserGroupSchema = mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  groups: {
    type: [String]
  }
});

const UserGroup = module.exports = mongoose.model("UserGroup", UserGroupSchema);

module.exports.addUserGroup = (userID, callback) => {
  UserGroup.create(userID, callback);
};

module.exports.getUsersGroups = (callback, limit) => {
  UserGroup.find(callback).limit(limit);
};

module.exports.addGroup = (userinfo, callback) => {
  const user_id = userinfo.user_id;
  const group_id = userinfo.group_id;
  console.log("this is group_id " + group_id);
  UserGroup.findByIdAndUpdate(
        user_id,
        {$push: {"groups": group_id}},
        {safe: true, upsert: true, new : true},
        function(err, model) {
            console.log(err);
        }
    );
}

module.exports.getUserGroups = (user_info, callback) => {
  const user_id = user_info._id;
  UserGroup.findOne({_id: user_id}, callback);
}
