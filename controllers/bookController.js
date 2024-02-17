const books = [
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

module.exports.getBooks = (req, res) => {
  res.send(books);
};

module.exports.createBook = (req, res, next) => {
  const newBook = req.book;
  newBook.id = books.length;
  books.push(newBook);
  res.send(newBook);
};
