<template>
  <div class="home">
    <body>
      <div class="logo">
        <img id="rotationnage" alt="Vue logo" src="../assets/morbiustv.png" />
      </div>
      <Carousel
        v-if="liked.length"
        :movies="liked"
        title="Movies you can rewatch"
      />
      <Carousel
        v-for="cat in categories"
        :key="cat[0]._id"
        :movies="cat[1]"
        :title="cat[0].name"
      />
    </body>
  </div>
</template>

<script>
import axios from "axios";
import Carousel from "@/components/Carousel.vue";
export default {
  name: "Home",
  components: { Carousel },
  data: function () {
    return {
      categories: [],
      liked: [],
    };
  },
  created: async function () {
    let genres = [];

    try {
      this.liked = (
        await axios.get(process.env.VUE_APP_API + "/movies/liked")
      ).data;
    } catch (error) {
      console.log(error);
    }

    try {
      genres = (await axios.get(process.env.VUE_APP_API + "/genres")).data;
    } catch (error) {
      console.log(error);
    }

    //genres.sort(() => 0.5 - Math.random());
    //genres = genres.slice(0, 5);

    for (const g of genres) {
      let m = [];
      try {
        m = (
          await axios.get(process.env.VUE_APP_API + "/movies/genre/" + g._id)
        ).data;
      } catch (error) {
        console.log(error);
      }
      this.categories.push([g, m]);
    }
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
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.home {
  text-align: center;
  color: white;
  font-size: x-large;
  margin-left: 0;
  margin-right: 0;
}

.logo {
  background-image: url("../assets/mosaique_sombre.png");
  background-repeat: repeat;
  background-size: 700px;
  background-attachment: fixed;
  padding: 100px;
  padding-top: 120px;
}

#rotationnage {
  transition: 1s;
}

#rotationnage:hover {
  transform: rotate(360deg);
  transition: 1s;
}
p {
  text-align: center;
  color: white;
  font-size: medium;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #f15ad3;
  font-style: normal;
  text-decoration: none;
}
a:hover {
  color: #ffbc5e;
  transition: 0.2s;
}

* {
  margin: 0;
  padding: 0;
  border: 0;
}

html {
  font-family: helvetica, arial, sans-serif;
}
</style>
