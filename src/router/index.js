import { createWebHistory, createRouter } from "vue-router";
import AboutPage from "../pages/AboutPage.vue";
import DicrectionHomePage from "../pages/DicrectionHomePage.vue";
import ContactUs from "../pages/ContactUs.vue";

const routes = [
  {
    path: "/",
    component: DicrectionHomePage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/contact-us",
    component: ContactUs,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
