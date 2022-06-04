const mongoose = require('mongoose')

const uri = "mongodb+srv://vhmvd:3K+KbRrEPBQE$-b@noscope.sqi6a.mongodb.net/?retryWrites=true&w=majority";
const client = mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});

module.exports = client