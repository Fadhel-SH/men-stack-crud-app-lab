const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// Index Route
router.get('/', async (req, res) => {
  const books = await Book.find({});
  res.render('index', { books });
});

// New Route
router.get('/new', (req, res) => {
  res.render('new');
});

// Create Route
router.post('/', async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.redirect('/books');
});

// Show Route
router.get('/:id', async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.render('show', { book });
});

// Edit Route
router.get('/:id/edit', async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.render('edit', { book });
});

// Update Route
router.put('/:id', async (req, res) => {
  await Book.findByIdAndUpdate(req.params.id, req.body);
  res.redirect(`/books/${req.params.id}`);
});

// Delete Route
router.delete('/:id', async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.redirect('/books');
});

module.exports = router;
