const mongoose = require('../db/connection');

const deptSchema = new Schema({
  departmentName: {
    type: String,
    required: true
  },
  departmentHead: {
    type: person,
    required: true
  },
  complaintsClosed: { type: Number, default: 0, },
  complaintsPending: { type: Number, default: 0, }
});

const Department = mongoose.model('Department', deptSchema);

exports.Department = Department;