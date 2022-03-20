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
      this.db.all(
        "SELECT * FROM BOOKS WHERE ID_Books = ?",
        id,
        (error, rows) => {
          if (error) {
            reject(error);
          } else {
            resolve(rows);
          }
        }
      );
    });
  };

  bookPrice = (id) => {
    return new Promise((resolve, reject) => {
      this.db.all(
        "SELECT NAME, WRITER, PRICE FROM BOOKS WHERE ID_Books = ?",
        id,
        (error, rows) => {
          if (error) {
            reject(error);
          } else {
            resolve(rows);
          }
        }
      );
    });
  };

  selectWriter = (writer) =>{
    return new Promise((resolve, reject) =>{
      this.db.all(
        "SELECT * FROM BOOKS WHERE WRITER = ?",
        writer,
        (error, rows) => {
          if (error){
            reject(error)
          } else {
            resolve(rows)
          }
        }
      )
    })
  }

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
            reject(error);
          } else {
            resolve(`Book ${newBook.name} was registered successfully`);
          }
        }
      );
    });
  };

  updateBook = (id, book) => {
    return new Promise((resolve, reject) => {
      this.db.run(
        "UPDATE BOOKS SET NAME = ?, WRITER = ?, PUBLISHER = ?, GENRE = ?, PAGES = ?, LANGUAGE = ?, YEAR = ?, PRICE = ? WHERE ID_Books = ?",
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
            reject(error);
          } else {
            resolve(`Book ${book.name} was updated.`);
          }
        }
      );
    });
  };

  deleteBook = (id) => {
    return new Promise((resolve, reject) => {
      this.db.run("DELETE FROM BOOKS WHERE ID_Books = ?", id, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve(`Book id: ${id} was deleted.`);
        }
      });
    });
  };
}

export default BookDAO;
