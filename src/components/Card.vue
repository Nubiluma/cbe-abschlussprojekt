<template>
  <div
    class="card"
    :class="{
      'category-selected': selected,
      'category-not-selected': !selected,
      'challenge-view': challengeView,
    }"
  >
    <img
      @click="emitFunction(id)"
      class="dice-symbol"
      src="/dices.png"
      v-if="challengeView"
    />

    <slot>{{ item }}</slot>
    <div v-if="challengeView" class="cover"></div>
    <p
      :class="{
        'card-title': !challengeView,
        'challenge-view-title': challengeView,
      }"
    >
      {{ title }}
    </p>
    <img
      :class="{
        'card-image': !challengeView,
        'challenge-view-image': challengeView,
      }"
      :src="image"
    />
  </div>
</template>

<script setup>
defineProps({
  title: [String],
  image: String,
  id: String,
  selected: Boolean,
  challengeView: Boolean,
  item: String,
});

const emit = defineEmits(["rerollValue"]);
const emitFunction = function () {
  emit("rerollValue");
};
</script>

<style scoped>
.category-selected {
  transform: translateY(-5%) scale(1.05);
  box-shadow: 1rem 1rem 1rem var(--clr-purple01);
}

.category-not-selected {
  filter: saturate(20%);
  opacity: 60%;
}

.card {
  display: flex;
  justify-content: space-between;
  align-items: start;
  border-radius: 3rem;
  width: 30rem;
  height: 22rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
.cover {
  background-color: var(--clr-purple01);
  opacity: 50%;
  position: absolute;
  width: 100%;
  height: 100%;
}
.challenge-view {
  flex-direction: column;
}

.card-title {
  margin-left: 1.5rem;
  margin-block: auto 1.25rem;
  color: var(--clr-white);
  font-size: 4rem;
  line-height: 3.5rem;
}

.challenge-view-title {
  margin-left: 1.5rem;
  margin-bottom: 1.25rem;
  color: var(--clr-white);
  font-size: 3rem;
  line-height: 3.5rem;
}
.card-image {
  height: 100%;
  position: absolute;
  z-index: -1;
  filter: brightness(85%);
}

.challenge-view-image {
  height: 100%;
  position: absolute;
  z-index: -1;
  filter: blur(0.4rem) saturate(30%);
}

.dice-symbol {
  margin-inline: auto 1.5rem;
  margin-top: 1rem;
  width: 4.5rem;
  z-index: 1;
}

.dice-symbol:hover {
  cursor: pointer;
  transform: scale(1.1);
}
</style>
