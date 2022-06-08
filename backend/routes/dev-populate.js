const axios = require("axios");
const express = require("express");
const router = express.Router();
const MovieModel = require("../models/movie");
const GenreModel = require("../models/genre");

const apikey = "522d421671cf75c2cba341597d86403a";
const pages = 100;

//axios.defaults.baseURL = "http://localhost:3000";

async function add_movie(movie) {
  try {
    let newMovie = new MovieModel({
      _id: movie.id,
      backdrop: movie.backdrop_path,
      poster: movie.poster_path,
      genres: movie.genre_ids,
      title: movie.title,
      overview: movie.overview,
      release_date: movie.release_date,
      popularity: movie.popularity,
      vote_average: movie.vote_average,
      user_opinion: 0,
    });
    const previous = await MovieModel.findOne({ _id: movie.id });

    if (previous === null) {
      newMovie.save();
    } else {
      console.log('Movie "' + movie.title + '" already in DB.');
    }
  } catch (error) {
    console.error(error);
  }
}
async function add_genre(genre) {
  try {
    let newMovie = new GenreModel({
      _id: genre.id,
      name: genre.name,
    });
    const previous = await GenreModel.findOne({ _id: genre.id });

    if (previous === null) {
      newMovie.save();
    } else {
      console.log('Genre "' + genre.name + '" already in DB.');
    }
  } catch (error) {
    console.error(error);
  }
}

router.get("/", async function (req, res) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${apikey}&language=en-US`
    );

    for (const genre of response.data.genres) {
      add_genre(genre);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }

  for (const page of Array.from({ length: pages }, (x, i) => i + 1)) {
    console.log(page + "/" + pages);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?page=${page}&api_key=${apikey}`
      );
      for (const movie of response.data.results) {
        if (movie.adult) {
          continue;
        }
        add_movie(movie);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error });
    }
  }
  res.status(200).json({ message: "All movies added up to page " + pages });
});

module.exports = router;
