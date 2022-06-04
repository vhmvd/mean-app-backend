const mongoose = require('../db/connection');

const complaintsSchema = new Schema({
  "complaintByUserEmail":"email",
  "complaintDepartment":"departmentName",
  "complaintSubDepartment":"subDepartmentName",
  "complaintDate":"date",
  "complaintDetails":"text",
  "complaintStatus":"Inprogress | pending | closed",
  "complaintOutcome":"relief granted | relief not granted | partial relief granted",
  "complaintAssignee":{
    "name":"",
    "email":"",
    "contact":0
  }
})

const Complaint = mongoose.model('Department', complaintsSchema);

exports.Complaint = Complaint;