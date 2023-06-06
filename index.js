const express = require('express');
const app = express();
const PORT = 3000; // You can use any port number you prefer
const Student = require('./db');

// Set up routes
app.get('/', (req, res) => {
  res.send('Welcome to the Student Registration API!');
});

// Register a new student
app.post('/students', (req, res) => {
  const { name, age, grade } = req.body;

  const student = new Student({ name, age, grade });
  student.save((err, savedStudent) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error registering student');
    } else {
      res.status(201).json(savedStudent);
    }
  });
});

// Get all students
app.get('/students', (req, res) => {
  Student.find({}, (err, students) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error retrieving students');
    } else {
      res.json(students);
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
