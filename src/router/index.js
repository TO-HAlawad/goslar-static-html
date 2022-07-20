import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/ausstattung-preise",
      name: "ausstattung & preise",
      component: () => import("../views/AusstattungPreise.vue"),
    },
    {
      path: "/online-buchen",
      name: "onlinebuchen",
      component: () => import("../views/Onlinebuchen.vue"),
    },
    {
      path: "/goslar",
      name: "goslar",
      component: () => import("../views/Goslar.vue"),
    },
    {
      path: "/anreise",
      name: "anreise",
      component: () => import("../views/Anreise.vue"),
    },
    {
      path: "/kontakt",
      name: "kontakt",
      component: () => import("../views/Kontakt.vue"),
    },
    {
      path: "/impressum",
      name: "impressum",
      component: () => import("../views/Impressum.vue"),
    },
  ],
});

export default router;
