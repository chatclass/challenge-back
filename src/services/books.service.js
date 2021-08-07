const Book = require("../models/books.model");

const createBook = (body) => {
  return Book.create(body);
};

const getBook = (id) => {
  return Book.findById(id).populate("authors");
};

const getAllBooks = (params) => {
  const { page, pageSize, ...query } = params;

  const skip = parseInt(page, 10) || 0;
  const limit = parseInt(pageSize, 10) || 10;

  return Book.find(query)
    .populate("authors")
    .limit(limit)
    .skip(skip * limit);
};

const deleteBook = (id) => {
  return Book.findByIdAndDelete(id);
};

const updateBook = (id, body) => {
  return Book.findByIdAndUpdate(id, body, { new: true });
};

module.exports = {
  createBook,
  getBook,
  getAllBooks,
  deleteBook,
  updateBook,
};
