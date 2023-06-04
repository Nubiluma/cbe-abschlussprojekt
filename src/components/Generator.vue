<template>
  <h2>What should I draw?</h2>
  <section class="selection-section">
    <MaterialSelection
      title="Ausklappen, um deine gewünschten Materialien zu wählen"
      :media="selectionMedium"
      :tools="selectionTools"
      data-cy="material-selection"
    ></MaterialSelection>
  </section>
  <section class="generator-wrapper">
    <div
      v-if="!isChallengeGenerated()"
      class="categories-container"
      data-cy="categories-container"
    >
      <Card
        v-for="category in categories"
        @click="selectCategory(category)"
        :key="category"
        :title="category.text"
        :image="category.image"
        :id="category.id"
        :selected="category.selected"
        :class="{ 'card-default-styling': selectedCategories.length === 0 }"
      ></Card>
    </div>
    <div
      v-if="isChallengeGenerated()"
      class="categories-container-challenge-view"
      data-cy="categories-container-challenge-view"
    >
      <Card
        v-for="category in selectedCategories"
        :key="category"
        :title="category.text"
        :image="category.image"
        :id="category.id"
        :selected="category.selected"
        :challengeView="isChallengeGenerated()"
        @rerollValue="handleRerollValue(category.id)"
      >
        <p
          :class="{
            'challenge-view-technik-item': category.id == 'technique',
            'challenge-card-item': category.id != 'technique',
          }"
        >
          {{ cardChallengeText(category) }}
        </p></Card
      >
    </div>
    <div class="challenge-part">
      <div class="challenge-container">
        <div
          v-if="isChallengeGenerated()"
          class="challenge-display"
          data-cy="challenge-display"
        >
          <h3 class="challenge-heading">Challenge:</h3>
          <div class="challenge-text-container">
            <p
              v-if="Object.keys(generatedChallenge).includes('Stil')"
              class="challenge-text"
            >
              Kreiere ein Bild im
              <span class="challenge-text-item"
                >''{{ generatedChallenge.Stil }}''</span
              >-Stil
            </p>
            <p
              v-if="Object.keys(generatedChallenge).includes('Motiv')"
              class="challenge-text"
            >
              Male folgendes:
              <span class="challenge-text-item">{{
                generatedChallenge.Motiv
              }}</span>
            </p>
            <p
              v-if="Object.keys(generatedChallenge).includes('Hintergrund')"
              class="challenge-text"
            >
              Verwende folgenden Hintergrund:
              <span class="challenge-text-item">{{
                generatedChallenge.Hintergrund
              }}</span>
            </p>
            <p
              v-if="Object.keys(generatedChallenge).includes('Genre')"
              class="challenge-text"
            >
              Male das Bild so, als wäre es aus dem
              <span class="challenge-text-item"
                >''{{ generatedChallenge.Genre }}''</span
              >-Genre
            </p>
            <p
              v-if="Object.keys(generatedChallenge).includes('Farbgebung')"
              class="challenge-text"
            >
              Verwende die Farbgebung
              <span class="challenge-text-item"
                >''{{ generatedChallenge.Farbgebung }}''</span
              >
            </p>
            <p
              v-if="Object.keys(generatedChallenge).includes('Technik')"
              class="challenge-text"
            >
              Technik:
              <span class="challenge-text-item">{{
                generatedChallenge.Technik
              }}</span>
            </p>
          </div>
        </div>
      </div>
      <div class="buttons-container">
        <button
          v-if="!isChallengeGenerated()"
          @click="generateChallenge"
          class="generate-btn generator-buttons"
          :class="{ disabled: selectedCategories.length === 0 }"
          data-cy="generate-button"
        >
          Generieren
        </button>
        <button
          v-if="isChallengeGenerated()"
          @click="acceptChallenge"
          class="accept-challenge-btn generator-buttons"
          data-cy="accept-button"
        >
          {{ challengeButtonText }}
        </button>
        <button
          v-if="isChallengeGenerated()"
          @click="generateChallenge"
          class="re-generate-btn generator-buttons"
          data-cy="re-generate-button"
        >
          Alle neu würfeln
        </button>
        <p
          v-if="isChallengeGenerated()"
          @click="reset"
          class="back-to-categories"
          data-cy="back-button"
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
import { ref } from "vue";
import { useAppStore } from "../store";
import { items } from "./../items";

