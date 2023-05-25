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

<script setup>
import { ref } from "vue";
import { supabase } from "../supabase";

const email = ref("");
const password = ref("");
const error = ref("");

// const store = use store();

async function register() {
  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
  });
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
}
</script>
