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

    static getStudentsApprove() {
        const students = Reader.readJsonFile("./lib/data/visualpartners.json");
        return StudentService.applyStudentsApprove(students);
    }
}

module.exports = StudentController;
