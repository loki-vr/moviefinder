<template>
  <Carousel
    :autoplay="2000"
    :itemsToShow="4"
    :wrapAround="true"
    :mouseDrag="false"
    :pauseAutoplayOnHover="true"
  >
    <Slide v-for="movie in movies" :key="movie._id">
      <div class="carousel__item">
        <Miniature :movie="movie" :width="200" />
      </div>
    </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import Miniature from "../components/Miniature";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "MiniCarousel",
  components: {
    Carousel,
    Slide,
    Miniature,
    Navigation,
  },

  props: { movies: [Object] },
});
</script>
