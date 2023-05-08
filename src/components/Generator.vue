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
      <Card
        v-for="category in categories"
        :key="category"
        :title="category.text"
        :image="category.image"
        :id="category.id"
      ></Card>
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
import Card from "./Card.vue";

const categories = [
  { text: "Stil", image: "/style-icon.png", id: "style" },
  { text: "Thema", image: "/theme-icon.jpg", id: "theme" },
  { text: "Genre", image: "/genre-icon.jpg", id: "genre" },
  { text: "Technik", image: "/technique-icon.jpg", id: "technique" },
  { text: "Farbgebung", image: "/coloration-icon.jpg", id: "coloration" },
  {
    text: "Character-Design",
    image: "/character-design-icon.jpg",
    id: "character-design",
  },
];

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
  font-size: 7rem;
  text-align: center;
  margin-block: 3rem 6rem;
  letter-spacing: 0.5rem;
}

details {
  font-size: 3rem;
  color: var(--clr-purple01);
}

.selection-section {
  margin-block: 4rem;
  padding: 1rem 8rem;
}

.generator-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10rem;
}

.categories-container {
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  margin-inline: auto;
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
