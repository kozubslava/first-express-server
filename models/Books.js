let books = [
  {
    id: 0,
    name: "1",
    author: "Daryna",
    description: "asdasdasdas asd asdasd asdasd",
    numberOfPages: 20,
    price: 99,
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

  static async findeOne(id) {
    const book = books.find((book) => book.id === id);
    return book;
  }

  static async findeAll() {
    return books;
  }

  static async update(id, newBookData) {
    books = books.map((book) => {
      if (book.id !== id) {
        return book;
      }
      const updateBook = { ...book, ...newBookData };
      return updateBook;
    });
    const updateBook = await Book.findeOne(id);
    return updateBook;
  }

  static async delete(id) {
    const delitedBook = await Book.findeOne(id);
    books = books.filter((book) => book.id !== id);
    return delitedBook;
  }
}

module.exports = Book;
