import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/home.vue";

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
      component: () => import("../views/ausstattung-preise.vue"),
    },
    {
      path: "/online-buchen",
      name: "onlinebuchen",
      component: () => import("../views/online-buchen.vue"),
    },
    {
      path: "/goslar",
      name: "goslar",
      component: () => import("../views/goslar.vue"),
    },
    {
      path: "/anreise",
      name: "anreise",
      component: () => import("../views/anreise.vue"),
    },
    {
      path: "/kontakt",
      name: "kontakt",
      component: () => import("../views/kontakt.vue"),
    },
    {
      path: "/impressum",
      name: "impressum",
      component: () => import("../views/impressum.vue"),
    },
  ],
});

export default router;
