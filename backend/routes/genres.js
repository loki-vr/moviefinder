const express = require("express");
const router = express.Router();
const GenreModel = require("../models/genre");

const genre_params = ["_id", "name"];

router.get("/", async function (req, res) {
  const genres = await GenreModel.find({})
    .populate("likes")
    .exec({ options: { sort: ["likes", "desc"] } });
  res.json(genres);
});

router.post("/new", async function (req, res) {
  try {
    let genreParams = {};
    for (const param of genre_params) {
      console.error(param);
      if (req.body[param]) {
        genreParams[param] = req.body[param];
      } else {
        throw "Parameter " + param + " not set.";
      }
    }
    let newGenre = new GenreModel(genreParams);

    const genre = await newGenre.save();

    res.status(201).json(genre);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
});

router.get("/:_id", async function (req, res) {
  const genre = await GenreModel.findOne({ _id: req.params._id });
  res.json(genre);
});

router.put("/:id", async function (req, res) {
  let updatedGenre = {};
  for (const param in genre_params) {
    if (req.body[param]) {
      updatedGenre[param] = req.body[param];
    }
  }
  try {
    const genre = await GenreModel.findOneAndUpdate(
      { _id: req.params.id },
      updatedGenre
    ).exec();
    res.json(genre);
  } catch (error) {
    res.status(500).json({ error: error });
    console.log(error);
  }
});

module.exports = router;
