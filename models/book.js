const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  id: {type: String, required: true },
  title: { type: String, required: true },
  authors: [{ type: String, required: true }],
  description: String,
  link: String,
  thumbnail: String,
  publishedDate: String,
  savedDate: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
