const mongoose = require("mongoose");
const Student = require("./models/Student"); // Update the path if necessary

mongoose.connect("mongodb://localhost/student-registration-api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

module.exports = db;
