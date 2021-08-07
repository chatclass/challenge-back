const Router = require("koa-router");
const errorHandler = require("../middlewares/errorHandling");

//CONTROLLERS
const booksController = require("../controllers/books.controller");
const authorsController = require("../controllers/authors.controller");

module.exports = ((opts = {}) => {
  const router = new Router();

  //BOOKS
  router.get("/books/:id", errorHandler, booksController.get);
  router.put("/books/:id", errorHandler, booksController.update);
  router.delete("/books/:id", errorHandler, booksController.delete);
  router.post("/books", errorHandler, booksController.create);
  router.get("/books", errorHandler, booksController.getAll);

  //AUTHORS
  router.post("/authors", errorHandler, authorsController.create);
  router.get("/authors", errorHandler, authorsController.getAll);

  return router;
})();
