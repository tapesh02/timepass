const dotenv = require("dotenv");

const mongoose = require("mongoose");
const express = require("express");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const app = express();

dotenv.config({ path: "./config.env" });
require("./db/connection");

app.use(express.json());
app.use(cookieParser());

app.use(require("./router/route"));

//Middleware
const middleware = (req, res, next) => {
    next();
};
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
});
