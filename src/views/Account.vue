<template>
  <h1>Sie sind eingeloggt als {{ account.data.session.user.email }}</h1>
  <p v-for="challenge of store.challenges" :key="challenge">
    <span v-if="challenge.stil">{{ challenge.stil }}</span
    ><span>{{ challenge.motiv }}</span
    ><span>{{ challenge.hintergrund }}</span
    ><span>{{ challenge.genre }}</span
    ><span>{{ challenge.farbgebung }}</span
    >{{ challenge.farbgebung }}<span>{{ challenge.technik }}</span>
  </p>
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
