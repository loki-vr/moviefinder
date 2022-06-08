<template>
  <body>
    <div class="addfilm">
      <h1>Ajout de films sur MorbiusTV+</h1>
      <p>Pour ajouter des films :</p>
    </div>
    <div class="formulaire">
      <div class="column left">
        <p>Title:</p>

        <p>Genre:</p>
        <form>
          <select id="genre_id" name="genre">
            <option value="select">Select</option>
            <option v-for="genre in genres" :key="genre.id" value="genre.name">
              {{ genre.name }}
            </option>
          </select>
        </form>

        <p>
          Poster:
          <input placeholder="TMDB Path" />
        </p>
        <p>
          Backdrop:
          <input placeholder="TMDB Path" />
        </p>

        <p>Overview: <textarea placeholder="Description"></textarea></p>

        <p>Release date : <input type="date" class="date" /></p>

        <p>Popularity: <input type="number" step="0.1" /></p>
        <p>Average Score: <input type="number" step="0.1" max="5" /></p>
        <div></div>
        <button>Submit</button>

        <div class="columnright"><input placeholder="Title" /></div>
      </div>
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
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=522d421671cf75c2cba341597d86403a&language=en-US&page=2"
      )
      .then((response) => {
        this.genres = response.data.genres;
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
}

@keyframes fadeInAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.container {
  display: flex;
  flex-direction: row;
}
.addfilm {
  text-align: center;
  color: white;
  padding-top: 150px;
  font-size: x-large;
  margin-left: 0;
  margin-right: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.formulaire {
  color: white;
  font-size: medium;
  text-align: center;
  padding: 20px;
}
.column {
  float: left;
}

.left {
  width: 25%;
}

.right {
  width: 75%;
}
p {
  text-align: center;
  color: white;
  font-size: medium;
  margin-top: 10px;
}
input {
  background-color: #1c181b;
  border-bottom: 1.5px solid #ffbc5e;
  width: 30%;
  height: 30px;
  font-size: medium;
  color: white;
  padding: 10px;
  text-align: center;
  border-radius: 4px;
  margin: 10px;
}
textarea {
  background-color: #1c181b;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1.5px solid #ffbc5e;
  width: 30%;
  height: 30px;
  font-size: medium;
  color: white;
  padding: 10px;
  text-align: center;
  border-radius: 4px;
  margin: 10px;
}

input:hover {
  font-size: medium;
  padding: 10px;
  border-bottom: 1.5px solid #f15ad3;
  transition: 0.2s;
}

input.overview {
  height: 200px;
  text-align: left;
}

input.date {
  font-family: Arial, Helvetica, sans-serif;
}

input.image {
  width: 90%;
  color: white;
  text-align: center;
  font-size: medium;
  padding: 16px 20px;
  border: none;
  width: 31%;
  height: 30px;
  border-bottom: 1.5px solid #ffbc5e;
  border-radius: 4px;
  background-color: #1c181b;
  margin: 10px;
}

input.image:hover {
  border-bottom: 1.5px solid #f15ad3;
}
select {
  width: 90%;
  color: white;
  text-align: center;
  font-size: medium;
  padding: 16px 20px;
  border: none;
  width: 31%;
  height: 30px;
  border-bottom: 1.5px solid #ffbc5e;
  border-radius: 4px;
  background-color: #1c181b;
  margin: 10px;
}
select:hover {
  border-bottom: 1.5px solid #f15ad3;
}

input.date {
  background-color: #1c181b;
  border-bottom: 1.5px solid #ffbc5e;
}

button {
  background-color: #1c181b;
  color: white;
  font-size: medium;
  padding: 10px;
  border-radius: 4px;
  border: 1.5px solid #ffbc5e;
  width: 500px;
}
button:hover {
  border: 1.5px solid #f15ad3;
  transition: 0.2s;
  width: 400px;
}
a {
  color: #f15ad3;
  font-style: normal;
  text-decoration: none;
}
a:hover {
  color: #ffbc5e;
  transition: 0.2s;
}

* {
  margin: 0;
  padding: 0;
  border: 0;
}

html {
  font-family: helvetica, arial, sans-serif;
}
</style>
