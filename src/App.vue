<template>
  <header>
    <h1 class="app-name">What should I draw?</h1>
  </header>
  <main>
    <section>
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
    <div class="how-to-tip">
      <span class="how-to-tip-text">
        Gefallen dir die Ergebnisse nicht, kannst du entweder einzelne oder alle
        neu generieren lassen. Klicke auf die Würfel neben dem Ergebnis, um es
        einzeln neu zu generieren!
      </span>
      <img src="idea.png" class="how-to-tip-img" />
    </div>
    <section class="generator-section"></section>
  </main>
  <footer>By Tanja & Sandra</footer>
</template>

<script setup>
import HowTo from "./components/HowTo.vue";
</script>

<style></style>
