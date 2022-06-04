require("dotenv").config() // load .env variables

const { User, validate } = require('../models/user');
const _ = require('lodash'); // For some extra utilities
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');


const { SECRET } = process.env;

const router = require("express").Router();

router.post("/signup", async (req, res, next) => {
  try {
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).send("User already registered.")
    }
    // hash the password
    req.body.password = await bcrypt.hash(req.body.password, 10);

    user = new User(_.pick(req.body, ['name', 'email', 'password', 'userType', 'userDepartment']));

    await user.save();

    res.send(_.pick(user, ['name', 'email']));
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.post("/login", async (req, res, next) => {
  try {
    // check if the user exists
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      //check if password matches
      const result = await bcrypt.compare(req.body.password, user.password);
      if (result) {
        // sign token and send it in response
        const token = jwt.sign({ email: user.email, name: user.name, userType: user.userType, user: user.userDepartment }, SECRET, { expiresIn: '1h' });
        res.json({ token });
      } else {
        res.status(400).json({ error: "password doesn't match" });
      }
    } else {
      res.status(400).json({ error: "User doesn't exist" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;