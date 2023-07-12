const Student = require("../models/Student");

// Get all students
exports.getAllStudents = async () => {
  try {
    const students = await Student.findAll();
    return students;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch students from the database.");
  }
};

// Create a new student
exports.createStudent = async (name, age, grade) => {
  try {
    const student = await Student.create({ name, age, grade });
    return student;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create a new student.");
  }
};
