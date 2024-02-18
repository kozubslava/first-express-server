const Book = require("../models/Books");

module.exports.getBooks = async (req, res) => {
  const books = await Book.findeAll();

  res.send(books);
};

module.exports.createBook = async (req, res, next) => {
  const newBook = await Book.create(req.book);

  res.send(newBook);
};
