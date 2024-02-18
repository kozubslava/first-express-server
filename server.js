const express = require("express");
const { validateCreateBookMW } = require("./middlewares/book.mw");
const {
  getBooks,
  createBook,
  getBook,
  deleteBook,
  updateBook,
} = require("./controllers/bookController");
const bodyParserMiddleware = express.json();
const app = express();

app.get("/books", getBooks);
app.get("/books/:id", getBook);
app.post("/books", bodyParserMiddleware, validateCreateBookMW, createBook);

app.put("/books/:id", bodyParserMiddleware, updateBook);

app.delete("/books/:id", deleteBook);

const PORT = 3000;
const HOST = "localhost";
app.listen(PORT, HOST);
