<template>
  <body>
    <div id="container">
      <div class="margin">Add</div>
      <div class="add">
        <h1>Add a new movie</h1>
        <form ref="addMovieForm">
          <input v-model="movie.title" type="text" placeholder="Title" />
          <select
            v-model="movie.genres"
            id="genre_id"
            name="genre"
            placeholder="Select genre"
          >
            <option value="" disabled selected>Select genre</option>
            <option v-for="genre in genres" :key="genre.id" :value="genre.id">
              {{ genre.name }}
            </option>
          </select>
          <input
            v-model="movie.poster"
            type="text"
            placeholder="Poster TMDB Path"
          />
          <input
            v-model="movie.backdrop"
            type="text"
            placeholder="Backdrop TMDB Path"
          />
          <textarea
            v-model="movie.overview"
            placeholder="Description"
          ></textarea>
          <input
            v-model="movie.release_date"
            type="date"
            placeholder="Release date"
          />
          <input
            v-model="movie.popularity"
            type="number"
            step="0.1"
            placeholder="Popularity"
            min="0"
          />
          <input
            v-model="movie.vote_average"
            type="number"
            step="0.1"
            placeholder="Average score"
            max="10"
            min="0"
          />
          <input type="button" @click="addFilm()" value="Send" />
        </form>
      </div>
      <div class="margin">Add</div>
    </div>
  </body>
</template>

<script>
import axios from "axios";
export default {
  name: "AddFilms",
  emits: ["FilmAdded"],
  data: function () {
    return {
      genres: [],
      movie: {
        _id: Math.random() * 10 ** 10,
        title: "",
        genres: 0,
        poster: "",
        backdrop: "",
        overview: "",
        release_date: "",
        popularity: "",
        vote_average: "",
        user_opinion: 0,
      },
      userCreationError: "",
    };
  },
  methods: {
    addFilm: function () {
      if (!this.$refs.addMovieForm.checkValidity()) {
        this.$refs.addMovieForm.reportValidity();
        return;
      }
      this.movie.genres = [this.movie.genres];
      axios
        .post(`${process.env.VUE_APP_API}/movies/new`, this.movie)
        .then(() => {
          this.$emit("userAdded");
          this.$router.push("/" + this.movie._id);
        })
        .catch((error) => {
          this.userCreationError = "An error occured while creating new user.";
          console.error(error);
        });
    },
  },
  created() {
    axios
      .get(process.env.VUE_APP_API + "/genres")
      .then((response) => {
        this.genres = response.data;
        console.log(this.genres);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
html,
body {
  height: 100%;
}
body {
  animation: fadeInAnimation ease 0.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

#container {
  background-image: url("../assets/mosaique_sombre.png");
  background-repeat: repeat;
  background-size: 700px;
  background-attachment: fixed;
  padding: 0;
  margin: 0;
  margin-left: auto;
  margin-right: auto;
}

@keyframes fadeInAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes transAnimation {
  0% {
    transform: translateX(100px);
  }
  100% {
    transform: translateX(0);
  }
}

h1 {
  color: white;
  text-decoration: overline 1px;
  font-variant: small-caps;
}

.add {
  max-width: 500px;
  margin: 10px auto;
  padding: 16px;
  background: #1c181b;
  border: 3px solid #ffbc5e;
  border-bottom: 3px solid #ffbc5e;
  border-right: 1px solid #ffbc5e;
  border-left: 1px solid #ffbc5e;
  border-radius: 20px;
  animation: transAnimation ease 0.5s;
  animation-iteration-count: 1;
  margin: auto;
  margin-top: 80px;
}

.add input[type="text"],
.add input[type="date"],
.add input[type="number"],
.add input[type="search"],
.add input[type="url"],
.add textarea,
.add select {
  outline: none;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  width: 100%;
  background: #1c181b;
  margin-bottom: 4%;
  border: none;
  border-bottom: 1.5px solid #ffbc5e;
  border-radius: 4px;
  padding: 3%;
  color: white;
  font: 95% Arial, Helvetica, sans-serif;
}
.add input[type="text"]:hover,
.add input[type="date"]:hover,
.add input[type="number"]:hover,
.add input[type="search"]:hover,
.add input[type="url"]:hover,
.add textarea:hover,
.add select:hover {
  border-bottom: 1.5px solid #f15ad3;
  transition: 0.2s;
}
.add input[type="button"] {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  background-color: #1c181b;
  color: white;
  padding: 10px;
  border-radius: 4px;
  border: 1.5px solid #ffbc5e;
  width: 100%;
}
.add input[type="button"]:hover,
.add input[type="button"]:hover {
  border: 1.5px solid #f15ad3;
  transition: 0.2s;
  width: 400px;
}

.add input[type="text"]:focus,
.add input[type="date"]:focus,
.add input[type="number"]:focus,
.add input[type="search"]:focus,
.add input[type="url"]:focus,
.add textarea:hover,
.add select:hover {
  border-bottom: 1.5px solid #f15ad3;
  transition: 0.2s;
}

.add input[type="date"] {
  color: grey;
}

.margin {
  opacity: 0;
  padding-bottom: 10px;
}
</style>
