import { createWebHistory, createRouter } from "vue-router";
import AboutPage from "../pages/AboutPage.vue";
import DicrectionHomePage from "../pages/DicrectionHomePage.vue";
import ContactUsPage from "../pages/ContactUsPage.vue";
import TermsOfServicePage from "../pages/TermsOfServicePage.vue";
import PrivacyPolicy from "../pages/PrivacyPolicy.vue";
import DeliveryAccessPolicy from "../pages/DeliveryAccessPolicy.vue";
import PaymentSecurityPolicy from "../pages/PaymentSecurityPolicy.vue";
import RefundCancellationPolicy from "../pages/RefundCancellationPolicy.vue";
import CustomerReviewPage from "../pages/CustomerReviewPage.vue";

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
  {
    path: "/privacy-policy",
    component: PrivacyPolicy,
    name: "Privacy",
    meta: {
      title: "Privacy and Policy | Tickitin",
      description:
        "Tickitin Privacy and Policy explain rules for accounts, tickets, payments, and safety, so you know what to expect. Read now and use Tickitin with ease.",
      keywords: "Privacy, Policy, tickitin, terms",
    },
  },
  {
    path: "/delivery-access-policy",
    component: DeliveryAccessPolicy,
    name: "DeliveryAccess",
    meta: {
      title: "Delivery Access Policy | Tickitin",
      description:
        "Tickitin Delivery Access Policy explain rules for accounts, tickets, payments, and safety, so you know what to expect. Read now and use Tickitin with ease.",
      keywords: "Privacy, Policy, tickitin, terms",
    },
  },
  {
    path: "/payment-security-policy",
    component: PaymentSecurityPolicy,
    name: "PaymentSecurity",
    meta: {
      title: "Payment Security Policy | Tickitin",
      description:
        "Tickitin Payment Security Policy explain rules for accounts, tickets, payments, and safety, so you know what to expect. Read now and use Tickitin with ease.",
      keywords: "Privacy, Policy, tickitin, terms",
    },
  },
  {
    path: "/refund-cancellation-policy",
    component: RefundCancellationPolicy,
    name: "RefundCancellation",
    meta: {
      title: "Refund Cancellation Policy | Tickitin",
      description:
        "Tickitin Refund Cancellation Policy explain rules for accounts, tickets, payments, and safety, so you know what to expect. Read now and use Tickitin with ease.",
      keywords: "Privacy, Policy, tickitin, terms",
    },
  },
  {
    path: "/customer-review",
    component: CustomerReviewPage,
    name: "CustomerReviewPage",
    meta: {
      title: "Tickitin Customer Review | Tickitin",
      description:
        "Tickitin Tickitin Customer Review explain what our customer talks about it, so you know what to expect. Read now and use Tickitin with ease.",
      keywords: "Tickitin Customer Review, testimonials, tickitin",
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
