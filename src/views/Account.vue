<template>
  <h1>Sie sind eingeloggt als {{ account.data.session.user.email }}</h1>
  <section class="challenges-section">
    <h2>Deine Challenges:</h2>
    <p class="notice" v-if="store.challenges.length === 0">
      Du hast noch keine Challenges angenommen. Lass dir welche vom Generator
      erstellen!
    </p>
    <div v-if="store.challenges.length > 0" class="challenges-container">
      <p class="head">
        <span>Stil</span>
        <span>Motiv</span>
        <span>Hintergrund</span>
        <span>Genre</span>
        <span>Farbgebung</span>
        <span>Technik</span>
      </p>
      <p
        class="challenge"
        v-for="challenge of store.challenges"
        :key="challenge"
      >
        <span class="challenge-value" v-for="value in challenge" :key="value">{{
          value
        }}</span>
      </p>
    </div>
  </section>
</template>

<script setup>
import { supabase } from "../supabase";
import { ref } from "vue";
import { useAppStore } from "../authStore";

const store = useAppStore();

const account = ref();
getSession();

async function getSession() {
  account.value = await supabase.auth.getSession();
}
</script>

<style scoped>
h1 {
  padding-left: 1rem;
}

h2 {
  margin-block: 2rem 1rem;
  font-size: 3rem;
}

.notice {
  margin-block: 3rem;
  font-size: 2rem;
  color: rgb(91, 91, 91);
  font-style: italic;
}

.challenges-container {
  margin-block: 5rem;
}

.head {
  margin-block: 1rem;
  font-size: 2.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;
  gap: 1rem;
  background-color: var(--clr-purple02);
}

.challenge {
  margin-block: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;
  gap: 1rem;
}
.challenge-value {
  font-size: 2rem;
  color: rgb(70, 70, 70);
}
</style>
