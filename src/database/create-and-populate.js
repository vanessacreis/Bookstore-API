import sqlite3 from "sqlite3";
import { dirname } from "path";
import { fileURLToPath } from "url";
sqlite3.verbose();
const filePath = dirname(fileURLToPath(import.meta.url)) + "/database.db";
const database = new sqlite3.Database("./database.db");

const BOOKS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "BOOKS"(
    "ID_Books" INTEGER PRIMARY KEY AUTOINCREMENT,
    "Name" varchar (64),
    "Writer" varchar (64),
    "Publisher" varchar(64),
    "Genre" varchar(64),
    "Language" varchar(64),
    "Year" varchar(64),
    "Pages" varchar(64),
    "Price" varchar(64)
);`;

const ADD_BOOKS_DATA = `
INSERT INTO BOOKS(ID_Books, Name, Writer, Publisher, Genre, Pages, Language, Year, Price)
VALUES
    (1, 'O Sol é para Todos', 'Harper Lee', 'José Olypio', 'Ficção Clássica', 349, 'Português', 2015, 31.40),
    (2, 'A Menina que Roubava Livros', 'Markus Zusak', 'Intrínseca', 'Romance', 480, 'Português', 2007, 43.99),
    (3, 'Sob a Redoma', 'Stephen King', 'Suma de Letras', 'Suspense', 960, 'Português', 2012, 69.99),
    (4, 'O Impulso', 'Ashley Audrain', 'Parelela', 'Thriller', 328, 'Português', 2021, 29.99),
    (5, 'Nimona', 'Noelle Stevenson', 'Intrínseca', 'Graphic Novel', 272, 'Português', 2016, 49.99),
    (6, 'Capitães da Areia', 'Jorge Amado', 'Companhia de Bolso', 'Romance', 280, 'Português', 2009, 35.50),
    (7, 'Os Sete Maridos de Evelyn Hugo', 'Taylor Jenkins Reid', 'Paralela', 'Romance', 360, 'Português', 2019, 29.99),
    (8, 'Mañana tendremos otros nombres', 'Patricio Pron', 'Alfaguara', 'Romance', 275, 'Espanhol', 2019, 85.90),
    (9, '')
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
      console.log("Error: Books cannot inserted into the table.");
    }
  });
}

database.serialize(() => {
  createTableBooks();
  insertIntoBooks();
});
