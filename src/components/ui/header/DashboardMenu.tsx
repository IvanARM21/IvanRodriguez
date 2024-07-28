"use client";

import { useAuthStore } from "@/store";
import Link from "next/link";

export const DashboardMenu = () => {

    const user = useAuthStore(state => state.user);

  return (
    <>
        {user?.email && (
            <Link
                href="/dashboard"
                className="text-indigo-600 font-bold text-xl hover:text-white hover:bg-indigo-600 px-4 py-2 rounded-lg hover:shadow-md hover:shadow-indigo-600 transition-all duration-500"
            >Dashboard</Link>
        )}
    </>
  )
}
