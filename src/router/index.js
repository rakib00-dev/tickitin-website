import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import NotFound from "../components/common/NotFound.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/about",
    component: NotFound,
  },
  {
    path: "/pricing",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
