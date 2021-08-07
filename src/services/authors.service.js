const Author = require("../models/authors.model");

const createAuthor = (body) => {
  return Author.create(body);
};

const getAllAuthors = (params) => {
  const { page, pageSize, ...query } = params;

  const skip = parseInt(page, 10) || 0;
  const limit = parseInt(pageSize, 10) || 10;

  return Author.find(query)
    .limit(limit)
    .skip(skip * limit);
};

module.exports = {
  createAuthor,
  getAllAuthors,
};
