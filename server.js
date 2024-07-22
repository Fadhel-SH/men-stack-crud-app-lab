// We begin by loading Express
const dotenv = require("dotenv").config(); // Loads the environment variables from .env file
const express = require("express");
const morgan = require("morgan");
const app = express();

//Database
require('./config/database')

  // landing page
  app.get("/", async (req, res, next) => {
    res.render("index.ejs");
  });
// port set up to port = 3000
  app.listen(3000, () => {
    console.log("Listening on port 3000");
  });
  
  // GET /
app.get("/", async (req, res) => {
    res.send("hello, friend!");
  });