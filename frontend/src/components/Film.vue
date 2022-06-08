
<template>

  <div class="movies">
    <router-link class = "poster" :to="{path: '/' + movie.id}">
       <img style="height: 200px"
            class="img_img"
            :src="`https://image.tmdb.org/t/p/w200${movie.poster_path}`"
          />
    </router-link>
  </div>
</template>

<script>

export default {
  name: "Film",
  props: {movie:Object,},
  methods: {
      concatener: function (url) {
      return "https://image.tmdb.org/t/p/w200" + url.backdrop_path;
    },}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.movies {
  text-align: center;
  color : white;
  margin: 5px;
  margin-bottom:20px;
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

.title {
  color: #f15ad3;
  font-style: normal;
  text-decoration: none;
}
.title:hover {
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

/* Présentation des films */ 
.img__wrap {
  position: relative;
  height: 450px;
  width: 300px;
}

.img__description_layer {
  position: absolute;
  top: 0;
  font-size: medium;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 5px;
  background: black;
  color: #fff;
  visibility: hidden;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s, visibility 0.2s;
}

.img__description.line_limit {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.img__wrap:hover .img__description_layer {
  visibility: visible;
  opacity: 0.7;
}

.img__description {
  transition: 0.2s;
  transform: translateY(1em);
  text-decoration: none;
  color:white;
}

.img__wrap:hover .img__description {
  transform: translateY(0);
  color:white;

}

/* lien vers fiche des films */
.poster{
  font-size:larger;
  color: white;
  text-decoration: none;
}

.poster:hover{
  color:#ffbc5e;
  opacity: 1;
}

/* notation */
.vote {
  text-align:center;
  font-size:medium;
  margin-top:10px;
}
</style>
