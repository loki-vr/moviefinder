<template>
  <div class="home">
    <body>
      <img alt="Vue logo" src="../assets/morbiustv.png" />
      <h1>MorbiusTV+</h1>
      <p>
        Les meilleures recommandations de films tels que Morbius sont sur
        MorbiusTV+!
      </p>
      <ul>
        <li v-for="movie in movies" :key="movie.id">
          <Movies :movie="movie" />
        </li>
      </ul>
    </body>
  </div>
</template>

<script>
import axios from "axios";
import Movies from "@/components/Movies.vue";
export default {
  name: "Home",
  components: { Movies },
  data: function () {
    return {
      movies: [],
    };
  },
  created() {
    axios
      .get(process.env.VUE_APP_API + "/movies")
      .then((response) => {
        console.log(response);
        this.movies = response.data;
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
.home {
  text-align: center;
  color: white;
  padding-top: 100px;
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
