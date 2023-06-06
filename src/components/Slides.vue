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
import { ref, computed, onMounted, onUnmounted } from "vue";

const images = ref([
  "/slide-1-transparent.png",
  "/slide-2-transparent.png",
  "/slide-3-transparent.png",
]);

const selectedIndex = ref(0);
const autoInterval = ref(null);

const selectedImage = computed(() => images.value[selectedIndex.value]);

function selectImage(index) {
  selectedIndex.value = index;
}

function startAutoCarousel() {
  autoInterval.value = setInterval(() => {
    nextImage();
  }, 3000);
}

function stopAutoCarousel() {
  clearInterval(autoInterval.value);
}

function nextImage() {
  selectedIndex.value = (selectedIndex.value + 1) % images.value.length;
}

onMounted(() => {
  startAutoCarousel();
});

onUnmounted(() => {
  stopAutoCarousel();
});
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
