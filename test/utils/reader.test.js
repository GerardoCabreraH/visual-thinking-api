const Reader = require("./../../lib/utils/reader");

describe("Pruebas unitarias para el Reader", () => {
    test("Requerimiento 01: Contar los datos de muestra", () => {
        const students = Reader.readJsonFile("./test/data/visualpartners-test.json");
        expect(students.length).toBe(51);
    });
});
