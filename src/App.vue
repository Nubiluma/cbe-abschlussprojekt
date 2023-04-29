<template>
  <header>
    <h1 class="app-name">What should I draw?</h1>
  </header>
  <main>
    <section>
      <div class="slides">
        <div class="current-slide">
          <img src="@/assets/slide-1.png" class="current-slide-img" />
          <p class="current-slide-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            officiis voluptatem ut eaque omnis quaerat?
          </p>
        </div>
        <div class="slides-indicator-bar">- - -</div>
      </div>
      <form class="login-form">
        <button class="register-in-btn">Registrieren</button>
        <button class="login-btn">Anmelden</button>
      </form>
    </section>
    <section class="generator-section"></section>
  </main>
  <footer>By Tanja & Sandra</footer>
</template>

<style>
*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
}

html {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 10px;
  height: 100%;
}

:root {
  --clr-purple01: #6949ff;
  --clr-purple02: #bfb0ff;
  --clr-yellow: #ffc107;
  --clr-white: #ffffff;
}

body {
  margin: 0;
  height: 100%;
}
</style>

<style scoped>
.app-name {
  text-align: center;
  font-size: 5rem;
}

.slides {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 2rem;
}

.current-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.current-slide-img {
  width: 15rem;
  height: 15rem;
}

.login-form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

section {
  margin-bottom: 5rem;
}

footer {
  height: 5rem;
  width: 100%;
  text-align: center;
  font-size: 2rem;
  background-color: var(--clr-purple01);
  color: var(--clr-white);
}
</style>
