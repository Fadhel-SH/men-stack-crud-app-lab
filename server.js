// We begin by loading Express
const dotenv = require("dotenv")
dotenv.config(); // Loads the environment variables from .env file
const express = require("express");
const morgan = require("morgan");
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();

//Database
require('./config/database')

//Book Routes 
const bookRoutes = require('./routes/books');
app.use('/books', bookRoutes);


// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.use(express.static('public'));

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