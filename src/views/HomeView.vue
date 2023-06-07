<template>
  <Slides></Slides>
  <form class="login-form">
    <button @click="navigateToLogin" class="login-btn buttons">Anmelden</button>
    <button @click="navigateToRegister" class="register-btn buttons">
      Registrieren
    </button>
    <RouterLink class="account-link" to="/Account"
      >→ zu den Challenges</RouterLink
    >
  </form>
  <section class="how-to-section">
    <HowTo></HowTo>
  </section>
  <section class="generator-section">
    <Generator />
  </section>
  <RouterView />
</template>

<script setup>
import { useRouter } from "vue-router";
import Slides from "../components/Slides.vue";
import Generator from "../components/Generator.vue";
import HowTo from "./../components/HowTo.vue";

const router = useRouter();

const navigateToLogin = () => {
  router.push("/Login");
};

const navigateToRegister = () => {
  router.push("/Register");
};
</script>

<style scoped>
.account-link {
  font-size: 2.5rem;
  text-decoration: none;
  color: black;
}

.login-btn {
  display: block;
  _height: 3em;
  background-color: var(--clr-purple01);
  color: var(--clr-white);
  width: 35rem;
  font-size: 3rem;
}

.register-btn {
  display: block;
  _height: 3em;
  background-color: var(--clr-purple02);
  color: var(--clr-white);
  width: 35rem;
  font-size: 3rem;
  margin-block: 1.5rem;
}

.login-form {
  margin-block: 5rem;
}
</style>
