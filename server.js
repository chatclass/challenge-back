const app = require("./src/app");

app.listen(process.env.APP_PORT || 3001, () => {
  console.log(`Server is running on port ${process.env.APP_PORT || 3001}...`);
});
