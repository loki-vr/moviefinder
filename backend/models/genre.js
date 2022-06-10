const mongoose = require("mongoose");

const GenreSchema = new mongoose.Schema(
  {
    _id: Number,
    name: String,
  },
  {
    toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
    toObject: { virtuals: true }, // So `console.log()` and other functions that use `toObject()` include virtuals
  }
);

GenreSchema.virtual("likes", {
  ref: "MovieModel",
  localField: "_id",
  foreignField: "genres",
  match: { user_opinion: 1 },
  count: true,
});

const GenreModel = mongoose.model("GenreModel", GenreSchema, "genres");

module.exports = GenreModel;
