<template>
  <h2 class="how-to-header">So verwendest du die App</h2>
  <div class="steps-container">
    <div class="steps">
      <img src="checklist-transparent.png" class="how-to-images" />
      <div class="step-text-container">
        <p class="step-title">Kategorien auswählen</p>
        <p class="how-to-text">
          Wähle die Kategorien und Materialien aus, die der Zufallsgenerator
          berücksichtigen soll
        </p>
      </div>
    </div>
    <div class="steps">
      <img src="step2.png" class="how-to-images" />
      <div class="step-text-container">
        <p class="step-title">Generieren lassen</p>
        <p class="how-to-text">
          Klicke auf "Generieren", um eine Challenge basierend auf den gewählten
          Parametern zu erhalten
        </p>
      </div>
    </div>

    <div class="steps">
      <img src="creativity-transparent-2.png" class="how-to-images" />
      <div class="step-text-container">
        <p class="step-title">Challenge annehmen oder neu würfeln</p>
        <p class="how-to-text">
          Nimm die Challenge an, wenn sie dir gefällt, oder würfele die
          Ergebnisse neu
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.how-to-header {
  padding-inline: 10rem;
  font-size: 6rem;
  text-align: center;
  letter-spacing: 0.5rem;
}

.steps-container {
  padding-inline: 10rem;
  padding-bottom: 3rem;
  margin-block: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  gap: 3rem;
  background: no-repeat url("paint-stroke2.png") top;
}

.steps {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.step-text-container {
  height: 15rem;
}
.step-title {
  font-size: 2.5rem;
  font-weight: bold;
}

.how-to-text {
  width: 45ch;
  margin-top: 0.5rem;
  color: rgb(80, 80, 80);
}

.how-to-images {
  height: var(--how-to-img-height);
}
</style>
