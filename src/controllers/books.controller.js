const booksService = require("../services/books.service");

const books = {
  get: async (ctx) => {
    ctx.body = await booksService.getBook(ctx.request.params.id);
  },
  create: async (ctx) => {
    ctx.body = await booksService.createBook(ctx.request.body);
  },
  getAll: async (ctx) => {
    ctx.body = await booksService.getAllBooks(ctx.request.query);
  },
  update: async (ctx) => {
    ctx.body = await booksService.updateBook(
      ctx.request.params.id,
      ctx.request.body
    );
  },
  delete: async (ctx) => {
    ctx.body = await booksService.deleteBook(ctx.request.params.id);
  },
};

module.exports = books;
