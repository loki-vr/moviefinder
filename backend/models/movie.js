const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  _id: { type: Number, unique: true },
  backdrop: String,
  poster: String,
  genres: [{ type: mongoose.Schema.Types.ObjectId, ref: "GenreModel" }],
  title: String,
  overview: String,
  release_date: { type: Date, default: Date.now },
  popularity: Number,
});

const MovieModel = mongoose.model("MovieModel", MovieSchema, "movies");

module.exports = MovieModel;
