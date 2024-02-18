const express = require("express");
const router = require("./router");
const { basicErrorMW } = require("./middlewares/errors");

const app = express();

app.use(router);
app.use(basicErrorMW);

const PORT = 3000;
const HOST = "localhost";
app.listen(PORT, HOST);
