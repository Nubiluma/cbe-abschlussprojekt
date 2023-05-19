<template>
  <div>
    <SliderVue></SliderVue>
  </div>
  <form class="login-form">
    <button @click="navigateToLogin" class="login-btn btn">Anmelden</button>
    <button class="register-in-btn btn">Registrieren</button>
  </form>
  <section class="how-to-section">
    <HowTo></HowTo>
  </section>
  <section class="generator-section">
    <Generator></Generator>
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
import SliderVue from "../components/Slides.vue";

const router = useRouter();

const navigateToLogin = () => {
  router.push("/LoginForm");
};

import { ref, computed } from "vue";
</script>

<style></style>
