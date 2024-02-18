let books = [
  {
    name: "1",
    author: "Daryna",
    description: "asdasdasdas asd asdasd asdasd",
    numberOfPages: 20,
    price: 99,
    availability: true,
  },
  {
    name: "2",
    author: "Victor",
    description: "ertert ertert",
    numberOfPages: 10,
    price: 50,
    availability: true,
  },
];

class Book {
  static async create(bookData) {
    const newBook = { ...bookData };

    newBook.id = books.length;
    books.push(newBook);

    return newBook;
  }

  static async findeOne() {}

  static async findeAll() {
    return books;
  }

  static async update() {}

  static async delete() {}
}

module.exports = Book;
