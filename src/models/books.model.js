const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const body = {
  name: {
    type: String,
    required: false,
  },
  edition: {
    type: String,
    required: false,
  },
  publication_year: {
    type: String,
    required: false,
  },
  authors: [{ type: Schema.Types.ObjectId, ref: "Author" }],
};

const options = {
  collection: "Books",
  versionKey: false,
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
};

const bookSchema = Schema(body, options);

module.exports = mongoose.model("Book", bookSchema);
