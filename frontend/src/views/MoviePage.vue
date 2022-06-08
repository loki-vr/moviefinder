<template>
  <div class="home">
    <div
      class="fond-image"
      :style="`
        background-image: url(${concatener(g(movies, this.$route.params.id))});
      `"
    >
      <div class="inside"> 
        <div class="texte">
          <br /><br /><br /><br />
          <h1>{{ g(movies, this.$route.params.id).original_title }}</h1>
          <p style="text-align: justify">{{g(movies, this.$route.params.id).overview}}</p>
          <h4>{{g(movies, this.$route.params.id).release_date}}</h4>
          <h2>{{g(movies, this.$route.params.id).vote_average / 2}}/5 {{vote(g(movies, this.$route.params.id).vote_average)}}</h2>
         
          <button class="oui-bouton" type="button">I like it 👍</button> 
          <button class="non-bouton" type="button">I don't like it 👎</button>

          <div style="display: flex;overflow:auto,">
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
    return { movieName: "h", movies: [{ id: "5" }] };
  },
  methods: {
    g: function(list,id) {
        let found = list.find(element => element.id == id);
        if (!found){
          found = {original_title: "ERROR 404", release_date: "never released", vote_average: "0", overview: "Tu es tombé sur un film bien mystérieux qui n'existe pas... Si tu cherches un film qui n'est pas encore dans notre bdd, n'hésite pas à utiliser l'option \"ajouter\" un film et il apparaîtra sur notre site."}
        }
        return found
    },
    concatener: function (url) {
      if (url.backdrop_path) {
      return "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces" + url.backdrop_path;
      }
      else {
        return "https://www.zupimages.net/up/22/23/9sfi.png"
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
  border :  rgb(66, 114, 30);
  border-radius: 20px;
  padding: 5px;
}

.non-bouton {
  background: rgb(125, 51, 51);
  color: white;
  border :  rgb(125, 51, 51);
  border-radius: 20px;
  padding: 5px;
  margin-left: 5px;
}
</style>
