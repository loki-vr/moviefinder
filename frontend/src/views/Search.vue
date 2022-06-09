<template>
  <div>
    <body>
      <div class="results">
        <h1 style="color: white" v-if="!results.length">No result found.</h1>
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
.movies {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: flex-start;
}

.results {
  padding-top: 100px;
}
</style>
