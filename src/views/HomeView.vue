<template>
  <section class="slides-section">
    <Slides></Slides>
  </section>
  <form class="login-form">
    <button @click="navigateToLogin" class="login-btn btn">Anmelden</button>
    <button class="register-in-btn btn">Registrieren</button>
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

const router = useRouter();

const navigateToLogin = () => {
  router.push("/LoginForm");
};
</script>

<style></style>
