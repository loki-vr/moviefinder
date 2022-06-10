<template>
  <router-link class="link" :to="link">
    <h1 class="title">{{ title }}</h1>
  </router-link>
  <Carousel
    :autoplay="2000"
    :itemsToShow="7"
    :wrapAround="true"
    :mouseDrag="false"
    :pauseAutoplayOnHover="true"
  >
    <Slide v-for="movie in movies" :key="movie._id">
      <div class="carousel__item">
        <Movies :movie="movie" :width="200" />
      </div>
    </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import Movies from "../components/Movies";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Autoplay",
  components: {
    Carousel,
    Slide,
    Movies,
    Navigation,
  },

  props: { movies: [Object], title: String, link: String },
});
</script>

<style scoped>
.title {
  text-align: left;
  margin-bottom: 0%;
}

.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.1);
}

.link {
  color: white;
  text-decoration: none;
}

h1 {
  font-size: larger;
  margin-left: 20px;
}
</style>
