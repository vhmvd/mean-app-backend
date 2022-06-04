const mongoose = require('mongoose')
const {log} = require("mercedlogger") // import merced logger


const uri = "mongodb+srv://vhmvd:3K+KbRrEPBQE$-b@noscope.sqi6a.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect = mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// CONNECTION EVENTS
mongoose.connection
    .on("open", () => log.green("DATABASE STATE", "Connection Open"))
    .on("close", () => log.magenta("DATABASE STATE", "Connection Open"))
    .on("error", (error) => log.red("DATABASE STATE", error));
module.exports = mongoose;