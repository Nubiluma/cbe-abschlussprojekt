<template>
  <div class="container">
    <h1>Hello there 👋🏼</h1>
    <form @submit.prevent="handleSignin">
      <div>
        <label for="email">eMail Adresse:</label>
        <input
          class="input-email"
          type="text"
          id="email"
          v-model="email"
          required
        />
      </div>
      <div>
        <label for="password">Passwort:</label>
        <input
          class="input-pw"
          type="password"
          id="password"
          v-model="password"
          required
        />
      </div>
      <button class="login-btn btn" type="submit">Anmelden</button>
    </form>
    <p>
      Noch kein Konto? <router-link to="/register">Registrieren</router-link>
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { createClient } from "@supabase/supabase-js";

const email = ref("");
const password = ref("");

const handleSignin = async () => {
  try {
    const { error } = await supabase.auth.signIn({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
  } catch (error) {
    alert(error.error_description || error.message);
    return {
      email,
      password,
      handleSignin,
    };
  }
};
</script>

<style scoped>
.btn {
  padding: 1em 2em;
  background: var(--clr-purple01);
  color: var(--clr-white);
  border-radius: 40px;
}

.container {
  display: flex;
  padding: 1.5em;
}

h1 {
  margin-bottom: 1em;
  font-size: 3em;
}

label {
  font-size: 2rem;
}

input {
  padding: 10px;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.pw-input {
  padding: 1.5rem 3rem;
}
</style>
