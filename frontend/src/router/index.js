import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MoviePage from "../views/MoviePage.vue";
import AddFilm from "../views/AddFilm.vue";
import Search from "../views/Search.vue";

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
  {
    path: "/search/:search",
    component: Search,
  },
  { path: "/add", component: AddFilm },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
