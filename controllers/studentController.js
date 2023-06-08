// studentController.js
const Student = require("../models/Student");
const studentRepository = require("../repositories/studentRepository");

exports.getStudents = async (req, res) => {
  // Code for getting all students
  try {
    console.log("Getting Student");
    const students = await studentRepository.getAllStudent();
    res.json(students);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving students");
  }
};

//get by id
exports.getStudentById = async (req, res) => {
  try {
    console.log("Getting student by Id");
    const { id } = req.params;

    const studentById = await studentRepository.getStudentById(id);

    res.json(studentById);
    if (!id) {
      return res.status(400).send("Missing required fields");
    }
  } catch (error) {}
};

exports.createStudent = async (req, res) => {
  // Code for creating a student
  try {
    const { name, age, grade } = req.body;

    if (!name || !age || !grade) {
      return res.status(400).send("Missing required fields");
    }

    const studentData = new Student({ name, age, grade });

    const createdStudent = await studentRepository.createStudent(studentData);
    res.status(201).json({ message: "Student is created" });
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

    const studentData = { name, age, grade };

    const updatedStudent = await studentRepository.updateStudent(
      id,
      studentData
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

    const deletedStudent = await studentRepository.deleteStudent(id);

    if (!deletedStudent) {
      return res.status(404).send("Student not found");
    }

    res.json(deletedStudent);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting student");
  }
};
