import sqlite3 from "sqlite3";
import { dirname } from "path";
import { fileURLToPath } from "url";
sqlite3.verbose();
const filePath = dirname(fileURLToPath(import.meta.url)) + "/database.db";
const database = new sqlite3.Database(filePath);

const BOOKS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "BOOKS"(
    "ID_Books" INTEGER PRIMARY KEY AUTOINCREMENT,
    "Name" varchar (64),
    "Writer" varchar (64),
    "Publisher" varchar(64),
    "Genre" varchar(64),
    "Language" varchar(64),
    "Pages" varchar(64),
    "Year" varchar(64),
    "Price" varchar(64)
);`;

const ADD_BOOKS_DATA = `
INSERT INTO BOOKS (ID_Books, NAME, WRITER, PUBLISHER, GENRE, LANGUAGE, PAGES, YEAR, PRICE)
VALUES
  (1, 'O Sol é Para Todos', 'Harper Lee', 'José Olympio', 'Ficção Histórica', 'Português', 350, 2015, 59.90),
  (2, 'A Menina que Roubava Livros', 'Markus Zusak' , 'Intrínseca', 'Ficção História', 'Português', 480, 2011, 49.99),
  (3, 'Sob a Redoma', 'Stephen King', 'Suma', 'Suspense', 'Português', 960, 2012, 64.90),
  (4, 'Os Sete Maridos de Evelyn Hugo', 'Taylor Jenkins Reid', 'Paralela', 'Romance de formação', 'Português', 360, 2019, 29.90),
  (5, 'O Impulso', 'Ashley Audrain', 'Paralela', 'Thriller', 'Português', 328, 2021, 26.99),
  (6, 'Capitães da Areia', 'Jorge Amado', 'Companhia das Letras', 'Romance brasileiro', 'Português', 268, 2008, 40.84),
  (7, 'El espiritu de mis padres sigue subiendo en la lluvia', 'Patrício Pron', 'Random House Mondadori', 'Ficção Argentina', 'Espanhol', 199, 2011, 35.89),
  (8, 'Matéria Escura', 'Blake Crouch', 'Intrínseca', 'Ficção Científica', 'Português', 352, 2017, 59.99),
  (9, 'Cidades Afundam em Dias Normais', 'Aline Valek', 'Rocco', 'Romance', 'Português', 256, 2020, 25.99),
  (10, 'Joyland', 'Stephen King', 'Suma', 'Suspense', 'Portugues', 240, 2015, 25.99)
`;

function createTableBooks() {
  database.run(BOOKS_SCHEMA, (error) => {
    if (error) {
      console.log("Error: Table cannot be created");
    }
  });
}

function insertIntoBooks() {
  database.run(ADD_BOOKS_DATA, (error) => {
    if (error) {
      console.log("Error: Books cannot be inserted.");
    }
  });
}

database.serialize(() => {
  createTableBooks();
  insertIntoBooks();
});
