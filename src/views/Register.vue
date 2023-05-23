<template>
  <div>
    <h1>Registration</h1>
    <form @submit.prevent="register">
      <label for="email">Email:</label>
      <input type="email" v-model="email" required />
      <label for="password">Password:</label>
      <input type="password" v-model="password" required />
      <button type="submit">Register</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import { ref } from "vue";

import { createClient } from "@supabase/supabase-js";

const email = ref("");
const password = ref("");
const error = ref("");

// const store = useStore();

async function register() {
  try {
    const { user, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    });

    if (error) {
      throw new Error(error.message);
    }

    store.user = user;
    // Hier kannst du weitere Aktionen nach erfolgreicher Registrierung ausführen, z.B. Weiterleitung zur Hauptseite.
  } catch (error) {
    console.error(error);
    error.value = error.message;
  }
}
</script>
