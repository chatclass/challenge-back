const Koa = require("koa");
const logger = require("koa-logger");
const bodyParser = require("koa-bodyparser");
const errorHandling = require("../src/middlewares/errorHandling");
const { connectDatabase } = require("../db/index");
const router = require("../src/routes/routes");
require("dotenv").config();

const app = new Koa();

connectDatabase();

app
  .on("error", (err, ctx) => console.error("Server Error: ", err, ctx))
  .use(logger())
  .use(bodyParser())
  .use(errorHandling)
  .use(router.routes());

module.exports = app;
