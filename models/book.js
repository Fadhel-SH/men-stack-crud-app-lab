const mongoose = require('mongoose');

// Create Book Schema 
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedYear: { type: Number, required: true },
  genre: { type: String, required: true },
  description: { type: String, required: true },
  coverImage: String,
});

module.exports = mongoose.model('Book', bookSchema);
