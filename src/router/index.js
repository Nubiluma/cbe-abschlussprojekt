import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";

// const routes = [
//   // {
//   //   path: "/",
//   //   name: "home",
//   //   component: HomeView,
//   // },
//   // {
//   //   path: "/",
//   //   name: "about",
//   //   component: AboutView,
//   // },
// ];

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes,
// });

// export default router;

// 1. Define route components.
// These can be imported from other files
// const Home = { template: "<div>Home</div>" };
// const About = { template: "<div>About</div>" };

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
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
