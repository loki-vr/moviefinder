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
          <h3>{{ g(movies, this.$route.params.id).original_title }} ({{g(movies, this.$route.params.id).release_date}})</h3>
          <p style="text-align: justify">{{g(movies, this.$route.params.id).overview}}</p>
          {{vote(g(movies, this.$route.params.id).vote_average)}} ({{g(movies, this.$route.params.id).vote_average / 2}}/5)
         
         
          <button v-if="opinion === 1" class="oui-bouton" type="button">I like it 👍</button>
          <button v-if="opinion === 1"  class="non-bouton" type="button">I don't like it 👎</button>
          <button v-if="opinion === 1 || opinion === -1" class="remove-bouton" type="button">Change my opinion</button>

          <p style="text-align: left;"><span style="text-decoration: underline">Similar films and series</span> :</p>
          <div style="display: flex; overflow:auto; width: 100%">
          <Film :movie="film1"></Film>
          <Film :movie="film2"></Film>
          <Film :movie="film1"></Film>
          <Film :movie="film2"></Film>
          <Film :movie="film1"></Film>
          </div>

      </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import Film from "@/components/Film.vue";
export default {
  name: "MoviePage",
  components: {
    Film,
  },
  data: function () {
    return { movieName: "h", movies: [{}], opinion: 0, 
    film1: {
      id: 338953, 
      original_title: "Fantastic Beasts: The Secrets of Dumbledore",
      poster_path: "/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg", },
    film2: {
      id: 752623, 
      original_title: "The Lost City",
      poster_path: "/neMZH82Stu91d3iqvLdNQfqPPyl.jpg", },
      
      }
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
  width: 45%;
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

.home {height: 100%}

.non-bouton {
  background: rgb(125, 51, 51);
  color: white;
  border :  rgb(125, 51, 51);
  border-radius: 20px;
  padding: 5px;
  margin-left: 5px;
}

.remove-bouton {
  background: rgb(171, 168, 168);
  color: white;
  border :  rgb(171, 168, 168);
  border-radius: 20px;
  padding: 5px;
  margin-left: 5px;
}
</style>
