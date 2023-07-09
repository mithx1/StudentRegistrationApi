const express = require("express");
const app = express();
const db = require("./db"); // Update the path if necessary
const studentController = require("./controllers/studentController");

const PORT = 3000;

// Middleware to parse JSON request body
app.use(express.json());

// Set up routes
app.get("/", (req, res) => {
  res.send("Welcome to the Student Registration API!");
});

//routes
app.get("/students", studentController.getStudents);
app.get("/students/:id", studentController.getStudentById);
app.post("/students", studentController.createStudent);
app.put("/students/:id", studentController.updateStudent);
app.delete("/students/:id", studentController.deleteStudent);

const server = app.listen(PORT);

// Start the server
server.on("listening", () => {
  console.log(`Server is running on port ${server.address().port}`);
});
