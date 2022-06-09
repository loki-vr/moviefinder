<template>
  <body>
    <div class="add">
      <h1>Add a new movie</h1>
      <form>
        <input type="text" placeholder="Title" />
        <form>
          <select id="genre_id" name="genre" placeholder="Select genre">
            <option value="" disabled selected>Select genre</option>
            <option v-for="genre in genres" :key="genre.id" value="genre.name">
              {{ genre.name }}
            </option>
          </select>
        </form>
        <input type="url" placeholder="Poster TMDB Path" />
        <input type="url" placeholder="Backdrop TMDB Path" />
        <textarea placeholder="Description"></textarea>
        <input type="date" placeholder="Release date" />
        <input type="number" step="0.1" placeholder="Popularity" min="0" />
        <input
          type="number"
          step="0.1"
          placeholder="Average score"
          max="5"
          min="0"
        />
        <input type="submit" value="Send" />
      </form>
    </div>
  </body>
</template>

<script>
import axios from "axios";
export default {
  name: "AddFilms",
  data: function () {
    return {
      genres: [],
    };
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

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
body {
  animation: fadeInAnimation ease 0.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  margin: 100px;
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
.add input[type="submit"] {
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
.add input[type="submit"]:hover,
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
</style>
