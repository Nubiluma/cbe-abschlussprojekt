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
      <button class="login-btn btn">Registrieren</button>
      <button @click="setCurrentUser" class="login-btn btn">
        See who is logged in
      </button>
      <button @click="logout" class="login-btn btn">Logout</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "../supabase";
import { useAuthStore } from "../authStore";
import router from "../router";

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
    isLoggedIn.value = false;
  }

  if (signInResult.data.user && signInResult.data.session) {
    console.log("Erfolgreich eingeloggt");
    isLoggedIn.value = true;
  } else {
    console.log("Kein Error, aber kein User und keine Session");
    isLoggedIn.value = false;
  }
}

// async function seeAccountPage() {
//   router.push("../views/Account.vue");
// }

async function setCurrentUser() {
  const localUser = await supabase.auth.getSession();
  console.log(localUser);
}

async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.log(error);
  } else {
    console.log("Logout was successful");
  }
}
</script>

<style scoped>
.container {
  display: flex;
  padding: 2.5em;
}
.btn {
  padding: 1em 2em;
  background: var(--clr-purple01);
  color: var(--clr-white);
  border-radius: 40px;
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
