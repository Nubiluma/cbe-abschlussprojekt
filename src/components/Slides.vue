<template>
  <div class="carousel">
    <img :src="selectedImage" alt="Selected Image" />
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

const images = ref(["/slide-1.png", "/slide-2.jpg", "/slide-3.jpg"]);

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
  max-width: 50%;
}
</style>
