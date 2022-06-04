const { Complaint } = require('../models/complaint');
const _ = require('lodash'); // For some extra utilities
const authenticateToken = require('../helper/authenticate');

const router = require("express").Router();

router.post('/addComplaint', async (req, res, next) => {
  let data = req.body;
  complaint = new Complaint({ userEmail: data.email, dept: data.dept, date: data.date, details: data.details, assignee: data.assignee, });
  complaint.save();
  res.send(_.pick(complaint, ['status']));
});

router.get('/deptComplaints', async (req, res, next) => {
  let dept = req.query.dept;
  complaints = await Complaint.find({ dept: dept });
  res.send({ complaints });
});


router.get('/userComplaints', async (req, res, next) => {
  let email = req.query.email;
  complaints = await Complaint.find({ userEmail: email });
  res.send({ complaints });
})


module.exports = router;