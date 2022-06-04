const Joi = require('joi');
const mongoose = require('../db/connection');

const userSchema = new Schema({
  "name":"",
  "email":"",
  "password":"",
  "userType":[],
  "userDept":""
})

const User = mongoose.model('User', userSchema);

function validateUser(user) {
  const schema = Joi.object({
      name: Joi.string().min(3).max(64).required(),
      email: Joi.string().min(6).max(255).required().email(),
      password: Joi.string().min(5).max(255).required(),
  })

  return schema.validate(user);
}

exports.userSchema = userSchema;
exports.User = User;
exports.validate = validateUser;