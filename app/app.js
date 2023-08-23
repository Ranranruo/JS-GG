"use strict";

//모듈
const express = require("express");
const app = express();

//라우터
const ROUTER = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));


app.use("/", ROUTER); // use => 미들웨어를 등록해주는 함수.

module.exports = app;
