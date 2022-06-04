const express = require("express");
const mongoose = require('mongoose')

const app = express()
const Schema  = mongoose();

const uri = "mongodb+srv://vhmvd:3K+KbRrEPBQE$-b@noscope.sqi6a.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
  
  // perform actions on the collection object
  client.close();
})

const userSchema = new Schema({
  "name":"",
  "email":"",
  "password":"",
  "userType":[],
  "userDept":""
})

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