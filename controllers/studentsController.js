const studentRepository = require("../repositories/studentRepository");

// Get all students
exports.getAllStudents = async (req, res) => {
  try {
    const students = await studentRepository.getAllStudents();
    res.json(students);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Create a new student
exports.createStudent = async (req, res) => {
  try {
    const { name, age, grade } = req.body;
    const student = await studentRepository.createStudent(name, age, grade);
    res.status(201).json({ id: student.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
