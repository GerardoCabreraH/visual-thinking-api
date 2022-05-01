const StudentService = require("../services/StudentService");
const Reader = require("../utils/reader");

class StudentController {
    static getAllStudents() {
        const students = Reader.readJsonFile("./lib/data/visualpartners.json");
        return StudentService.applyAllStudents(students);
    }

    static getStudentsHaveCertification() {
        const students = Reader.readJsonFile("./lib/data/visualpartners.json");
        return StudentService.applyStudentsHaveCertification(students);
    }
}

module.exports = StudentController;
