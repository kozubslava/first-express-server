const express = require("express");
const { validateCreateBookMW } = require("./middlewares/book.mw");


const app = express();

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

app.get("/books", (req, res, next) => {
  res.send(books);
});
// app.get("./book");
const bodyParserMiddleware = express.json();



app.post("/books",
  bodyParserMiddleware, validateCreateBookMW,
  (req, res, next) => {
    const newBook = req.book;
    newBook.id = books.length;
    books.push(newBook);
    res.send(newBook);
  }
);
// app.put();
// app.delete();

const PORT = 3000;
const HOST = "localhost";
app.listen(PORT, HOST);
