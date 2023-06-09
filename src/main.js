import { createApp } from "vue";
import App from "./App.vue";
import { Transition } from "vue";

import router from "./router";
import { pinia } from "./authStore";

import "./style.css";

const app = createApp(App);
app.component("Transition", Transition);
app.use(router);
app.use(pinia);
app.mount("#app");
