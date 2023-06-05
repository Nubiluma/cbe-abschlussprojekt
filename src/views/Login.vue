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
    </form>
  </div>
</template>

<script setup>
import { supabase } from "../supabase";

const handleSignin = async (event) => {
  const { email, password } = event.target.elements;
  console.log(email.value, password.value);

  const { user, session, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  debugger;
  if (error) {
    setLMsg(error.message);
  } else {
    setLMsg("Login successfully");
    setUser(data.user);
    setSession(data.session);
    console.log(data.session);
  }
};
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
