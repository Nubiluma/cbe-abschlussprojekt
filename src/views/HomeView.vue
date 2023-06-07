<template>
  <Slides></Slides>
  <form class="login-form">
    <button @click="navigateToRegister" class="register-btn">
      Registrieren
    </button>
    <button @click="navigateToLogin" class="login-btn">Anmelden</button>
    <RouterLink class="account-link" to="/Account"
      >zu den Challenges</RouterLink
    >
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
  font-size: 1.5rem;
}

.login-btn {
  display: block;
  width: 13em;
  height: 3em;
  background-color: var(--clr-purple01);
  border-radius: 0.8em;
  color: var(--clr-white);
  font-size: 2rem;
}

.register-btn {
  display: block;
  width: 13em;
  height: 3em;
  background-color: var(--clr-purple02);
  border-radius: 0.8em;
  color: var(--clr-white);
  font-size: 2rem;
  margin-bottom: 1.5em;
}
</style>
