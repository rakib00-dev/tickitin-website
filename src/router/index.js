import { createWebHistory, createRouter } from "vue-router";
import AboutPage from "../pages/AboutPage.vue";
import DicrectionHomePage from "../pages/DicrectionHomePage.vue";
import ContactUsPage from "../pages/ContactUsPage.vue";
import TermsOfServicePage from "../pages/TermsOfServicePage.vue";

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
    component: ContactUsPage,
  },
  {
    path: "/terms-of-service",
    component: TermsOfServicePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
