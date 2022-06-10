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
  "vote_average",
  "user_opinion",
];

router.get("/", async function (req, res) {
  console.log(req.query.limit);
  const movies = await MovieModel.find({})
    .skip(req.query.offset ? parseInt(req.query.offset) : 0)
    .limit(req.query.limit ? parseInt(req.query.limit) : 24)
    .populate("genres");
  res.json(movies);
});

router.post("/new", async function (req, res) {
  try {
    let movieParams = {};
    for (const param of movie_params) {
      if (req.body[param] !== undefined) {
        movieParams[param] = req.body[param];
      } else {
        throw "Parameter " + param + " not set.";
      }
    }
    let newMovie = new MovieModel(movieParams);
    const movie = await newMovie.save();
    console.log(movie);
    res.status(201).json(movie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
});

router.get("/search/:search", async function (req, res) {
  const movies = await MovieModel.find({
    title: { $regex: req.params.search, $options: "i" },
  })
    .skip(req.query.offset ? parseInt(req.query.offset) : 0)
    .limit(req.query.limit ? parseInt(req.query.limit) : 24)
    .populate("genres");
  res.json(movies);
});

router.get("/genre/:genre", async function (req, res) {
  if (req.query.offset === "false") {
    const movies = await MovieModel.find({
      genres: parseInt(req.params.genre, 10),
    })
      .skip(req.query.offset ? parseInt(req.query.offset) : 0)
      .limit(req.query.limit ? parseInt(req.query.limit) : 24)
      .populate("genres");
    res.json(movies);
  } else {
    const movies = await MovieModel.find({
      genres: parseInt(req.params.genre, 10),
      user_opinion: 0,
    })
      .skip(req.query.offset ? parseInt(req.query.offset) : 0)
      .limit(req.query.limit ? parseInt(req.query.limit) : 24)
      .populate("genres");
    res.json(movies);
  }
});

router.get("/liked", async function (req, res) {
  const movies = await MovieModel.find({
    user_opinion: 1,
  })
    .skip(req.query.offset ? parseInt(req.query.offset) : 0)
    .limit(req.query.limit ? parseInt(req.query.limit) : 24)
    .populate("genres");
  res.json(movies);
});

router.get("/:id", async function (req, res) {
  const movie = await MovieModel.findOne({ _id: req.params.id }).populate(
    "genres"
  );
  res.json(movie);
});

router.put("/:id", async function (req, res) {
  let updatedMovie = {};
  for (const param of movie_params) {
    if (req.body[param] !== undefined) {
      updatedMovie[param] = req.body[param];
    }
  }
  console.log(updatedMovie);
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
