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
  User.findOne({username: username}, callback);
}

module.exports.getUserByBoth = (username, password, callback) => {
  User.findOne({username: username, password: password}, callback);
}

module.exports.countUser = (username, callback) => {
  return User.count({username: username}, callback);
}
