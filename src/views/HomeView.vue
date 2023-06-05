<template>
  <!-- <section class="slides-section"> -->
  <Slides></Slides>
  <!-- </section> -->
  <form class="login-form">
    <button @click="navigateToLogin" class="login-btn btn">Anmelden</button>
    <button @click="navigateToRegister" class="register-in-btn btn">
      Registrieren
    </button>
  </form>

  <section class="how-to-section">
    <HowTo></HowTo>
  </section>
  <section class="generator-section">
    <Generator />
  </section>
  <div class="how-to-tip">
    <span class="how-to-tip-text">
      Gefallen dir die Ergebnisse nicht, kannst du entweder einzelne oder alle
      neu generieren lassen. Klicke auf die Würfel neben dem Ergebnis, um es
      einzeln neu zu generieren!
    </span>
    <img src="idea.png" class="how-to-tip-img" />
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import Slides from "../components/Slides.vue";
import Generator from "../components/Generator.vue";
import HowTo from "./../components/HowTo.vue";
import Account from "../views/Account.vue";

const router = useRouter();

const navigateToLogin = () => {
  router.push("/Login");
};

const navigateToRegister = () => {
  router.push("/Register");
};
</script>

<style scoped>
button {
  margin-bottom: 1em;
}
.login-btn {
  padding: 1.5rem 5rem;
  background-color: var(--clr-purple01);
  border-radius: 0.8em;
  color: var(--clr-white);
  font-size: 2rem;
}

.register-in-btn {
  padding: 1.5rem 5rem;
  background-color: var(--clr-purple02);
  border-radius: 0.8em;
  color: var(--clr-white);
  font-size: 2rem;
  margin-bottom: 1.2em;
}
</style>
