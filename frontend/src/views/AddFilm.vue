<template>
  <div class="addfilm">
    <h1>Ajout de films sur MorbiusTV+</h1>
    <p>Pour ajouter des films :</p>
  </div>
  <ul class="formulaire" align="center">
    <p>Title:</p>
    <input />

    <p>Genre:</p>
    <form>
      <select id="genre_id" name="genre">
        <option value="Choose">Choose</option>
        <option v-for="genre in genres" :key="genre.id" value="genre.name">
          {{ genre.name }}
        </option>
      </select>
    </form>

    <p>Poster:</p>
    <input
      type="file"
      id="poster"
      name="poster"
      accept="image/png, image/jpeg"
      class="image"
    />
    <p>Backdrop:</p>
    <input
      type="file"
      id="backdrop"
      name="backdrop"
      accept="image/png, image/jpeg"
      class="image"
    />

    <p>Overview:</p>
    <input class="overview" />

    <p>Release date :</p>
    <input type="date" class="date" />

    <p>Popularity:</p>
    <input type="number" />
    <p>Average Score:</p>
    <input type="number" />
    <div></div>
    <button>Submit</button>
  </ul>
</template>

<script>
import axios from "axios";
export default {
  name: "AddFilms",
  data: function () {
    return {
      genres: [],
    };
  },
  created() {
    axios
      .get(process.env.VUE_APP_API + "/genres")
      .then((response) => {
        this.genres = response.data;
        console.log(this.genres);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.addfilm {
  text-align: center;
  color: white;
  padding-top: 150px;
  font-size: x-large;
  margin-left: 0;
  margin-right: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.formulaire {
  color: white;
  font-size: medium;
  text-align: center;
  padding: 20px;
}

p {
  text-align: center;
  color: white;
  font-size: medium;
  margin-top: 10px;
}
input {
  background-color: #1c181b;
  border-bottom: 1.5px solid #ffbc5e;
  width: 50%;
  height: 30px;
  font-size: medium;
  color: white;
  padding: 10px;
  text-align: center;
  border-radius: 4px;
  margin: 10px;
}
input:hover {
  font-size: medium;
  padding: 10px;
  border-bottom: 1.5px solid #f15ad3;
  transition: 0.2s;
}

input.overview {
  height: 200px;
  text-align: left;
}

input.date {
  font-family: Arial, Helvetica, sans-serif;
}

input.image {
  width: 90%;
  color: white;
  text-align: center;
  font-size: medium;
  padding: 16px 20px;
  border: none;
  width: 51%;
  height: 30px;
  border-bottom: 1.5px solid #ffbc5e;
  border-radius: 4px;
  background-color: #1c181b;
  margin: 10px;
}
select {
  width: 90%;
  color: white;
  text-align: center;
  font-size: medium;
  padding: 16px 20px;
  border: none;
  width: 51%;
  height: 30px;
  border-bottom: 1.5px solid #ffbc5e;
  border-radius: 4px;
  background-color: #1c181b;
  margin: 10px;
}
select:hover {
  border-bottom: 1.5px solid #f15ad3;
}

input.date {
  background-color: #1c181b;
  border-bottom: 1.5px solid #ffbc5e;
}

button {
  background-color: #1c181b;
  color: white;
  font-size: medium;
  padding: 10px;
  border-radius: 4px;
  border: 1.5px solid #ffbc5e;
  width: 500px;
}
button:hover {
  border: 1.5px solid #f15ad3;
  transition: 0.2s;
  width: 400px;
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
