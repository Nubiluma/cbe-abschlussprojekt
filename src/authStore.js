import { createPinia, defineStore } from "pinia";
import { reactive, ref } from "vue";
import { supabase } from "./supabase";

// todo move to own file
export const pinia = createPinia();

export const useAppStore = defineStore("app", () => {
  const selectedMaterials = ref([]);

  const challenges = ref([]);
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

// supabase.auth.onAuthStateChange((event, session) => {
//   console.log(event, session);
//   user.value = session.value ? session.user : null;
//   isLoggedIn.value = user.value ? true : false;
// });

export const useAuthStore = defineStore("authStore", () => {
  const user = ref(null);
  const isLoggedIn = ref(false);

  const login = async ({ email, password }) => {
    return await supabase.auth.signInWithPassword({
      email,
      password,
    });
  };

  return { login, user, isLoggedIn };
});

const createAccount = async ({ email, password }) => {
  return await supabase.auth.signUp({
    email,
    password,
  });
};
