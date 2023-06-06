// studentController.js
const Student = require("../models/Student");

exports.getStudents = async (req, res) => {
  // Code for getting all students
  try {
    const students = await Student.find({});
    res.json(students);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving students");
  }
};

exports.createStudent = async (req, res) => {
  // Code for creating a student
  try {
    const { name, age, grade } = req.body;

    if (!name || !age || !grade) {
      return res.status(400).send("Missing required fields");
    }

    const student = new Student({ name, age, grade });
    const savedStudent = await student.save();
    res.status(201).json(savedStudent);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error registering student");
  }
};

exports.updateStudent = async (req, res) => {
  // Code for updating a student
  try {
    const { id } = req.params;
    const { name, age, grade } = req.body;

    if (!name || !age || !grade) {
      return res.status(400).send("Missing required fields");
    }

    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      { name, age, grade },
      { new: true }
    );

    if (!updatedStudent) {
      return res.status(404).send("Student not found");
    }

    res.json(updatedStudent);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating student");
  }
};

exports.deleteStudent = async (req, res) => {
  // Code for deleting a student
  try {
    const { id } = req.params;

    const deletedStudent = await Student.findByIdAndRemove(id);

    if (!deletedStudent) {
      return res.status(404).send("Student not found");
    }

    res.json(deletedStudent);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting student");
  }
};
