class BookDAO {
  constructor(database) {
    this.db = database;
  }

  allBooks = () => {
    return new Promise((resolve, reject) => {
      this.db.all("SELECT * FROM BOOKS", (error, rows) => {
        if (error) {
          reject(error);
        } else {
          resolve(rows);
        }
      });
    });
  };

  showOneBook = (id) => {
    return new Promise((resolve, reject) => {
      this.db.all("SELECT * FROM BOOKS WHERE ID_Books = ?", id, (error, rows) => {
        if (error) {
          reject(error);
        } else {
          resolve(rows);
        }
      });
    });
  };

  insertBook = (newBook) => {
    return new Promise((resolve, reject) => {
      this.db.run(
        "INSERT INTO BOOKS(NAME, WRITER, PUBLISHER, GENRE, PAGES, LANGUAGE, YEAR, PRICE) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        newBook.name,
        newBook.writer,
        newBook.publisher,
        newBook.genre,
        newBook.pages,
        newBook.language,
        newBook.year,
        newBook.price,
        (error) => {
          if (error) {
            reject({
              message: error.message,
              error: true,
            });
          } else {
            resolve({
              message: `Book ${newBook.name} registered successfully`,
              book: newBook,
              error: false,
            });
          }
        }
      );
    });
  };

  deleteBook = (id) => {
    return new Promise((resolve, reject) => {
      this.db.run("DELETE FROM BOOK WHERE ID = ?", id, (error) => {
        if (error) {
          reject({
            message: error.message,
            erroe: true,
          });
        } else {
          resolve({
            book: `Book nº${id} deleted.`,
            erro: false,
          });
        }
      });
    });
  };

  updateBook = (id, book) => {
    return new Promise((resolve, reject) => {
      this.db.run(
        "UPDATE BOOKS SET NAME = ?, WRITER = ?, PUBLISHER = ?, GENRE = ?, PAGES = ?, LANGUAGE = ?, YEAR = ?, PRINCE = ? WHERE ID = ?",
        book.name,
        book.writer,
        book.publisher,
        book.genre,
        book.pages,
        book.language,
        book.year,
        book.price,
        id,
        (error) => {
          if (error) {
            reject({
              message: error.message,
              error: true,
            });
          } else {
            resolve({
              message: `Book ${id} updated.`,
              book: book,
              error: false,
            });
          }
        }
      );
    });
  };
}

export default BookDAO;
