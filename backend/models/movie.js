const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  _id: { type: Number, unique: true },
  backdrop: String,
  poster: String,
  genres: [{ type: Number, ref: "GenreModel" }],
  title: String,
  overview: String,
  release_date: { type: Date, default: Date.now },
  popularity: Number,
  vote_average: Number,
  user_opinion: Number,
});

const MovieModel = mongoose.model("MovieModel", MovieSchema, "movies");

module.exports = MovieModel;
