import { createWebHistory, createRouter } from "vue-router";
import AboutPage from "../pages/AboutPage.vue";
import NotFound from "../components/common/NotFound.vue";

const routes = [
  {
    path: "/",
    component: AboutPage,
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
