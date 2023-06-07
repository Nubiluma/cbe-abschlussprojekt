import { createPinia, defineStore } from "pinia";
import { reactive, ref } from "vue";
import { supabase } from "./supabase";

// todo move to own file
export const pinia = createPinia();

export const useAppStore = defineStore("app", () => {
  const selectedMaterials = ref([]);

  const challenges = ref([
    {
      Stil: "Surrealistisch",
      Genre: "Düster",
      Farbgebung: "Dunkel",
      Motiv: "Hase",
      Technik: "Kohlestifte (Pen&Paper)",
      Hintergrund: "Fluss",
    },
    {
      Stil: "",
      Genre: "",
      Farbgebung: "Dunkel",
      Motiv: "Hund",
      Technik: "Kohlestifte (Pen&Paper)",
      Hintergrund: "Fluss",
    },
  ]);
  return { selectedMaterials, challenges };
});

export const useToastStore = defineStore("toast", {
  state: () => ({
    toastMsg: "",
  }),
  actions: {
    showMessage(msg) {
      this.toastMsg = msg;
      setTimeout(() => {
        this.toastMsg = "";
      }, 5000);
    },
  },
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