/******* variables ********/

const store = useAppStore();

const categories = ref([
  { text: "Stil", image: "/style-icon.jpg", id: "style", selected: false },
  {
    text: "Motiv",
    image: "/theme-icon.jpg",
    id: "theme",
    selected: false,
  },
  {
    text: "Hintergrund",
    image: "/background-icon.jpg",
    id: "background",
    selected: false,
  },

  { text: "Genre", image: "/genre-icon.jpg", id: "genre", selected: false },

  {
    text: "Farbgebung",
    image: "/coloration-icon.jpg",
    id: "coloration",
    selected: false,
  },
  {
    text: "Technik",
    image: "/technique-icon.jpg",
    id: "technique",
    selected: false,
  },
]);

//contains categories with selected value true
const selectedCategories = ref([]);

//contains 1 object if user generates challenge, otherwise it will be empty
let generatedChallenge = ref({});

const selectionMedium = [{ text: "Digitales Medium", id: "digital" }];

const selectionTools = [
  { text: "Bleistifte", id: "pencil" },
  { text: "Buntstifte", id: "crayon" },
  { text: "Marker", id: "marker" },
  { text: "Acrylfarben", id: "brush" },
  { text: "Aquarelle", id: "aquarels" },
  { text: "Ölfarben", id: "oil" },
  { text: "Pastellkreide", id: "pastels" },
  { text: "Wachsmalstifte", id: "wax" },
  { text: "Kohlestifte", id: "coal-pencil" },
  { text: "Spachtel", id: "spatula" },
  { text: "Schwamm", id: "sponge" },
];

let challengeButtonText = ref("Challenge annehmen");

/******* functions ********/

/**
 * @returns corresponding item-texts on card challenge view
 * @param {*} category
 */

function cardChallengeText(category) {
  for (let key in generatedChallenge.value) {
    if (category.text == key) {
      return generatedChallenge.value[key];
    }
  }
}

/**
 * @returns true if challenge has been generated (important for rendering)
 */
function isChallengeGenerated() {
  return Object.keys(generatedChallenge.value).length > 0;
}

/**
 * toggle selected value of category and update selectedCategories
 * themeCategory and characterCategory cannot be selected at the same time
 * @param {Object} category
 */
function selectCategory(category) {
  category.selected = !category.selected;
  selectedCategories.value = categories.value.filter((c) => c.selected);
}

/**
 * generate challenge object depending on selected categories and materials
 */
function generateChallenge() {
  const categoryIdIndex = 2;
  if (selectedCategories.value.length > 0) {
    const categoryKeys = [];
    selectedCategories.value.forEach((e) => {
      const values = Object.values(e);
      categoryKeys.push(values[categoryIdIndex]);
    });
    generateRandomValues(categoryKeys);
  } else {
    console.error("at least 1 category must be selected");
  }
}

/**
 * generate random values for all selected categories
 * factor in selected materials
 * @param {Array} categoryKeys
 */
