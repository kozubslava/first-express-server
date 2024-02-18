const Book = require("../models/Books");

module.exports.getBooks = async (req, res) => {
  const books = await Book.findeAll();

  res.send(books);
};

module.exports.getBook = async (req, res) => {
  const { id } = req.params;
  const book = await Book.findeOne(+id);

  res.send(book);
};

module.exports.createBook = async (req, res, next) => {
  const newBook = await Book.create(req.book);

  res.send(newBook);
};

module.exports.deleteBook = async (req, res, next) => {
  const { id } = req.params;
  const delitedBook = await Book.delete(+id);

  res.send(delitedBook);
};
