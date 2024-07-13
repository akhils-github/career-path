import { create } from "zustand";

export const useUserStore = create((set, get) => ({
  // user: {},
  userId: null,
  setUser: (user) => {
    set((state) => ({
      // user: user,
      userId: user,
    }));
  },
}));
