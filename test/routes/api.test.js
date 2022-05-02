const app = require("./../../lib/routes/api");
const request = require("supertest");

describe("Probar rutas del servidor", () => { 
    test("Probar ruta principal", (done) => {
        request(app)
            .get("/")
            .expect(200)
            .expect((res) => {
                expect((res.body).message).toBe("Visual Thinking Api welcome!");
            })
            .end((err) => {
                if (err) return done(err);
                return done();
            });
    });

    test("Requerimiento 01: Habilitar un endpoint para consultar todos los estudiantes con todos sus campos", (done) => {
        request(app)
            .get("/estudiantes")
            .expect(200)
            .expect((res) => {
                expect(res.body.length).toBe(51);
            })
            .end((err) => {
                if (err) return done(err);
                return done();
            });
    });

    test("Requerimiento 02: Habilitar un endpoint para consultar los emails de todos los estudiantes que tengan certificacion", (done) => {
        request(app)
            .get("/estudiantes/emails/certificacion")
            .expect(200)
            .expect((res) => {
                expect(res.body.length).toBe(29);
            })
            .end((err) => {
                if (err) return done(err);
                return done();
            });
    });

    test("Requerimiento 03: Habilitar un endpoint para consultar todos los estudiantes que tengan credits mayor a 500", (done) => {
        request(app)
            .get("/estudiantes/aprobados")
            .expect(200)
            .expect((res) => {
                expect(res.body.length).toBe(27);
            })
            .end((err) => {
                if (err) return done(err);
                return done();
            });
    });
});
