const Joi = require('joi');
const mongoose = require('../db/connection');

const userSchema = new mongoose.Schema({
  "name":String ,
  "email":String ,
  "password":String,
  "userType":[],
  "userDept":String
});

const User = mongoose.model('User', userSchema);

function validateUser(user) {
  const schema = Joi.object({
      name: Joi.string().min(3).max(64).required(),
      email: Joi.string().min(6).max(255).required().email(),
      password: Joi.string().min(5).max(255).required(),
  })

  return schema.validate(user);
}

module.exports.userSchema = userSchema;
module.exports.User = User;
module.exports.validate = validateUser;