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

describe("GET /books/book/:id", ()=>{
    test("If the status is 200", ()=>{
        return request(app).get('/books/book/2')
        .then((response)=>{
            expect(response.statusCode).toBe(200)
        })
    })
})

describe('POST /books', ()=>{
    test('If the body exists', ()=>{
        return request(app).post('/books')
        .send({
            "name": "name",
	        "writer": "writer",
	        "publisher": "publisher",
	        "genre": "genre",
	        "language": "language",
	        "year": "year",
	        "pages": "pages",
	        "price": "price"
        })
        .then((response)=>{
            expect(response.body.message).toBeTruthy()
        })
    })
})