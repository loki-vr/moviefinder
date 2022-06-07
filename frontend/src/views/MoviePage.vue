<template>
  <div class="home">
    <div
      class="test"
      :style="`
        background-image: url(${concatener(g(movies, this.$route.params.id).backdrop_path)});
      `"
    >
      <div class="inside"> 
        <div class="texte">
          <h1>{{ g(movies, this.$route.params.id).original_title }}</h1>
          <p>{{g(movies, this.$route.params.id).overview}}</p>
          <h4>{{g(movies, this.$route.params.id).release_date}}</h4>
          <h2>{{g(movies, this.$route.params.id).vote_average / 2}}/5 {{vote(g(movies, this.$route.params.id).vote_average)}}</h2>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "MoviePage",
  data: function () {
    return { movieName: "h", movies: [{ id: "5" }] };
  },
  methods: {
    g: function(list,id) {
        const found = list.find(element => element.id == id);
        console.log(found)
        return found
    },
    concatener: function (url) {
      return "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces" + url;
    },
    vote: function (vote) {
      let answer = "";
      for (let i = 0; i < Math.trunc(vote / 2); i++) {
        answer += "⭐️";
      }
      return answer;
    },
  },
  created() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=522d421671cf75c2cba341597d86403a`
      )
      .then((response) => {
        // Do something if call succeeded
        this.movies = response.data.results;
      })
      .catch((error) => {
        // Do something if call failed
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.inside {
  color: white;

}
.home {
  text-align: center;
  height: 100%;
}

.texte {
  padding-top: 500px;
  padding: 50px;
  background: rgba(16, 15, 15, 0.8);
  width: 40%;
  height: 100%;
  color: white;
}


.test {
  background-size: cover;
  height: 100%;
}

h1 {
  font-family: Verdana;
}

</style>
