import {create} from "zustand";

interface WindowState{
    isPopUpOpen: boolean,
    togglePopUp: ()=> void
}

export const useTaskStore = create<WindowState>((set)=>({
    isPopUpOpen: false,
    togglePopUp: () => set((state) => ({ isPopUpOpen: !state.isPopUpOpen }))
}));