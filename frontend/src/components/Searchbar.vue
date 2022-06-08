<template>
  <div class="searchbar" placeholder="Search"></div>
  <input />
</template>

<script>
export default {
  name: "Searchbar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.searchbar {
  text-align: center;
  color: white;
  font-size: x-large;
}

input {
  color: white;
  height: 50px;
  width: 300px;
  padding-left: 45px;
  font-size: medium;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", sans-serif;
  background-color: #3e313c;
  border-bottom: 1.5px solid #ffbc5e;
  margin: 2%;
  border-radius: 10px;
  background-image: url("../assets/magnifier1.png");
  background-position: 10px 10px;
  background-repeat: no-repeat;
  background-size: 30px 30px;
}

input:hover {
  border-bottom: 1.5px solid #f15ad3;
  background-image: url("../assets/magnifier2.png");
  transition: 0.2s;
}

input:hover:after {
  font-size: medium;
  transition: transform 0.25s ease-out;
}

input:after {
  font-size: medium;
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
