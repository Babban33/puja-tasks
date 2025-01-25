import { create } from "zustand";

interface HabitStore {
  isPopUpOpen: boolean;
  setState: (fn: (state: HabitStore) => Partial<HabitStore>) => void;
}

export const useHabitStore = create<HabitStore>((set) => ({
  isPopUpOpen: false,
  setState: (fn) => set((state) => ({ ...state, ...fn(state) })),
}));