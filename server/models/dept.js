const mongoose = require('../db/connection');

const deptSchema = new Schema({
  "departmentName":"",
  "departmentHead":{
    "name":"",
    "email":"",
    "contact":0
  },
  "complaintsClosed":0,
  "complaintsPending":0,
  "subDepartments":[]
})

const Department = mongoose.model('Department', deptSchema);

exports.Department = Department;