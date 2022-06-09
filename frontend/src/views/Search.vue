<template>
  <div>
    <body>
      <h1 style="color: white" v-if="!results.length">No result found.</h1>
      <h1 style="color: white" v-if="!results.length">No result found.</h1>
      <ul>
        <li>
          <Carousel :movies="results" title="Results" />
          <Movies
            v-for="movie in results"
            :key="movie._id"
            :movie="movie"
            width="100px"
          />
        </li>
      </ul>
    </body>
  </div>
</template>

<script>
import axios from "axios";
import Movies from "@/components/Movies.vue";
import Carousel from "@/components/Carousel.vue";
export default {
  name: "SearchPage",
  components: { Movies, Carousel },
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
