"use strict";

//모듈
const express = require("express");
const app = express();

//라우터
const ROUTER = require("./routes/home");

//앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", ROUTER); // use => 미들웨어를 등록해주는 함수.

module.exports = app;
