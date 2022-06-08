<template>
  <div class="nav">
    <div  style="margin: auto;">
    <router-link class="nav-link" to="/">
    <img
      alt="MorbiusTV logo"
      src="./assets/morbiustv.png"
      height="30"
      align="left"
    />
    </router-link>
    </div>
    <div style="text-align: center; width: 100%; margin: auto;">
    <p class="hover-underline-animation">
      <router-link class="nav-link" to="/">Home</router-link>
    </p>
    |
    <p class="hover-underline-animation">
      <router-link class="nav-link" to="/add"> Add films </router-link>
    </p>
    </div>
  </div>
  <router-view />
</template>

<style scoped>
.nav {
  text-align: center;
  z-index:1;
  color: white;
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  background-color: #1c181b;
  display: flex;
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
</style>
