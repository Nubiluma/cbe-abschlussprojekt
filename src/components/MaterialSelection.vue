<template>
  <details>
    <summary>
      <span class="medium-text" data-cy="medium-text"> {{ title }}</span>
    </summary>
    <div class="medium-selection">
      <div
        v-for="medium in media"
        :key="medium.id"
        class="medium-checkbox-container"
      >
        <input
          class="mediums-checkbox"
          type="checkbox"
          :id="medium.id"
          :value="medium.text"
          v-model="store.selectedMaterials"
        />
        <label class="mediums-label" :for="medium.id">{{ medium.text }}</label>
      </div>
    </div>
    <div class="medium-selection">
      <div
        v-for="tool in tools"
        :key="tool.id"
        class="medium-checkbox-container"
      >
        <input
          class="mediums-checkbox"
          type="checkbox"
          :id="tool.id"
          :value="tool.text"
          v-model="store.selectedMaterials"
        />
        <label class="mediums-label" :for="tool.id">{{ tool.text }}</label>
      </div>
    </div>
  </details>
</template>

<script setup>
import { useAppStore } from "../store";
defineProps({ media: { String }, tools: { String }, title: String });

const store = useAppStore();
</script>

<style scoped>
summary {
  margin-left: 2rem;
}

input {
  accent-color: var(--clr-purple01);
}
.medium-selection {
  margin: 4rem;
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
</style>
