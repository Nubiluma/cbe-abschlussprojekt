<template>
  <header>
    <h1 class="app-name">What should I draw?</h1>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>By Tanja & Sandra</footer>
</template>

<script setup>
import Card from "./components/Card.vue";
import MaterialSelection from "./components/MaterialSelection.vue";
import HomeView from "./views/HomeView.vue";
</script>

<style>
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
