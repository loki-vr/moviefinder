
<template>

  <div class="home">
    <img alt="Vue logo" src="../assets/morbiustv.png" />
    <h1>MorbiusTV+</h1>
    <p>
      Les meilleures recommandations de films tels que Morbius sont sur
      MorbiusTV+!
    </p>
    <h3>Des liens essentiels</h3>
    <ul>
      <li>
        <a href="https://fr.wikipedia.org/wiki/Morbius" target="_blank"
          >Wikipedia</a
        >
      </li>
      <li>
        <a
          href="https://www.allocine.fr/film/fichefilm_gen_cfilm=260627.html"
          target="_blank"
          >Informations diverses</a
        >
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=oZ6iiRrz1SY" target="_blank"
          >Vidéos</a
        >
      </li>
    </ul>
    <h3>Recommorbius</h3>
    <ul>
      <div></div>
      <p>{{ movieName }}</p>
      <div></div>
      <input v-model="movieName" placeholder="recherche" />
      <div></div>
      <li v-for="movie in movies" :key="movie.id">
        <div class="img__wrap">
          <img
            class="img_img"
            :src="`https://image.tmdb.org/t/p/w300${movie.poster_path}`"
          />
          <div class="img__description_layer">
            <p class="img__description">
              <font size="+3">
                <b>{{ movie.title || movie.name }} </b>
              </font>
              <br />
              <p class="img__description line_limit">
              {{ movie.overview }}</p>
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data: function () {
    return {
      movieName: "",
      movies: [],
    };
  },
  created() {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=522d421671cf75c2cba341597d86403a"
      )
      .then((response) => {
        console.log(response);
        this.movies = response.data.results;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.home {
  text-align: center;
  color : white;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
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

.img__wrap {
  position: relative;
  height: 450px;
  width: 300px;
}

.img__description_layer {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: black;
  color: #fff;
  visibility: hidden;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s, visibility 0.2s;
}

.img__description.line_limit {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.img__wrap:hover .img__description_layer {
  visibility: visible;
  opacity: 0.7;
}

.img__description {
  transition: 0.2s;
  transform: translateY(1em);
}

.img__wrap:hover .img__description {
  transform: translateY(0);
}
</style>
