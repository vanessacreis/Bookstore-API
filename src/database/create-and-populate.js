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
    "Year" varchar(64),
    "Pages" varchar(64),
    "Price" varchar(64)
);`;

const ADD_BOOKS_DATA = `
INSERT INTO BOOKS (ID_Books, NAME, WRITER, PUBLISHER, GENRE, PAGES, LANGUAGE, YEAR, PRICE)
VALUES
    (1, 'O Sol é para Todos', 'Harper Lee', 'José Olypio', 'Ficção Clássica', 349, 'Português', 2015, 31.40),
    (2, 'A Menina que Roubava Livros', 'Markus Zusak', 'Intrínseca', 'Romance', 480, 'Português', 2007, 43.99),
    (3, 'Sob a Redoma', 'Stephen King', 'Suma de Letras', 'Suspense', 960, 'Português', 2012, 69.99),
    (4, 'O Impulso', 'Ashley Audrain', 'Parelela', 'Thriller', 328, 'Português', 2021, 29.99),
    (5, 'Nimona', 'Noelle Stevenson', 'Intrínseca', 'Graphic Novel', 272, 'Português', 2016, 49.99),
    (6, 'Capitães da Areia', 'Jorge Amado', 'Companhia de Bolso', 'Romance', 280, 'Português', 2009, 35.50),
    (7, 'Os Sete Maridos de Evelyn Hugo', 'Taylor Jenkins Reid', 'Paralela', 'Romance', 360, 'Português', 2019, 29.99),
    (8, 'Mañana Tendremos Otros Nombres', 'Patricio Pron', 'Alfaguara', 'Romance', 275, 'Espanhol', 2019, 85.90),
    (9, 'A Polícia da Memória', 'Yoko Ogawa', 'Estação Liberdade', 'Romance', 320, 'Português', 2021, 65.00),
    (10, 'The Reader: 20th Anniversary Edition', 'Bernhard Schlink', 'Weidenfeld & Nicolson', 'Ficção histórica', 240, 'Inglês', 2017, 65.00),
    (11, 'O Peso do Pássaro Morto', 'Aline Bei', 'Nós', 'Ficção feminina', 168, 'Português', 2017, 27.00),
    (12, 'Cujo', 'Stephen King', 'Suma De Letras', 'Suspense', 376, 'Português', 2016, 56.70),
    (13, 'A ridícula ideia de nunca mais te ver', 'Rosa Montero', 'Todavia, 'Autobiografia', '234', 'Português', 2019, 64.90), 
    (14, 'A vida secreta dos escritores', 'Guillaume Musso', 'L&PM', 'Mistério', 304, 'Português', 2020, 53.80),
    (15, 'Forrest Gump', 'Winston Groom', 'Aleph', 'Ficção', 392, 'Português', 2016, 54.99),
    (16, 'Flores raras e banalíssimas: A história de Lota de Macedo Soares e Elizabeth Bishop', 'Carmen L. Oliveira', 'Rocco', 'Biografia', 248, 'Português', 2011, 25.04),
    (17, 'Daqui Pra Baixo', 'Jason Reynolds', 'Intrínseca', 'Poesia europeia', 320, 'Português', 2019, 35.00),
    (18, 'Depois', 'Stephen King', 'Suma das Letras', 'Suspense', 192, 'Português', 2021, 21.90),
    (19, 'Talvez você deva conversar com alguém', 'Lori Gottlieb', 'Não Ficção', 'Vestígio', 448, 'Português', 2020, 39.99),
    (20, 'Kindred', 'Octavia E. Butler', 'Ficção Científica', 'Morro Branco', 432, 'Português', 2019, 39.99),
    (21, 'Aristóteles e Dante Descobrem os Segredos do Universo', 'Benjamin Alire Sáenz', 'Ficção Jovem Adulto', 'Seguinte', 392, 'Português', 2014, 35.90),
    (22, 'Sintomas Mórbidos: A Encruzilhada da Esquerda Brasileira', 'Sabrina Fernandes', 'Ciência política', 'Autonomia Literária', 387, 'Português', 2019, 49.99),
    (23, 'As Primeiras Quinze Vidas de Harry August', 'Claire North', 'Ficção Científica', 'Bertrand Brasil', 448, 'Português', 2017, 39.99),
    (24, 'Drácula - Dark Edition: Edição limitada para caçadores de vampiros', 'Bram Stoker', 'Horror clássico', 'Dark Side', 580, 'Português', 2018, 59.99),
    (25, 'A Dança da Morte', 'Stephen King', 'Distopia', 'Suma das Letras', 1248, 'Potuguês, 2013, 85.69)
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
