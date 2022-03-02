const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

dotenv.config({ path: "./config.env" });
require("./db/connection");

app.use(express.json());

app.use(require("./router/route"));

const PORT = process.env.PORT;
//Middleware
const middleware = (req, res, next) => {
    next();
};

app.listen(5000, () => {
    console.log(`server running on ${PORT}`);
});
