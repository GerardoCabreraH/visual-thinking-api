const StudentService = require("./../../lib/services/StudentService");
const Reader = require("./../../lib/utils/reader");

describe("Pruebas unitarias para StudentService", () => {    
    test("Requerimiento 01: Habilitar un endpoint para consultar todos los estudiantes con todos sus campos", () => {
        const students = Reader.readJsonFile("./lib/data/visualpartners.json");
        const studentsList = StudentService.applyAllStudents(students);
        expect(studentsList.length).toBe(51);
    });
});
