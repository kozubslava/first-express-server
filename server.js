const express = require("express");
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

app.get('/books', (req, res) => {
  res.send(books);
});
// app.get("./book");
app.post('/books',);
// app.put();
// app.delete();

const PORT = 3000;
const HOST = "localhost";
app.listen(PORT, HOST);
