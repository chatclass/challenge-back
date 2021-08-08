const csvtojson = require("csvtojson");
require("dotenv").config();
const Author = require("./src/models/authors.model");
const { connectDatabase } = require("./db/index");

(async function importScript() {
  try {
    const args = process.argv.slice(2);

    const pathToFile = args[0];

    const csvData = await csvtojson().fromFile(pathToFile);

    connectDatabase();

    const result = await Author.insertMany(csvData);

    console.log("[INFO] Data Successfully Imported!");
    console.log(`[INFO] Number of rows inserted: ${result.length}`);
  } catch (error) {
    console.log(`[ERROR] An Error has occurred: ${error.message}`);
  }
  process.exit(1);
})();
