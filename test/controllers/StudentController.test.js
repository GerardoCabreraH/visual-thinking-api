const StudentController = require("./../../lib/controllers/StudentController");

describe("Pruebas unitarias para StudentController", () => {    
    test("Requerimiento 01: Habilitar un endpoint para consultar todos los estudiantes con todos sus campos", () => {
        const students = StudentController.getAllStudents();
        expect(students.length).toBe(51);
    });

    test("Requerimiento 02: Habilitar un endpoint para consultar los emails de todos los estudiantes que tengan certificacion", () => {
        const students = StudentController.getStudentsHaveCertification();
        expect(students.length).toBe(29);
    });

    test("Requerimiento 02: Habilitar un endpoint para consultar todos los estudiantes que tengan credits mayor a 500", () => {
        const students = StudentController.getStudentsApprove();
        expect(students.length).toBe(27);
    });
});
