import { createWebHistory, createRouter } from "vue-router";
import AboutPage from "../pages/AboutPage.vue";
import DicrectionHomePage from "../pages/DicrectionHomePage.vue";
import ContactUsPage from "../pages/ContactUsPage.vue";
import TermsOfServicePage from "../pages/TermsOfServicePage.vue";

const routes = [
  {
    path: "/",
    component: DicrectionHomePage,
    meta: {
      title: "Welcome to Tickitin",
      description:
        "Tickitin terms of service explain rules for accounts, tickets, payments, and safety, so you know what to expect. Read now and use Tickitin with ease.",
      keywords: "",
    },
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage,
    meta: {
      title: "About Us | Tickitin ",
      description:
        "Need help with tickets, orders, or general questions? The Tickitin Support team is available every day to assist with ticket access, billing issues, event changes, and more. Reach out by email for fast, reliable help most inquiries are answered within 24 hours.",
      keywords: "about, tickitin, help, information",
    },
  },
  {
    path: "/contact-us",
    name: "Contact",
    component: ContactUsPage,
  },
  {
    path: "/terms-of-service",
    component: TermsOfServicePage,
    name: "Terms",
    meta: {
      title: "Terms of Service | Tickitin",
      description:
        "Tickitin terms of service explain rules for accounts, tickets, payments, and safety, so you know what to expect. Read now and use Tickitin with ease.",
      keywords: "tickitin, terms, legal, tos",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to) => {
  const head = document.head;

  if (to.meta.title) document.title = to.meta.title;

  let desc = head.querySelector('meta[name="description"]');
  if (!desc) {
    desc = document.createElement("meta");
    desc.setAttribute("name", "description");
    head.appendChild(desc);
  }
  desc.setAttribute("content", to.meta.description || "");

  let keywords = head.querySelector('meta[name="keywords"]');
  if (!keywords) {
    keywords = document.createElement("meta");
    keywords.setAttribute("name", "keywords");
    head.appendChild(keywords);
  }
  keywords.setAttribute("content", to.meta.keywords || "");
});

export default router;
