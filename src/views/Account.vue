<template>
  <p>Sie sind eingeloggt als {{ account.data.session.user.email }}</p>
</template>

<script setup>
import { supabase } from "../supabase";
import { ref } from "vue";

const account = ref();
getSession();

async function getSession() {
  account.value = await supabase.auth.getSession();
}
</script>
