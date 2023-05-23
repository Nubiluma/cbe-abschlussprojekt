<template>
  <Carousel :autoplay="2000" :wrap-around="true">
    <Slide v-for="(slide, index) in slides" :key="index">
      <img :src="slide" alt="Slide Image" class="carousel__image" />
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<script setup>
import { ref } from "vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const slides = ref([
  "/slide-1-transparent.png",
  "/slide-2-transparent.png",
  "/slide-3-transparent.png",
]);

const name = "Autoplay";
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
</style>
