class BookSchema {
  constructor(name, writer, publisher, genre, pages, language, year, price) {
    this.name = this.checkName(name);
    this.writer = this.checkWriter(writer);
    this.publisher = this.checkPublisher(publisher);
    this.genre = genre;
    this.pages = pages;
    this.language = language;
    this.year = this.checkYear(year);
    this.price = price;
  }

  checkName = (name) => {
    if (name == "") {
      throw new Error("Name is not valid. Please enter again.");
    } else {
      return name;
    }
  };

  checkWriter = (writer) => {
    if (writer == "" || writer.length < 3) {
      throw new Error("Writer is not valid. Please enter again.");
    } else {
      return writer;
    }
  };

  checkPublisher = (publisher) => {
    if (publisher == "") {
      throw new Error("Publisher is not valid. Please enter again.");
    } else {
      return publisher;
    }
  };

  checkYear = (year) => {
    if (year.length != 4) {
      throw new Error("Year is not valid. Please enter again.");
    } else {
      return year;
    }
  };
}

export default BookSchema;
