import Book from "../model/book.js";

const bookController = (app, bd) => {
  const bookModel = new Book(bd);

  app.get("/books", async (req, res) => {
    try {
      const resp = await bookModel.allBooks();
      res.status(200).json({
        books: resp,
        error: false,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
        error: true,
      });
    }
  });

  app.get("/books/book/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const resp = await bookModel.showOneBook(id);
      res.status(200).json({
        books: resp,
        error: false,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
        error: true,
      });
    }
  });

  app.post("/books", (req, res) => {});

  app.put("/books/book/:id", (req, res) => {});

  app.delete("/books/book/:id", (req, res) => {});
};

export default bookController;
