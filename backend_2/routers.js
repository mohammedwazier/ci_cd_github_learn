const express = require("express");
const router = express.Router();

const { text } = require("./text_route");

router.get("/api/text/:id", text);

module.exports = router;
