import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MoviePage from "../views/MoviePage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:id",
    component: MoviePage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
