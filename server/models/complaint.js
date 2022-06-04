const mongoose = require('../db/connection');

const complaintsSchema = new Schema({
  userEmail: {
    type: String,
    required: true,
  },
  dept: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  details: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['InProgress', 'Pending', 'Closed'],
    default: "InProgress"
  },
  assignee: {
    type: person,
  }
});

const Complaint = mongoose.model('Department', complaintsSchema);

exports.Complaint = Complaint;