<template>
  <h2 class="how-to-header">So verwendest du die App</h2>
  <div class="how-to-container">
    <img src="checklist-transparent.png" class="how-to-images" />
    <img src="dice-transparent.png" class="how-to-images" />
    <img src="creativity-transparent.png" class="how-to-images" />
    <span class="how-to-step-icon">1</span>
    <span class="how-to-step-icon">2</span>
    <span class="how-to-step-icon">3</span>
    <span class="how-to-text"
      >Wähle die Kategorien aus, die der Zufallsgenerator berücksichtigen
      soll</span
    >
    <span class="how-to-text"
      >Klicke auf "Generieren", damit du deine Challenge erhältst</span
    >
    <span class="how-to-text"
      >Nimm die Challenge an, wenn sie dir gefällt, oder würfele die Ergebnisse
      neu</span
    >
  </div>
</template>

<script setup>
// export default {
//   name: "HowTo",
// };
</script>

<style scoped>
.how-to-header {
  font-size: 4rem;
  margin-left: 2rem;
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

.how-to-images {
  width: 75%;
}
</style>
