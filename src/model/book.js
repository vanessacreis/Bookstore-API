import BookSchema from "./bookSchema.js";
import BookDAO from "../dao/bookDAO.js";

class Book {
  constructor(database) {
    this.DAO = new BookDAO(database);
  }

  allBooks = () => {};

  showOneBook = (name) => {};

  insertBook = (name) => {};

  deleteBook = (name) => {};
}

export default Book;
