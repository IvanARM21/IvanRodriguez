"use client";

import { useDashboardStore } from "@/store";
import { FaBars } from "react-icons/fa";

export const SidebarButton = () => {

  const isActive = useDashboardStore(state => state.isActive);
  const showMenuDashboard = useDashboardStore(state => state.showMenuDashboard);
  const hiddenMenuDashboard = useDashboardStore(state => state.hiddenMenuDashboard);

  return (
    <button
        type="button"
        onClick={isActive ? hiddenMenuDashboard : showMenuDashboard}
        className="h-7 w-7 text-slate-100 cursor-pointer"
    >
        <FaBars 
            size={30}
        />
    </button>
  )
}
