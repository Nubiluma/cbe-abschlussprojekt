<template>
  <h2>What should I draw?</h2>
  <section class="selection-section">
    <MaterialSelection
      title="Ausklappen, um deine gewünschten Materialien zu wählen"
      :media="selectionMedium"
      :tools="selectionTools"
    ></MaterialSelection>
  </section>
  <section class="generator-wrapper">
    <div class="categories-container">
      <span class="category-icon style-category"><p>Stil</p></span>
      <span class="category-icon theme-category"><p>Thema</p></span>
      <span class="category-icon genre-category"><p>Genre</p></span>
      <span class="category-icon technique-category"><p>Technik</p></span>
      <span class="category-icon coloration-category"><p>Farbgebung</p></span>
      <span class="category-icon character-category"
        ><p>Character-Design</p></span
      >
    </div>
    <div class="result-part">
      <div class="challenge-text-container"></div>
      <div class="buttons-container">
        <button class="generate-btn">Generieren</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import MaterialSelection from "./MaterialSelection.vue";

const selectionMedium = [
  { text: "Leinwand", id: "canvas" },
  { text: "Papier", id: "paper" },
  { text: "Aquarell-Papier", id: "aquarel-paper" },
  { text: "Digitales Medium", id: "digital" },
];

const selectionTools = [
  { text: "Bleistift", id: "pencil" },
  { text: "Buntstifte", id: "crayon" },
  { text: "Marker", id: "marker" },
  { text: "Borstenpinsel", id: "brush" },
  { text: "Aquarellpinsel", id: "aquarel-brush" },
  { text: "Kohlestift", id: "coal-pencil" },
  { text: "Spachtel", id: "spatula" },
  { text: "Schwamm", id: "sponge" },
];
</script>

<style scoped>
h2 {
  font-size: 5rem;
  text-align: center;
  margin-block: 3rem 6rem;
}

details {
  font-size: 3rem;
  color: var(--clr-purple01);
}

.selection-section {
  margin-block: 5rem;
  padding: 1rem 8rem;
}

.generator-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10rem;
  _padding-inline: 5rem;
}

.categories-container {
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  margin-inline: auto;
}

.category-icon {
  display: flex;
  justify-content: start;
  align-items: end;
  background-size: cover;
  border-radius: 7%;
  width: 28rem;
  height: 20rem;
}

.category-icon p {
  margin-left: 2rem;
  margin-bottom: 1rem;
  color: var(--clr-white);
  font-size: 4rem;
}

.style-category {
  background-image: url("/style-icon.png");
}

.theme-category {
  background-image: url("/theme-icon.jpg");
}

.genre-category {
  background-image: url("/genre-icon.jpg");
}

.technique-category {
  background-image: url("/technique-icon.jpg");
}

.coloration-category {
  background-image: url("/coloration-icon.jpg");
}

.character-category {
  background-image: url("/character-design-icon.jpg");
  _filter: brightness(50%);
}

.result-part {
  display: grid;
  grid-template-rows: 1fr 1fr;
}

.buttons-container {
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
}
.generate-btn {
  padding: 2rem 6rem;
  border-style: none;
  border-radius: 4rem;
  background-color: var(--clr-purple01);
  color: var(--clr-white);
  font-size: 4rem;
  cursor: pointer;
}
</style>
