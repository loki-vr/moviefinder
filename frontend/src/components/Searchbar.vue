<template>
  <div>
    <input type="text" :value="modelValue" @input="updateValue" />
  </div>
</template>

<script>
export default {
  name: "Searchbar",
  props: {
    modelValue: String,
  },
  methods: {
    updateValue(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
input {
  color: white;
  height: 50px;
  width: 25%;
  position: fixed;
  right: 0;
  top: 0;
  font-size: medium;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", sans-serif;
  background-color: black;
  border-bottom: 1.5px solid #ffbc5e;
  margin-top: 15px;
  margin-right: 10px;
  border-radius: 10px;
  background-image: url("../assets/magnifier1.png");
  background-position: 10px 10px;
  background-repeat: no-repeat;
  background-size: 30px 30px;
  padding-left: 50px;
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
