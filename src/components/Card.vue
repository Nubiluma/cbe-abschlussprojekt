<template>
  <div class="card">
    <p class="card-title">{{ title }}</p>
    <img class="card-image" :src="image" />
  </div>
</template>

<script setup>
defineProps({ title: [String], image: String, id: String });
</script>

<style scoped>
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
