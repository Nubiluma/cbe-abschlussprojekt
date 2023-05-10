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
    <div
      v-if="Object.keys(generatedChallenge).length === 0"
      class="categories-container"
    >
      <Card
        v-for="category in categories"
        :key="category"
        :title="category.text"
        :image="category.image"
        :id="category.id"
        :selected="category.selected"
        :class="{ 'card-default-styling': selectedCategories.length === 0 }"
      ></Card>
    </div>
    <div
      v-if="Object.keys(generatedChallenge).length > 0"
      class="categories-container-challenge-view"
    >
      <Card
        v-for="category in selectedCategories"
        :key="category"
        :title="category.text"
        :image="category.image"
        :id="category.id"
        :selected="category.selected"
        :challengeView="Object.keys(generatedChallenge).length > 0"
        ><p class="challenge-card-item">Lorem ipsum dolor sit.</p></Card
      >
    </div>
    <div class="challenge-part">
      <div class="challenge-container">
        <div
          v-if="Object.keys(generatedChallenge).length > 0"
          class="challenge-display"
        >
          <h3>Challenge:</h3>
          <div class="challenge-text-container">
            <p class="challenge-text">Kreiere ein Bild im ... Stil</p>
            <p class="challenge-text">Male ein/e ...</p>
            <p class="challenge-text">
              Male das Bild so, als wäre es aus dem ... Genre
            </p>
            <p class="challenge-text">Male mit ...</p>
            <p class="challenge-text">Verwende die Farbgebung ...</p>
          </div>
        </div>
      </div>
      <div class="buttons-container">
        <button
          v-if="Object.keys(generatedChallenge).length === 0"
          class="generate-btn generator-buttons"
        >
          Generieren
        </button>
        <button
          v-if="Object.keys(generatedChallenge).length > 0"
          class="accept-challenge-btn generator-buttons"
        >
          Challenge annehmen
        </button>
        <button
          v-if="Object.keys(generatedChallenge).length > 0"
          class="re-generate-btn generator-buttons"
        >
          Alles neu würfeln
        </button>
        <p
          v-if="Object.keys(generatedChallenge).length > 0"
          class="back-to-categories"
        >
          Kategorien neu festlegen ←
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import MaterialSelection from "./MaterialSelection.vue";
import Card from "./Card.vue";

const categories = [
  { text: "Stil", image: "/style-icon.png", id: "style", selected: false },
  { text: "Thema", image: "/theme-icon.jpg", id: "theme", selected: false },
  { text: "Genre", image: "/genre-icon.jpg", id: "genre", selected: false },
  {
    text: "Technik",
    image: "/technique-icon.jpg",
    id: "technique",
    selected: false,
  },
  {
    text: "Farbgebung",
    image: "/coloration-icon.jpg",
    id: "coloration",
    selected: false,
  },
  {
    text: "Character-Design",
    image: "/character-design-icon.jpg",
    id: "character-design",
    selected: false,
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

//object test content: foo: "bar"
const generatedChallenge = {};

const selectedCategories = categories.filter((c) => c.selected);
</script>

<style scoped>
h2 {
  font-size: 7rem;
  text-align: center;
  margin-block: 3rem 6rem;
  letter-spacing: 0.5rem;
}

h3 {
  font-size: 4rem;
  padding: 2rem 3rem;
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
  gap: 8rem;
}

.categories-container {
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  margin-inline: auto;
}

.categories-container-challenge-view {
  display: grid;
  justify-items: center;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  margin-inline: auto;
  margin-bottom: auto;
}

.challenge-part {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 700px;
}

.challenge-container {
  width: 80%;
  height: 60%;
}

.challenge-display {
  background-color: var(--clr-purple01);
  color: var(--clr-white);
  border-radius: 4rem;
  box-shadow: 1rem 1rem 1rem var(--clr-purple02);
  min-height: 90%;
}

.challenge-text-container {
  margin: 3rem;
  height: 20rem;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.buttons-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.generator-buttons {
  padding: 2rem;
  border-style: none;
  border-radius: 4rem;
  font-size: 3.5rem;
  width: 42rem;
  cursor: pointer;
}

.generate-btn {
  background-color: var(--clr-purple01);
  color: var(--clr-white);
  width: 35rem;
}

.accept-challenge-btn {
  background-color: var(--clr-purple01);
  box-shadow: 1rem 1rem var(--clr-purple02);
  color: var(--clr-white);
}

.re-generate-btn {
  background-color: var(--clr-purple02);
  box-shadow: 1rem 1rem var(--clr-purple01);
  _color: var(--clr-purple01);
}

.back-to-categories {
  font-size: 2.5rem;
}

.card-default-styling {
  filter: none;
  opacity: 100%;
}

.challenge-card-item {
  margin-left: 1.5rem;
  margin-bottom: 2rem;
  color: var(--clr-white);
  font-size: 4rem;
  line-height: 3.5rem;
  z-index: 1;
}
</style>
