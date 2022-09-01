const express = require("express");
const cors = require("cors");
const compression = require("compression");
const { json, urlencoded } = require("body-parser");

const Route = require("./routers");

const App = express();

App.use(cors());
App.use(compression());
App.use(json());
App.use(urlencoded({ extended: false }));

App.get("/", (_, res) => {
  res.status(200).json({
    state: true,
    message: "Welcome to Backend_2",
  });
});

App.use(Route);

module.exports = App;
