const mongoose = require("mongoose");

const GenreSchema = new mongoose.Schema({
  _id: Number,
  name: String,
});

const GenreModel = mongoose.model("GenreModel", GenreSchema, "genres");

module.exports = GenreModel;
