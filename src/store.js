import { createPinia, defineStore } from "pinia";
import { ref } from "vue";

// todo move to own file
export const pinia = createPinia();

export const useAppStore = defineStore("app", () => {
  const count = ref(0);
  function increment() {
    count.value++;
  }

  return { count, increment };
});
