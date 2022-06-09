<template>
  <body>
    <div class="nav">
      <div style="margin: auto">
        <router-link class="nav-link" to="/">
          <div class="morbiuslogo">
            <img
              alt="MorbiusTV logo"
              src="./assets/morbiustv.png"
              height="30"
            />
            MorbiusTV+
          </div>
        </router-link>
      </div>
      <div class="menu">
        <p class="hover-underline-animation">
          <router-link class="nav-link" to="/">Home</router-link>
        </p>
        |
        <p class="hover-underline-animation">
          <router-link class="nav-link" to="/add"> Add films </router-link>
        </p>
      </div>
      <div class="search"><Searchbar v-model="search" /></div>
    </div>
    <router-view />
  </body>
</template>
<script>
import Searchbar from "@/components/Searchbar.vue";

export default {
  name: "App",
  components: { Searchbar },
  watch: {
    search: function () {
      if (this.search == "") {
        this.$router.push(this.basePath);
      } else {
        this.$router.push("/search/" + this.search);
      }
    },
    "$route.fullPath": function () {
      if (!this.$route.fullPath.startsWith("/search")) {
        this.basePath = this.$route.fullPath;
      }
    },
  },
  data() {
    return {
      search: ``,
    };
  },
  created: async function () {
    this.basePath = this.$route.fullPath;
  },
};
</script>
<style scoped>
body {
  text-align: center;
}
.nav {
  text-align: center;
  z-index: 1;
  color: white;
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  background-color: black;
  display: flex;
}

.menu {
  width: 100%;
  margin: auto;
}

.logo {
  text-align: left;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-style: normal;
}

.nav-link:hover {
  text-decoration: none;
  color: #ffbc5e;
  transition: 0.4s;
}

.nav-link.router-link-exact-active {
  color: #f15ad3;
}

.nav-link.router-link-exact-active:hover {
  color: #ffbc5e;
}

.hover-underline-animation {
  display: inline-block;
  position: relative;
  color: white;
}

.hover-underline-animation:after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #ffbc5e;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.search {
  margin: 10px;
  margin-right: 20px;
}

.morbiuslogo {
  margin: 10px;
  color: white;
}

.morbiuslogo:hover {
  opacity: 0.9;
  transition: 0.2s;
}
</style>
