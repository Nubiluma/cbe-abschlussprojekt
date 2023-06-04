import { createPinia, defineStore } from "pinia";
import { ref } from "vue";

// todo move to own file
export const pinia = createPinia();

export const useAppStore = defineStore("app", () => {
  const selectedMaterials = ref([]);

  const challenges = ref([]);
  return { selectedMaterials, challenges };
});
