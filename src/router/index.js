import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CardView from "../components/Card.vue";
import HowTo from "../components/HowTo.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import MaterialSeclection from "../components/MaterialSelection.vue";
import Unauthorized from "../views/Unauthorized.vue";

import { supabase } from "../supabase";
import CopyrightsView from "../views/CopyrightsView.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: HomeView },
    { path: "/AboutView", component: AboutView },
    { path: "/CardView", component: CardView },
    { path: "/HowTo", component: HowTo },
    { path: "/Login", name: "Login", component: Login },
    { path: "/Register", name: "Register", component: Register },
    { path: "/Unauthorized", name: "Unauthorized", component: Unauthorized },
    { path: "/MaterialSeclection", component: MaterialSeclection },
    {
      path: "/Account",
      name: "Account",
      component: () => import("../views/Account.vue"),
      meta: { requiresAuth: true },
    },
    { path: "/Copyrights", component: CopyrightsView },
  ],
});

// getUser
async function getUser(next) {
  const localUser = await supabase.auth.getSession();
  // wenn keine aktive Session
  if (localUser.data.session == null) {
    next("/unauthorized");
  } else {
    next();
  }
}

// auth
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    getUser(next);
  } else {
    next();
  }
});

export default router;
