const express = require("express");
const { validateCreateBookMW } = require("./middlewares/book.mw");
const { getBooks, createBook } = require("./controllers/bookController");

const app = express();

app.get("/books", getBooks);
// app.get("./book");
const bodyParserMiddleware = express.json();

app.post("/books", bodyParserMiddleware, validateCreateBookMW, createBook);
// app.put();
// app.delete();

const PORT = 3000;
const HOST = "localhost";
app.listen(PORT, HOST);
