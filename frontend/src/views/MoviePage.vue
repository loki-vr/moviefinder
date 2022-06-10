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
          <div style="height: 100px"></div>
          <h1>{{ movie.title }}</h1>
          <ul id="example-1">
            <li>🎬 &nbsp;&nbsp;</li>
            <li v-for="genre in movie.genres" :key="genre._id">
              <router-link class="genreLink" :to="'/genre/' + genre._id">{{
                genre.name
              }}</router-link
              ><span> &nbsp; &nbsp;</span>
            </li>
          </ul>
          <p style="text-align: justify">
            {{ movie.overview }}
          </p>
          <h4>
            Release Date :
            {{ new Date(movie.release_date).toLocaleDateString("en-US") }}
          </h4>
          <h3>
            {{ movie.vote_average / 2 }}/5
            {{ vote(movie.vote_average) }}
          </h3>

          <button
            v-if="opinion === 1"
            @click="increment()"
            class="oui-bouton-up"
            type="button"
          ></button>
          <button
            v-if="opinion === 0 || opinion == -1"
            @click="increment()"
            class="oui-bouton-down"
            type="button"
          ></button>
          <button
            v-if="opinion === -1"
            @click="decrement()"
            class="non-bouton-up"
            type="button"
          ></button>
          <button
            v-if="opinion === 0 || opinion == 1"
            @click="decrement()"
            class="non-bouton-down"
            type="button"
          ></button>

          <p style="text-align: left">
            <span>Similar films and series</span>
            :
          </p>
          <MiniCarousel :movies="similar" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import MiniCarousel from "@/components/MiniCarousel.vue";
export default {
  name: "MoviePage",
  components: {
    MiniCarousel,
  },
  data: function () {
    return {
      movieName: "h",
      movie: {},
      ip: this.$route.params.id,
      opinion: 0,
      similar: [],
    };
  },
  methods: {
    increment: function () {
      this.opinion = 1;
      this.movie.user_opinion = 1;
      axios
        .put(
          `${process.env.VUE_APP_API}/movies/` + this.$route.params.id,
          this.movie
        )
        .then(() => {
          this.$emit("opinionSaved");
          console.log("used", this.movie);
        })
        .catch((error) => {
          this.userCreationError = "An error occured while (dis)liking.";
          console.error(error);
        });
    },
    decrement: function () {
      this.opinion = -1;
      this.movie.user_opinion = -1;
      axios
        .put(
          `${process.env.VUE_APP_API}/movies/` + this.$route.params.id,
          this.movie
        )
        .then(() => {
          this.$emit("opinionSaved");
          console.log("used", this.movie);
        })
        .catch((error) => {
          this.userCreationError = "An error occured while (dis)liking.";
          console.error(error);
        });
    },
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
  created: async function () {
    try {
      this.movie = (
        await axios.get(
          process.env.VUE_APP_API + "/movies/" + this.$route.params.id
        )
      ).data;
      this.opinion = this.movie.user_opinion;
    } catch (error) {
      console.log(error);
    }

    try {
      this.similar = (
        await axios.get(
          process.env.VUE_APP_API + "/movies/genre/" + this.movie.genres[0]._id
        )
      ).data;
    } catch (error) {
      console.log(error);
    }
  },
  watch: {
    "$route.params.id": function () {
      if (this.$route.params.id) {
        axios
          .get(process.env.VUE_APP_API + "/movies/" + this.$route.params.id)
          .then((response) => {
            // Do something if call succeeded
            this.movie = response.data;
            this.opinion = this.movie.user_opinion;
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
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
.inside {
  color: white;
  height: 100%;
}

li {
  display: inline;
  list-style-type: none;
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
  animation: fadeInAnimation ease 0.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

.fond-image {
  background-size: cover;
  height: 100%;
  width: 100%;
  animation: 1s ease-out 0s 1 wait, 0.21s ease-out 1s 1 fadeInAnimation;
}

.recommandation {
  animation: fadeInAnimation ease 0.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

.oui-bouton-up {
  background-image: url("../assets/likeok.png");
  background-size: 40px;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  height: 50px;
  width: 50px;
  padding: 10px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}

.oui-bouton-down {
  background-image: url("../assets/like.png");
  background-size: 40px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  height: 50px;
  width: 50px;
  padding: 10px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}

.non-bouton-down {
  background-image: url("../assets/dislike.png");
  background-size: 40px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  height: 50px;
  width: 50px;
  padding: 10px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}

.home {
  height: 100%;
}

.non-bouton-up {
  background-image: url("../assets/dislikeok.png");
  background-size: 40px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  height: 50px;
  width: 50px;
  padding: 10px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
}

.oui-bouton-down:hover,
.non-bouton-down:hover {
  opacity: 0.7;
  transition: 0.2s;
}
a {
  color: white;
  text-decoration: none;
}
</style>
