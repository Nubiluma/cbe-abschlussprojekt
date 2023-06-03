<template>
  <header class="app-header">
    <h1 class="app-name">What should I draw?</h1>
    <img src="paint-stroke.png" class="header-bg" />
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <p class="credits">App by Tanja & Sandra</p>
    <div class="link-icons-container">
      <a href="./">
        <img class="icon" src="home.png" alt="home icon" />
      </a>

      <a href="https://www.coding-bootcamps.eu/">
        <img
          class="icon"
          src="cbe-icon.png"
          alt="coding bootcamps europe icon"
        />
      </a>
      <a href="https://github.com/Nubiluma/cbe-abschlussprojekt"
        ><img class="icon" src="github.png" alt="github icon"
      /></a>
    </div>
    <button @click="navigateToCopyrights" class="copyrights-link">
      - Copyrights -
    </button>
  </footer>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const navigateToCopyrights = () => {
  router.push("/Copyrights");
};
</script>

<style scoped>
.icon {
  height: 4rem;
  cursor: pointer;
  margin-block: 1.25rem 0.25rem;
}

a {
  margin-inline: 1rem;
}
</style>
