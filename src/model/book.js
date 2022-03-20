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

  bookPrice = async (id) => {
    try {
      return await this.dao.bookPrice(id);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  selectWriter = async (writer) => {
    try {
      return await this.dao.selectWriter(writer);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  insertBook = async (book) => {
    try {
      const newBook = new BookSchema(
        book.name,
        book.writer,
        book.publisher,
        book.genre,
        book.pages,
        book.language,
        book.year,
        book.price
      );
      return await this.dao.insertBook(newBook);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  updateBook = async (id, book) => {
    try {
      const updatedBook = new BookSchema(
        book.name,
        book.writer,
        book.publisher,
        book.genre,
        book.pages,
        book.language,
        book.year,
        book.price
      );
      return await this.dao.updateBook(id, updatedBook);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  deleteBook = async (id) => {
    try {
      return await this.dao.deleteBook(id);
    } catch (error) {
      throw new Error(error.message);
    }
  };
}

export default Book;
