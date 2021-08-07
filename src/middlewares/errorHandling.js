module.exports = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.statusCode || err.status || 500;
    ctx.body = {
      message: err.message || "Internal server error",
    };
    ctx.app.emit("error", err, ctx);
  }
};
