const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const body = {
  name: {
    type: String,
    required: true,
  },
};

const options = {
  collection: "Authors",
  versionKey: false,
};

const authorSchema = Schema(body, options);

module.exports = mongoose.model("Author", authorSchema);
