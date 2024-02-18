const express = require("express");
const router = require("./router");

const app = express();

app.use(router);

const PORT = 3000;
const HOST = "localhost";
app.listen(PORT, HOST);
