const StudentService = require("./../../lib/services/StudentService");
const Reader = require("./../../lib/utils/reader");

describe("Pruebas unitarias para StudentService", () => {    
    test("Requerimiento 01: Habilitar un endpoint para consultar todos los estudiantes con todos sus campos", () => {
        const students = Reader.readJsonFile("./lib/data/visualpartners.json");
        const studentsList = StudentService.applyAllStudents(students);
        expect(studentsList.length).toBe(51);
    });
    
    test("Requerimiento 02: Habilitar un endpoint para consultar los emails de todos los estudiantes que tengan certificacion", () => {
        const students = Reader.readJsonFile("./lib/data/visualpartners.json");
        const studentsList = StudentService.applyStudentsHaveCertification(students);
        expect(studentsList.length).toBe(29);
    });

    test("Requerimiento 03: Habilitar un endpoint para consultar todos los estudiantes que tengan credits mayor a 500", () => {
        const students = Reader.readJsonFile("./lib/data/visualpartners.json");
        const studentsList = StudentService.applyStudentsApprove(students);
        expect(studentsList.length).toBe(27);
    });
});
