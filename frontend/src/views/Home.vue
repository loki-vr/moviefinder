<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/morbiustv.png" />
    <h1>MorbiusTV+</h1>
    <p>
      Les meilleures recommandations de films tels que Morbius sont sur
      MorbiusTV+!
    </p>
    <Searchbar />
    <ul>
      <li v-for="movie in movies" :key="movie.id"><Movies :movie="movie" /></li>
    </ul>
   
  </div>
</template>

<script>
import axios from "axios";
import Movies from "@/components/Movies.vue";
import Searchbar from "@/components/Searchbar.vue";
export default {
  name: "Home",
  components: { Movies, Searchbar },
  data: function () {
    return {
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
  color: white;
  padding-top: 70px;
  font-size: x-large;
  margin-left: 0;
  margin-right: 0;
}

p {
  text-align: center;
  color: white;
  font-size: medium;
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
</style>
