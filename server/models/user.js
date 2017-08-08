const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = module.exports = mongoose.model("User", UserSchema);

module.exports.getUsers = (callback, limit) => {
  User.find(callback).limit(limit);
};

module.exports.addUser = (user, callback) => {
  User.create(user, callback);
};

module.exports.getUserByUsername = (username, callback) => {
  const query = {username: username};
  User.findOne(query, callback);
}

module.exports.getUserByBoth = (username, password, callback) => {
  console.log("about to send mongo query");
  const query = {username: username, password: password};
  User.findOne(query, callback);
}
