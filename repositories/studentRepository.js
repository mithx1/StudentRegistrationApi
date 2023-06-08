const { updateStudent } = require("../controllers/studentController");
const Student = require("../models/Student");

exports.getAllStudent = async () => {
  return await Student.find();
};

exports.createStudent = async (studentData) => {
  return await Student.create(studentData);
};

exports.updateStudent = async (id, studentData) => {
  return await Student.findByIdAndUpdate(id, studentData);
};

exports.deleteStudent = async (id) => {
  return await Student.findByIdAndRemove(id);
};

exports.getStudentById = async (id) => {
  return await Student.findById(id);
};
