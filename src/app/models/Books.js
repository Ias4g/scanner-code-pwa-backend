import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  isbn: String,
  name: String,
  author: String,
  coverImage: String,
  price: Number,
  promotionalPrice: Number,
  rating: Number,
  score: Number,
  scores: [{ name: String, value: Number }],
  tecnologies: [String],
  requirements: [String],
  descriptions: String,
});

export default mongoose.model("books", BookSchema);
