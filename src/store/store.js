import { create } from "zustand";

export const useAuthStore = create((set) => ({
  auth: {
    email: "",
    active: false,
  },
  setEmail: (email) =>
    set((state) => ({ auth: { ...state.auth, email: email } })),
}));
