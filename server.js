const express = require("express");
const { validateCreateBookMW } = require("./middlewares/book.mw");
const {
  getBooks,
  createBook,
  getBook,
  deleteBook,
} = require("./controllers/bookController");

const app = express();

app.get("/books", getBooks);

app.get("/books/:id", getBook);

const bodyParserMiddleware = express.json();

app.post("/books", bodyParserMiddleware, validateCreateBookMW, createBook);

// app.put();

app.delete("/books/:id", deleteBook);

const PORT = 3000;
const HOST = "localhost";
app.listen(PORT, HOST);
