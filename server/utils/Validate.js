const isEmpty = require("lodash/isEmpty");

module.exports.Validate = (data) => {
  let errors = {};
  if (typeof data.username === "undefined" || !data.username){
    errors.username = "This field is required";
  }
  if (typeof data.password === "undefined" || !data.password){
    errors.password = "This field is required";
  }
  return {errors, valid: isEmpty(errors)};
}
