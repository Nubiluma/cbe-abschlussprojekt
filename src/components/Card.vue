<template>
  <div
    class="card"
    :class="{
      'category-selected': selected,
      'category-not-selected': !selected,
    }"
  >
    <p class="card-title">{{ title }}</p>
    <img class="card-image" :src="image" />
  </div>
</template>

<script setup>
defineProps({ title: [String], image: String, id: String, selected: Boolean });
</script>

<style scoped>
.category-selected {
  transform: translateY(-5%) scale(1.05);
  box-shadow: 1rem 1rem 1rem var(--clr-purple01);
}

.category-not-selected {
  filter: saturate(10%);
}

.card {
  display: flex;
  justify-content: space-between;
  align-items: end;
  border-radius: 3rem;
  width: 28rem;
  height: 20rem;
  position: relative;
  overflow: hidden;
}

.card-title {
  margin-left: 1.5rem;
  margin-bottom: 1.25rem;
  color: var(--clr-white);
  font-size: 4rem;
  line-height: 3.5rem;
}

.card-image {
  height: 100%;
  filter: brightness(90%);
  position: absolute;
  z-index: -1;
}
</style>
