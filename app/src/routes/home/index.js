"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./router-ctrl");

router.get('/',ctrl.homepage);
router.get('/search:name', ctrl.searchPC);
router.get('/findparty', ctrl.findparty)

module.exports = router;