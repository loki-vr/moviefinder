<template>
  <div>
    <body>
      <div class="results">
        <div style="height: 100px"></div>
        <h1 class="name" style="color: white">{{ genre.name }}</h1>
        <div class="movies">
          <Movies
            v-for="movie in results"
            :key="movie._id"
            :movie="movie"
            width="200"
          />
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import axios from "axios";
import Movies from "@/components/Movies.vue";
export default {
  name: "GenrePage",
  components: { Movies },
  created: async function () {
    try {
      this.results = (
        await axios.get(
          process.env.VUE_APP_API + "/movies/genre/" + this.$route.params.genre
        )
      ).data;
      console.log(this.results[0]);
    } catch (error) {
      console.log(error);
    }
    try {
      this.genre = (
        await axios.get(
          process.env.VUE_APP_API + "/genres/" + this.$route.params.genre
        )
      ).data;
      console.log(this.results[0]);
    } catch (error) {
      console.log(error);
    }
  },
  data: function () {
    return {
      results: [],
      genre: "&nbsp;",
    };
  },
};
</script>

<style>
@keyframes fadeInAnimation {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
@keyframes wait {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.movies {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: flex-start;
}
body {
  animation: fadeInAnimation ease 11s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

.name {
  animation: 0.75s ease-out 0s 1 wait, 0.21s ease-out 0.75s 1 fadeInAnimation;
}

.movies {
  animation: 0.75s ease-out 0s 1 wait, 0.21s ease-out 0.75s 1 fadeInAnimation;
}
</style>
