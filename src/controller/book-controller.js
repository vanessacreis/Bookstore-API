import Book from "../model/book.js";

const bookController = (app, bd) => {
  const bookModel = new Book(bd);

  app.get("/books", async (req, res) => {
    try {
      const resp = await bookModel.allBooks();
      res.status(200).json({
        books: resp,
        count: resp.length,
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
        book: resp,
        error: false,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
        error: true,
      });
    }
  });

  app.get("/books/price/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const resp = await bookModel.bookPrice(id);
      res.status(200).json({
        info: resp,
        error: false,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
        error: true,
      });
    }
  });

  app.get("/books/writer/:writer", async (req, res) => {
    const param = req.params.writer;
    const writer = param.replace("+", " ");
    try {
      const resp = await bookModel.selectWriter(writer);
      res.status(200).json({
        books: resp,
        count: resp.length,
        error: false,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
        error: true,
      });
    }
  });

  app.post("/books", async (req, res) => {
    const body = req.body;
    try {
      const resp = await bookModel.insertBook(body);
      res.status(201).json({
        message: resp,
        error: false,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
        error: true,
      });
    }
  });

  app.put("/books/book/:id", async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    try {
      const resp = await bookModel.updateBook(id, body);
      res.status(201).json({
        message: resp,
        error: false,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
        error: true,
      });
    }
  });

  app.delete("/books/book/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const resp = await bookModel.deleteBook(id);
      res.status(202).json({
        message: resp,
        error: false,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
        error: true,
      });
    }
  });
};

export default bookController;
