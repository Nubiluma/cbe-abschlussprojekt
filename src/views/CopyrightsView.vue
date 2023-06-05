<template>
  <h1>Copyrights</h1>
  <div class="links-container">
    <a v-for="link in links" :key="link" :href="link.link" target="_blank">
      <img :src="link.image" alt=""
    /></a>
  </div>
</template>

<script setup>
import { copyrights } from "../copyrightLinks.js";

const links = copyrights;
</script>

<style scoped>
h1 {
  margin-block: 10rem 3rem;
  text-align: center;
  font-size: 5rem;
  letter-spacing: 0.25rem;
}

.links-container {
  margin: 5rem auto;
  width: 50%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-content: center;
  justify-items: center;
}

a {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-block: 2rem;
  height: 20rem;
  width: 20rem;
  overflow: hidden;
  border-radius: 100%;
  background-color: var(--clr-light-grey);
}

img {
  height: 20rem;
}
</style>
