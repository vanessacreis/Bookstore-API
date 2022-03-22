import { response } from "express";
import request from "supertest";
import app from "../app.js";

describe("GET /books", () => {
  test("If the status is 200", () => {
    return request(app)
      .get("/books")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("GET /books/book/:id", () => {
  test("If the status is 200", () => {
    return request(app)
      .get("/books/book/2")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("POST /books", () => {
  test("If the body exists", () => {
    return request(app)
      .post("/books")
      .send({
        "name": "Claros Sinais de Loucura",
        "writer": "Karen Harrington",
        "publisher": "Intrínseca",
        "genre": "Ficção Jovem Adulto",
        "language": "Português",
        "pages": "256",
        "year": "2014",
        "price": "24,90",
      })
      .then((response) => {
        expect(response.statusCode).toBe(201)
        expect(response.body.message).toBeTruthy();
      });
  });
});

describe("PUT /books", ()=>{
    test("If error = false", () =>{
        return request(app)
        .put("/books/book/2")
        .send({
            "name": "Mar Sem Estrelas",
            "writer": "Erin Morgenstern",
            "publisher": "Morro Branco",
            "genre": "Fantasia",
            "language": "Português",
            "year": "2021",
            "pages": "544",
            "price": "60.99"
        })
        .then((response) => {
            expect(response.statusCode).toBe(201)
            expect(response.body.error).toBe(false)

        })
    })
})

describe("DELETE books/book/1", ()=>{
    test("If the status is 200", () => {
        return request(app)
          .delete("/books/book/2")
          .then((response) => {
            expect(response.statusCode).toBe(202);
          });
      });
})