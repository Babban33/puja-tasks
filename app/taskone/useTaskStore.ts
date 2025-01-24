import {create} from "zustand";
interface Habit{
    name: string,
    checked: boolean,
}
interface TaskStore{
    habits: Habit[],
    isPopUpOpen: boolean,
    togglePopUp: ()=> void,
    addHabit: (name: string) => void
}

export const useTaskStore = create<TaskStore>((set)=>({
    habits: [
        { name: "Meditating", checked: true },
        { name: "Reading Philosophy", checked: true },
        { name: "Journaling", checked: false },
    ],
    isPopUpOpen: false,
    togglePopUp: () => set((state) => ({ isPopUpOpen: !state.isPopUpOpen })),
    addHabit: (name) =>set((state) => ({habits: [...state.habits, { name, checked: false }],})),
}));