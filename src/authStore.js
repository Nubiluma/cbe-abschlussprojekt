import { createPinia, defineStore } from "pinia";
import { reactive, ref } from "vue";
import { supabase } from "./supabase";

// todo move to own file
export const pinia = createPinia();

export const useAppStore = defineStore("app", () => {
  const selectedMaterials = ref([
    "Digitales Medium",
    "Marker",
    "Schwamm",
    "Acrylfarben",
    "Pen&Paper",
  ]);

  const challenges = ref([]);
  return { selectedMaterials, challenges };
});

export const useAuthStore = defineStore("authStore", () => {
  const user = ref(null);
  const isLoggedIn = ref(false);
  const login = async ({ email, password }) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log(data);
  };
  return { login, user, isLoggedIn };
});

const createAccount = async ({ email, password }) => {
  return await supabase.auth.signUp({
    email,
    password,
  });
};
