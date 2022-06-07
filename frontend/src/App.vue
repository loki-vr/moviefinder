<template>
  <div class="nav">
    <p class="hover-underline-animation">
      <router-link class="nav-link" to="/">Home</router-link>
    </p>
    |
    <p class="hover-underline-animation">
      <router-link class="nav-link" to="/counter">Counter</router-link>
    </p>
    |
    <p class="hover-underline-animation">
      <router-link class="nav-link" to="/users">Users</router-link>
    </p>
    |
    <p class="hover-underline-animation">
      <router-link class="nav-link" to="/about">About</router-link>
    </p>
  </div>
  <router-view />
</template>

<style scoped>
.nav {
  text-align: center;
  color: white;
  padding: 30px;
  top: 0;
  position: fixed;
  width: 100%;
  background-color: #1c181b;
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
  color: #0087ca;
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
