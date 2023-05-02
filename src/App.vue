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
    <section class="how-to-section">
      <h2 class="how-to-header">So verwendest du die App</h2>
      <div class="how-to-container">
        <img src="@/assets/checklist-transparent.png" class="how-to-images" />
        <img src="@/assets/dice-transparent.png" class="how-to-images" />
        <img src="@/assets/creativity-transparent.png" class="how-to-images" />
        <span class="how-to-step-icon">1</span>
        <span class="how-to-step-icon">2</span>
        <span class="how-to-step-icon">3</span>
        <span class="how-to-text"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
          ducimus?</span
        >
        <span class="how-to-text"
          >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, odit
          ab.</span
        >
        <span class="how-to-text"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          omnis voluptates eveniet?</span
        >
        <span class="how-to-explainations"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          mollitia ipsum eius.</span
        >
        <span class="how-to-explainations"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          mollitia ipsum eius.</span
        >
        <span class="how-to-explainations"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          mollitia ipsum eius.</span
        >
      </div>
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
  --shadow-clr: #535353;
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

.how-to-section {
  padding-block: 10rem;
  background: url("@/assets/paint-stroke-background.png") no-repeat center 80%;
  background-size: contain;
}

.how-to-header {
  font-size: 4rem;
}

.how-to-container {
  padding-block: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;

  font-size: 2rem;
  text-align: center;
}

.how-to-step-icon {
  background-color: var(--clr-purple01);
  color: var(--clr-white);
  font-size: 3rem;
  padding: 1rem 2rem;
  margin-block: 1rem;
  border-radius: 100%;
}

.how-to-text {
  width: 45ch;
  margin-top: 1rem;
}

.how-to-explainations {
  margin-top: 4rem;
  padding: 1rem;
  background-color: var(--clr-white);
  border-radius: 1rem;
  box-shadow: 0.25rem 0.25rem 0.5rem var(--shadow-clr);
  width: 35rem;
  height: 8rem;
  font-size: 1.5rem;
}

.how-to-images {
  width: 75%;
}

section {
  margin-bottom: 15rem;
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
