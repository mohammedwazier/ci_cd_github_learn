const express = require("express");
const router = express.Router();
const { number } = require("./number_route");

router.get("/api/number/:id", number);

module.exports = router;
