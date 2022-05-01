const StudentController = require("./../../lib/controllers/StudentController");

describe("Pruebas unitarias para StudentController", () => {    
    test("Requerimiento 01: Habilitar un endpoint para consultar todos los estudiantes con todos sus campos", () => {
        const students = StudentController.getAllStudents();
        expect(students.length).toBe(51);
    });
});
