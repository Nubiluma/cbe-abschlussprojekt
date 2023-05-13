<template>
  <div class="container">
    <h1>Hello There 👋🏼</h1>
    <div id="alert" v-if="alert">{{ alert }}</div>
    <form @submit.prevent="login">
      <label for="email"> eMail</label>
      <input
        class="email-input"
        type="text"
        v-model="input.email"
        placeholder="eMail"
        required
      />
      <label for="password">Password</label>
      <i class="icon" @click="hidePassword = !hidePassword"></i>
      <input
        class="pw-input"
        type="password"
        id="password"
        v-model="input.password"
        placeholder="**********"
        required
      />
    </form>
  </div>
</template>

<script setup></script>

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
