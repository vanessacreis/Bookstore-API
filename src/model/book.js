import BookSchema from "./bookSchema.js";
import BookDAO from "../dao/bookDAO.js";

class Book {
  constructor(database) {
    this.dao = new BookDAO(database);
  }

  allBooks = async () => {
    try {
      return await this.dao.allBooks();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  showOneBook = async (id) => {
    try {
      return await this.dao.showOneBook(id);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  insertBook = (name) => {};

  deleteBook = (name) => {};

  updateBook = () => {};
}

export default Book;
