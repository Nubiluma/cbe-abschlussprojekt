<template>
  <header class="app-header">
    <h1 class="app-name">What should I draw?</h1>
    <img src="paint-stroke.png" class="header-bg" />
  </header>
  <main>
    <RouterView />
    <div class="toast" v-if="store.toastMsg.length > 0">
      {{ store.toastMsg }}
    </div>
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
      <a href="https://github.com/Nubiluma/cbe-abschlussprojekt" target="_blank"
        ><img class="icon" src="github.png" alt="github icon"
      /></a>
    </div>
    <div class="link-container">
      <span></span>
      <button @click="navigateToCopyrights" class="copyrights-link">
        - Copyrights -
      </button>
      <div class="profile">
        <RouterLink to="/Account"
          ><img class="icon" src="user.png" alt="user profile"
        /></RouterLink>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useToastStore } from "./authStore";

const router = useRouter();
const store = useToastStore();

const navigateToCopyrights = () => {
  router.push("/Copyrights");
};
</script>

<style scoped>
.icon {
  height: 4rem;
  cursor: pointer;
  margin-top: 1rem;
}

a {
  margin-inline: 1rem;
}

.link-container {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  width: 100%;
}

.profile {
  _position: fixed;
  _bottom: 1rem;
  _right: 1rem;
  _width: 4rem;
  display: flex;
  justify-content: end;
}

.toast {
  font-size: 3rem;
  text-align: center;
  color: white;
  font-weight: bold;
  padding: 1em;
  border-radius: 2rem 0 0 2rem;
  position: fixed;
  top: 3rem;
  right: 0;
  background-color: var(--clr-light-green);
}
</style>
