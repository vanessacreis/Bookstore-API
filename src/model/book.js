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
      const resp = await this.dao.showOneBook(id);
      if (resp.length === 0) {
        throw new Error(
          `ID ${id} is not found. Please try again with a valid ID.`
        );
      } else {
        return resp;
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };

  bookPrice = async (id) => {
    try {
      await this.checkID(id);
      return await this.dao.bookPrice(id);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  selectWriter = async (writer) => {
    try {
      const resp = await this.dao.selectWriter(writer);
      if (resp.length === 0) {
        throw new Error(
          `Sorry, we don't have any books by ${writer}. Register a new book and try again.`
        );
      } else {
        return resp;
      }
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
      await this.checkID(id);
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
      await this.checkID(id);
      return await this.dao.deleteBook(id);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  checkID = async (id) => {
    const resp = await this.dao.showOneBook(id);
    if (resp.length === 0) {
      throw new Error(
        `ID ${id} is not found. Please try again with a valid ID.`
      );
    }
  };
}

export default Book;
