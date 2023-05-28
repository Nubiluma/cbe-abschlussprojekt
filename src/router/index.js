import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CardView from "../components/Card.vue";
import HowTo from "../components/HowTo.vue";
import LoginForm from "../views/LoginForm.vue";
import Register from "../views/Register.vue";
import MaterialSeclection from "../components/MaterialSelection.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/AboutView", component: AboutView },
  { path: "/CardView", component: CardView },
  { path: "/HowTo", component: HowTo },
  { path: "/LoginForm", component: LoginForm },
  { path: "/MaterialSeclection", component: MaterialSeclection },
  { path: "/Register", component: Register },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

export default router;
