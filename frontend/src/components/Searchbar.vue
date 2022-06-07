<template>
  <div class="searchbar"></div>
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
  color: black;
  font-size: medium;
}

input:hover {
  font-size: larger;

  transition: 0.2s;
}

input:after {
  font-size: medium;
  transition: 0.2s;
}
input:hover:after {
  font-size: medium;
  transition: transform 0.25s ease-out;
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
