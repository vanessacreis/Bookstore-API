import Book from "../model/book";

const booksController = (app, bd) => {
  app.get("/books", (req, res) => {});

  app.get("/books/book/:title", (req, res) => {});

  app.post("/books", (req, res) => {});

  app.put("/books/book/:id", (req, res) => {});

  app.delete("/books/book/:id", (req, res) => {});
};

export default booksController;
