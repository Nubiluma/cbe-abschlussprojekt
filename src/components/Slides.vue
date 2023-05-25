<template>
  <div class="carousel">
    <transition name="fade">
      <img :src="selectedImage" alt="Selected Image" />
    </transition>
    <div class="indicator-bar">
      <span
        v-for="(image, index) in images"
        :key="index"
        :class="{ active: index === selectedIndex }"
        @click="selectImage(index)"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const images = ref([
  "/slide-1-transparent.png",
  "/slide-2-transparent.png",
  "/slide-3-transparent.png",
]);

const selectedIndex = ref(0);

const selectedImage = computed(() => images.value[selectedIndex.value]);

function selectImage(index) {
  selectedIndex.value = index;
}
</script>

<style scoped>
.carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.indicator-bar {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.indicator-bar span {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: gray;
  margin: 0 5px;
  cursor: pointer;
}

.indicator-bar span.active {
  background-color: black;
}

img {
  width: var(--slides-img-height);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
