<template>
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
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt omnis
      voluptates eveniet?</span
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
</template>

<script>
export default {
  name: "HowTo",
};
</script>

<style scoped>
:root {
  --clr-purple01: #6949ff;
  --clr-purple02: #bfb0ff;
  --clr-yellow: #ffc107;
  --clr-white: #ffffff;
  --shadow-clr: #535353;
}

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
</style>
