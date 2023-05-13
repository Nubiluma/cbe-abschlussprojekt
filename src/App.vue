<template>
  <header>
    <h1 class="app-name">What should I draw?</h1>
  </header>
  <main>
    <!-- <section>
      <div class="slides">
        <div class="current-slide">
          <img src="slide-1.png" class="current-slide-img" />
          <p class="current-slide-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            officiis voluptatem ut eaque omnis quaerat?
          </p>
        </div>
        <div class="slides-indicator-bar">- - -</div>
      </div>
      <form class="login-form">
        <button class="register-in-btn">Registrieren</button>
        <button class="login-btn">Anmelden</button>
      </form>
    </section>
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
    </div> -->
    <RouterView></RouterView>
  </main>
  <footer>By Tanja & Sandra</footer>
</template>

<script setup>
import HowTo from "./components/HowTo.vue";
import Generator from "./components/Generator.vue";
import LoginForm from "./components/LoginForm.vue";
</script>

<style scoped>
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
