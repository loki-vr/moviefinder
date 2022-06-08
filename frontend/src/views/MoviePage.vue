<template>
  <div class="home">
    <div
      class="fond-image"
      :style="`
        background-image: url(${concatener(movie)});
      `"
    >
      <div class="inside">
        <div class="texte">
          <br /><br /><br /><br />
          <h1>{{ movie.title }}</h1>
          <p style="text-align: justify">
            {{ movie.overview }}
          </p>
          <h4>
            Release Date :
            {{ new Date(movie.release_date).toLocaleDateString("en-US") }}
          </h4>
          <h2>
            {{ movie.vote_average / 2 }}/5
            {{ vote(movie.vote_average) }}
          </h2>

          <button class="oui-bouton" type="button">I like it 👍</button>
          <button class="non-bouton" type="button">I don't like it 👎</button>

          <div style="display: flex; overflow: auto">
            <Film></Film>
          </div>
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
    return { movieName: "h", movie: {} };
  },
  methods: {
    concatener: function (movie) {
      if (movie.backdrop) {
        return (
          "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces" +
          movie.backdrop
        );
      } else {
        return "https://www.zupimages.net/up/22/23/9sfi.png";
      }
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
      .get(process.env.VUE_APP_API + "/movies/" + this.$route.params.id)
      .then((response) => {
        // Do something if call succeeded
        this.movie = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inside {
  color: white;
  height: 100%;
}
.texte {
  background: rgba(16, 15, 15, 0.8);
  overflow: auto;
  width: 30%;
  text-align: center;
  height: 100%;
  color: white;
  padding-left: 30px;
  padding-right: 30px;
}

.fond-image {
  background-size: cover;
  height: 100%;
  width: 100%;
}

h1 {
  font-family: Verdana;
}

.oui-bouton {
  background: rgb(66, 114, 30);
  color: white;
  border: rgb(66, 114, 30);
  border-radius: 20px;
  padding: 5px;
}

.non-bouton {
  background: rgb(125, 51, 51);
  color: white;
  border: rgb(125, 51, 51);
  border-radius: 20px;
  padding: 5px;
  margin-left: 5px;
}
</style>
