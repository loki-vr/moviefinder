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
          <h3>{{ movie.title }}</h3>
          <ul id="example-1">
            <li>🎬</li>
            <li v-for="genre in movie.genres" :key="genre._id">
              {{ genre.name }}<span> 🎬 </span>
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
          >
            I like it 👍
          </button>
          <button
            v-if="opinion === 0 || opinion == -1"
            @click="increment()"
            class="oui-bouton-down"
            type="button"
          >
            I like it 👍
          </button>
          <button
            v-if="opinion === -1"
            @click="decrement()"
            class="non-bouton-up"
            type="button"
          >
            I don't like it 👎
          </button>
          <button
            v-if="opinion === 0 || opinion == 1"
            @click="decrement()"
            class="non-bouton-down"
            type="button"
          >
            I don't like it 👎
          </button>

          <p style="text-align: left">
            <span style="text-decoration: underline"
              >Similar films and series</span
            >
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
        await axios.get(process.env.VUE_APP_API + "/movies/liked")
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
h1 {
  font-family: Verdana;
}

.recommandation {
  animation: fadeInAnimation ease 0.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

.oui-bouton-up {
  background: rgb(66, 114, 30);
  color: white;
  border: rgb(66, 114, 30);
  border-radius: 20px;
  padding: 5px;
  margin: 2px;
  cursor: pointer;
}

.oui-bouton-down,
.non-bouton-down {
  background: rgb(80, 82, 80);
  color: white;
  border: rgb(80, 82, 80);
  border-radius: 20px;
  padding: 5px;
  margin: 2px;
  cursor: pointer;
}

.home {
  height: 100%;
}

.non-bouton-up {
  background: rgb(125, 51, 51);
  color: white;
  border: rgb(125, 51, 51);
  border-radius: 20px;
  padding: 5px;
  margin-left: 5px;
  margin: 2px;
  cursor: pointer;
}
</style>
