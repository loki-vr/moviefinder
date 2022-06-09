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
      <div class="search"><Searchbar /></div>
    </div>
    <router-view />
  </body>
</template>
<script>
import Searchbar from "@/components/Searchbar.vue";
export default {
  name: "App",
  components: { Searchbar },
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
  background-color: #1c181b;
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
}

.morbiuslogo:hover {
  opacity: 0.7;
  transition: 0.2s;
}
</style>
