const StudentController = require("./../../lib/controllers/StudentController");
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (request, response) => {
    response.json({ message: "Visual Thinking Api welcome!" });
});

app.get("/estudiantes", (request, response) => {
    response.json(StudentController.getAllStudents());
});

app.get("/estudiantes/emails/certificacion", (request, response) => {
    response.json(StudentController.getStudentsHaveCertification());
});

app.get("/estudiantes/aprobados", (request, response) => {
    response.json(StudentController.getStudentsApprove());
});

module.exports = app;
