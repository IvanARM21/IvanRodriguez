
import { create } from "zustand";

interface UIStore {
    isActive: boolean;
    modalProject: boolean;
    
    hiddenMenu: () => void;
    showMenu: () => void;
    hiddenModalProject: () => void;
    showModalProject: () => void;
}

const useUiStore = create<UIStore>((set) => ({
    isActive: false,
    modalProject: false,

    hiddenMenu: () => set(() => ({isActive: false})),
    showMenu: () => set(() => ({isActive: true})),

    hiddenModalProject: () => set(() => ({modalProject: false})),
    showModalProject: () => set(() => ({modalProject: true})),
}));

export { useUiStore };