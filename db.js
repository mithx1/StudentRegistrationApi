const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/student-registration-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  grade: { type: String, required: true },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', () => {
  console.log('Connected to MongoDB!');
});