function generateRandomValues(categoryKeys) {
  if (categoryKeys.includes("style")) {
    const randomValueIndex = Math.floor(Math.random() * items.style.length);
    generatedChallenge.value.Stil = items.style[randomValueIndex];
  }
  if (categoryKeys.includes("genre")) {
    const randomValueIndex = Math.floor(Math.random() * items.genre.length);
    generatedChallenge.value.Genre = items.genre[randomValueIndex];
  }
  if (categoryKeys.includes("coloration")) {
    const randomValueIndex = Math.floor(
      Math.random() * items.coloration.length
    );
    generatedChallenge.value.Farbgebung = items.coloration[randomValueIndex];
  }
  if (categoryKeys.includes("theme")) {
    const themeValues = Object.values(items.theme);
    const randomArrayIndex = Math.floor(Math.random() * themeValues.length);
    const randomValueIndex = Math.floor(
      Math.random() * themeValues[randomArrayIndex].length
    );
    generatedChallenge.value.Motiv =
      themeValues[randomArrayIndex][randomValueIndex];
  }

  if (categoryKeys.includes("technique")) {
    const techniqueItems = items.technique;
    let filteredItems = {};

    const selectionToolsTexts = [];
    selectionTools.forEach((tool) => {
      selectionToolsTexts.push(tool.text);
    });

    //remove materials that are not selected (in store)
    //delete keys bound to a material (e.g. Acryl/Digital) that is not in store
    for (let key in techniqueItems) {
      if (!store.selectedMaterials.includes(key) && key != "Pen&Paper") {
        delete techniqueItems[key];
      }
    }
    filteredItems = Object.assign(filteredItems, techniqueItems);
    console.log(filteredItems);
    for (let key in techniqueItems) {
      for (let i = 0; i < techniqueItems[key].length; i++) {
        const isTool = selectionToolsTexts.includes(techniqueItems[key][i]);
        const isInStore = store.selectedMaterials.includes(
          techniqueItems[key][i]
        );
        // console.log(techniqueItems[key][i], "is in store? ", isInStore);
        // console.log(techniqueItems[key][i], "is tool? ", isTool);

        if (!isInStore && isTool) {
          //console.warn(techniqueItems[key][i], "will be removed");
          filteredItems[key] = filteredItems[key].filter(
            (item) => item != techniqueItems[key][i]
          );
        }
      }
    }

    const techniqueKeys = Object.keys(filteredItems);

    const randomKey =
      techniqueKeys[Math.floor(Math.random() * techniqueKeys.length)];

    const randomValueIndex = Math.floor(
      Math.random() * filteredItems[randomKey].length
    );

    generatedChallenge.value.Technik =
      filteredItems[randomKey][randomValueIndex] + " (" + randomKey + ")";
  }

  if (categoryKeys.includes("background")) {
    const randomValueIndex = Math.floor(
      Math.random() * items.background.length
    );
    generatedChallenge.value.Hintergrund = items.background[randomValueIndex];
  }
}

/**
 * save not empty generated challenge to store
 */
function acceptChallenge() {
  if (Object.keys(generatedChallenge.value).length > 0) {
    store.challenges.push(generatedChallenge.value);
    challengeButtonText.value = "Du hast die Challenge angenommen!";
    setTimeout(() => {
      reset();
      challengeButtonText.value = "Challenge annehmen";
    }, 2000);

    //console.log(store.challenges);
  }
}

/**
 * reset selected categories and delete generated challenge value
 */
function reset() {
  selectedCategories.value = [];
  generatedChallenge.value = {};

  categories.value.forEach((c) => {
    c.selected = false;
  });
}

/**
 * re-generate value for single category in challenge
 * @param {String} id
 */
function handleRerollValue(id) {
  const category = [id];
  generateRandomValues(category);
}
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
  margin-block: 10rem 7rem;
  margin-inline: 10rem;
}

.generator-wrapper {
  margin-top: 0;
  margin-inline: 10rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15rem;
  height: 80rem;
}

.categories-container {
  display: grid;
  justify-items: center;
  align-content: end;
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
}

.challenge-container {
  width: 100%;
  _height: 60%;
  transform: translateY(-5%);
}

.challenge-display {
  padding-bottom: 2rem;
  background-color: var(--clr-purple01);
  color: var(--clr-white);
  border-radius: 4rem;
  box-shadow: 1rem 1rem 1rem var(--clr-purple02);
  height: fit-content;
}

.challenge-heading {
  font-size: 4rem;
  padding: 2.5rem 3rem;
  padding-bottom: 1rem;
}

.challenge-text-container {
  margin: 2rem 3rem;
  _height: 25rem;
  font-size: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.challenge-text {
  color: black;
}

.challenge-text-item {
  color: white;
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
  cursor: pointer;
}

.card-default-styling {
  filter: none;
  opacity: 100%;
}

.challenge-card-item {
  margin-left: 1.5rem;
  margin-bottom: 2rem;
  color: var(--clr-white);
  font-size: 3.5rem;
  line-height: 3.5rem;
  z-index: 1;
}

.challenge-view-technik-item {
  margin-left: 1.5rem;
  margin-bottom: 2rem;
  color: var(--clr-white);
  font-size: 3rem;
  line-height: 3rem;
  z-index: 1;
}

.disabled {
  cursor: auto;
  opacity: 50%;
  filter: grayscale();
}
</style>
