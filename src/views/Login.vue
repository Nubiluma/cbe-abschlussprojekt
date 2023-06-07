<template>
  <div class="container">
    <h1>Hello there 👋🏼</h1>
    <form @submit.prevent="handleSignin">
      <div class="user-box">
        <label for="email">eMail Adresse:</label>
        <input
          class="input-email"
          type="text"
          id="email"
          v-model="email"
          required
        />
      </div>
      <div class="user-box">
        <label for="password">Passwort:</label>
        <input
          class="input-pw"
          type="password"
          id="password"
          v-model="password"
          required
        />
      </div>
      <button class="login-btn btn" type="submit">Login</button>
      <button @click="setCurrentUser" class="login-btn btn">
        See who is logged in
      </button>
      <button @click="logout" class="login-btn btn">Logout</button>
      <div class="toast" v-if="toast.toastMsg.length > 0">
        {{ toast.toastMsg }}
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "../supabase";
import { useAuthStore, useToastStore } from "../authStore";
const toast = useToastStore();

const { isLoggedIn } = useAuthStore();

const email = ref("");
const password = ref("");

async function handleSignin() {
  const signInResult = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });

  if (signInResult.error) {
    console.log("Error while login");
    // isLoggedIn.value = false;
  }

  if (signInResult.data.user && signInResult.data.session) {
    // console.log("Erfolgreich eingeloggt");
    toast.showMessage("Du bist erfolgreich eingeloggt");
  } else {
    console.log("Kein Error, aber kein User und keine Session");
  }
}

async function setCurrentUser() {
  const { data, error } = await supabase.auth.getSession();
  console.log(data, error);
}

async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.log(error);
  } else {
    toast.showMessage("Du bist erfolgreich ausgeloggt");
  }
}
</script>

<style scoped>
.btn {
  padding: 1em 2em;
  margin: 1.5em;
  background: var(--clr-purple01);
  color: var(--clr-white);
  border-radius: 40px;
}

h1 {
  margin: 1.5em;
  font-size: 3em;
}

label {
  font-size: 2rem;
}

input {
  display: flex;
  border: 0;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.06);
  margin-bottom: 1.5em;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.input-pw {
  padding: 1.5rem;
}

.input-email {
  padding: 1.5rem;
}
</style>
