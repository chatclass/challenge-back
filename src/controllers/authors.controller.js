const authorsService = require("../services/authors.service");

const authors = {
  create: async (ctx) => {
    ctx.body = await authorsService.createAuthor(ctx.request.body);
  },
  getAll: async (ctx) => {
    ctx.body = await authorsService.getAllAuthors(ctx.request.query);
  },
};

module.exports = authors;
