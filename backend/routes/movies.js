const express = require("express");
const router = express.Router();
const MovieModel = require("../models/movie");

const movie_params = [
  "_id",
  "backdrop",
  "poster",
  "genres",
  "title",
  "overview",
  "release_date",
  "popularity",
];

router.get("/", async function (req, res) {
  const movies = await MovieModel.find({}).populate("genres");
  res.json(movies);
});

router.post("/new", async function (req, res) {
  try {
    let movieParams = {};
    for (const param of movie_params) {
      console.error(param);
      if (req.body[param]) {
        movieParams[param] = req.body[param];
      } else {
        throw "Parameter " + param + " not set.";
      }
    }
    let newMovie = new MovieModel(movieParams);

    const movie = await newMovie.save();

    res.status(201).json(movie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
});

router.get("/:_id", async function (req, res) {
  const movie = await MovieModel.findOne({ _id: req.params._id }).populate(
    "genres"
  );
  res.json(movie);
});

router.put("/:id", async function (req, res) {
  let updatedMovie = {};
  for (const param in movie_params) {
    if (req.body[param]) {
      updatedMovie[param] = req.body[param];
    }
  }
  try {
    const movies = await MovieModel.findOneAndUpdate(
      { _id: req.params.id },
      updatedMovie
    ).exec();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error });
    console.log(error);
  }
});

module.exports = router;
