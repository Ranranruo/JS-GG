"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./router-ctrl");

router.get('/',ctrl.homepage);
router.get('/login', ctrl.loginpage);

module.exports = router;