const mongoose = require("mongoose");
const bcrpyt = require("bcryptjs");

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
  bcrpyt.genSalt(10, (error, salt) =>{
    bcrpyt.hash(user.password, salt, (error, hash) => {
        if (error){
          throw error;
        }
        user.password = hash;
        user.save(callback);
    });
  });
};

module.exports.getUserByUsername = (username, callback) => {
  User.findOne({username: username}, callback);
}

module.exports.countUser = (username, callback) => {
  return User.count({username: username}, callback);
}

module.exports.comparePassword = (password, hash, callback) => {
  bcrpyt.compare(password, hash, (error, matched) => {
    if (error){
      throw error;
    }
    callback(null, matched);
  });
}
