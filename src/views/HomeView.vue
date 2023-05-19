<template>
  <div class="slides">
    <!-- <div class="current-slide">
      <img src="slide-1.png" class="current-slide-img" />
      <p class="current-slide-text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        officiis voluptatem ut eaque omnis quaerat?
      </p>
    </div> -->
    <Slider></Slider>
    <div class="slides-indicator-bar">- - -</div>
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

<script>
import { useRouter } from "vue-router";
import Slider from "../components/Slider.vue";

export default {
  setup() {
    const router = useRouter();
    const navigateToLogin = () => {
      router.push("/LoginForm");
    };
    return {
      navigateToLogin,
    };
  },
  components: { Slider },
};
</script>

<style scoped>
.btn {
  padding: 0.8em 1em;
}
</style>
