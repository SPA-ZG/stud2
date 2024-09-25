import { defineStore } from "pinia";
import { auth } from "@/firebase/init";
import router from "../router/index.js";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const useAuthStore = defineStore("AuthStore", {
  state: () => {
    return {
      email: "",
      password: "",
      user: null,
    };
  },
  actions: {
    init() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = {
            id: user.uid,
            email: user.email,
          };
          router.replace({ name: "home" });
        } else {
          this.user = null;
          router.replace({ name: "login" });
        }
      });
    },
    async signup() {
      try {
        const res = await createUserWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );
        if (res) {
          this.user = {
            id: res.user.uid,
            email: res.user.email,
          };
          this.email = "";
          this.password = "";
          router.replace({ name: "home" });
        }
      } catch (error) {
        console.log(error);
      }
    },
    async login() {
      try {
        const res = await signInWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );
        if (res) {
          this.user = {
            id: res.user.uid,
            email: res.user.email,
          };
          console.log(this.user);
          this.email = "";
          this.password = "";
          router.replace({ name: "home" });
        }
      } catch (error) {
        console.log(error);
      }
    },
    async logout() {
      await signOut(auth);
      router.replace({ name: "login" });
      this.email = "";
      this.password = "";
      this.user = null;
    },
  },
});
