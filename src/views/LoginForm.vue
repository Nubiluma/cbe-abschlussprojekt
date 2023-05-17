<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Benutzername:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div>
        <label for="password">Passwort:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Anmelden</button>
    </form>
    <p>
      Noch kein Konto? <router-link to="/register">Registrieren</router-link>
    </p>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const username = ref("");
    const password = ref("");
    const router = useRouter();

    const login = () => {
      // Füge hier die Logik zur Authentifizierung hinzu
      // Hier ein Beispiel, um die Eingaben in der Konsole auszugeben:
      console.log("Benutzername:", username.value);
      console.log("Passwort:", password.value);

      // Navigiere zur gewünschten Seite (z. B. Dashboard) nach dem erfolgreichen Login
      router.push("/dashboard");
    };

    return {
      username,
      password,
      login,
    };
  },
};
</script>

<style>
label {
  font-size: 2rem;
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
