<template>
  <div>
    <body>
      <div class="results">
        <div style="height: 100px"></div>
        <h1 style="color: white" v-if="!results.length" class="noResults">
          No result found.
        </h1>
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
  name: "SearchPage",
  components: { Movies },
  created: async function () {
    try {
      this.results = (
        await axios.get(
          process.env.VUE_APP_API +
            "/movies/search/" +
            this.$route.params.search
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
    };
  },
  watch: {
    "$route.fullPath": async function () {
      try {
        this.results = (
          await axios.get(
            process.env.VUE_APP_API +
              "/movies/search/" +
              this.$route.params.search
          )
        ).data;
        console.log(this.results[0]);
      } catch (error) {
        console.log(error);
      }
    },
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
@keyframes black {
  from {
    opacity: 0;
  }
  to {
    opacity: 0;
  }
}

.movies {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: flex-start;
  animation: 0.75s ease-out 0s 1 wait, 0.21s ease-out 0.75s 1 fadeInAnimation;
}

.noResults {
  animation: 0.75s ease-out 0s 1 black, 0.21s ease-out 0.75s 1 fadeInAnimation;
}
</style>
