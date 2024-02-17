const express = require("express");
const yup = require("yup");

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

app.get("/books", (req, res) => {
  res.send(books);
});
// app.get("./book");
const bodyParserMiddleware = express.json();

const BOOK_VALIDATION = yup.object({
  name: yup.string().required(),
  author: yup.string().required(),
});

app.post("/books", bodyParserMiddleware, (req, res, next) => {
  BOOK_VALIDATION.validate(req.body)
    .then((validateBook) => {
      res.send(validateBook);
    })
    .catch((err) => {
      res.send(err.message);
    });
});
// app.put();
// app.delete();

const PORT = 3000;
const HOST = "localhost";
app.listen(PORT, HOST);
