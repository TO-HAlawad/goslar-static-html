import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/home.vue";
import AusstattungPreise from "../views/ausstattung-preise.vue";
import OnlineBuchen from "../views/online-buchen.vue";
import Goslar from "../views/goslar.vue";
import Anreise from "../views/anreise.vue";
import Kontakt from "../views/kontakt.vue";
import Impressum from "../views/impressum.vue";

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
      component: AusstattungPreise,
    },
    {
      path: "/online-buchen",
      name: "onlinebuchen",
      component: OnlineBuchen,
    },
    {
      path: "/goslar",
      name: "goslar",
      component: Goslar,
    },
    {
      path: "/anreise",
      name: "anreise",
      component: Anreise,
    },
    {
      path: "/kontakt",
      name: "kontakt",
      component: Kontakt,
    },
    {
      path: "/impressum",
      name: "impressum",
      component: Impressum,
    },
  ],
});

export default router;
