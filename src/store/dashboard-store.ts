
import { create } from "zustand";

interface DashboardStore {
    isActive: boolean;
    
    hiddenMenuDashboard: () => void;
    showMenuDashboard: () => void;
}

const useDashboardStore = create<DashboardStore>((set) => ({
    isActive: false,

    hiddenMenuDashboard: () => set(() => ({isActive: false})),
    showMenuDashboard: () => set(() => ({isActive: true}))
}));

export { useDashboardStore };