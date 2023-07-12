const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./db");
const studentsController = require("./controllers/studentsController");
require("./models/Student");

const app = express();

const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Sync the database tables
sequelize
  .sync()
  .then(() => {
    console.log("Database synced.");
  })
  .catch((error) => {
    console.error("Error syncing database:", error);
  });

// Routes
app.get("/students", studentsController.getAllStudents);
app.post("/students", studentsController.createStudent);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});
