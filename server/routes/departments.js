const { Department } = require('../models/department');
const _ = require('lodash'); 
const authenticateToken = require('../helper/authenticate');
const router = require("express").Router();

router.post('/addDep', authenticateToken, async (req, res, next) => {
  let data = req.body;
  dep = new Department({ departmentName: data.departmentName, departmentHead: data.departmentHead });
  await dep.save();
  res.send(_.pick(dep, ['departmentName']));
});

router.get('/getDeps', authenticateToken, async (req, res, next) => {
  let depts = await Department.find().select('departmentName');
  res.send(JSON.stringify(depts));
});

module.exports = router;