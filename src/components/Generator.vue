<template>
  <h2>What should I draw?</h2>
  <section class="settings-section">
    <details>
      <summary>
        <span class="medium-text">
          Ausklappen, um deine gewünschten Materialien zu wählen</span
        >
      </summary>
      <div class="medium-selection">
        <div class="medium-checkbox-container">
          <input class="mediums-checkbox" type="checkbox" id="medium-canvas" />
          <label class="mediums-label" for="medium-canvas">Leinwand</label>
        </div>
        <div class="medium-checkbox-container">
          <input class="mediums-checkbox" type="checkbox" id="medium-paper" />
          <label class="mediums-label" for="medium-paper">Papier</label>
        </div>
        <div class="medium-checkbox-container">
          <input
            class="mediums-checkbox"
            type="checkbox"
            id="medium-water-colors"
          />
          <label class="mediums-label" for="medium-water-colors"
            >Aquarell-Papier</label
          >
        </div>
        <div class="medium-checkbox-container">
          <input class="mediums-checkbox" type="checkbox" id="medium-digital" />
          <label class="mediums-label" for="medium-digital"
            >Digitales Medium</label
          >
        </div>
      </div>
      <div class="medium-selection">
        <div class="medium-checkbox-container">
          <input class="mediums-checkbox" type="checkbox" id="medium-pencil" />
          <label class="mediums-label" for="medium-pencil">Bleistift</label>
        </div>
        <div class="medium-checkbox-container">
          <input
            class="mediums-checkbox"
            type="checkbox"
            id="medium-colored-pencil"
          />
          <label class="mediums-label" for="medium-colored-pencil"
            >Bunstift</label
          >
        </div>
        <div class="medium-checkbox-container">
          <input class="mediums-checkbox" type="checkbox" id="medium-marker" />
          <label class="mediums-label" for="medium-marker">Filzstift</label>
        </div>
      </div>
    </details>
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

.settings-section {
  margin-block: 5rem;
  padding: 1rem 8rem;
}
.medium-selection {
  margin-block: 4rem 2rem;

  display: flex;
  justify-content: start;
  align-items: center;
  gap: 3rem;
}
.medium-text {
  font-size: 3rem;
  margin-bottom: 2rem;
  color: black;
}
.medium-checkbox-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.mediums-checkbox {
  width: 2rem;
  height: 2rem;
}

.mediums-label {
  font-size: 2rem;
  color: black;
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
