"use client";

import { HeaderLogo } from "@/components/ui/header/HeaderLogo";
import { AuthMenuMobile } from "@/components/ui/menu-mobile/AuthMenuMobile"
import { useDashboardStore } from "@/store"
import clsx from "clsx";
import Link from "next/link"
import { useEffect, useState } from "react";
import { FaEnvelope, FaFolderOpen } from "react-icons/fa"
import { FaHouse } from "react-icons/fa6"

export const SidebarDashboard = () => {

  const isActive = useDashboardStore(state => state.isActive);
  const hiddenMenu = useDashboardStore(state => state.hiddenMenuDashboard);

  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    if(typeof window !== undefined) {
      setWidth(window.innerWidth);
      // Function handler the resize
      const handleResize = () => setWidth(window.innerWidth);
      // Event Listener - resize
      window.addEventListener('resize', handleResize);
      // Clear Event Listener
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  if (width === null) {
    // Optionally return null or a loading state if width is not set
    return null;
  }

  return (
    <>
      {isActive && (
          <div 
            onClick={hiddenMenu}
            className="fade-in inset-0 z-20 bg-indigo-600 fixed bg-opacity-10 backdrop-blur-sm transition-all duration-300 block lg:hidden"
          />
        )}
        

        <nav 
          className={clsx(
            "bg-slate-950 border-r-2 border-slate-800  max-w-[320px] w-full h-screen fixed z-30 flex flex-col justify-between left-0 gap-4 overflow-hidden transform transition-all duration-300", 
            {
              "lg:translate-x-0": width >= 1024 && isActive,
              "lg:-translate-x-full": width >= 1024 && isActive,
              "translate-x-0": width <= 1024 && isActive,
              "-translate-x-full": width <= 1024 && !isActive
            }
          )}
        >
          <div className="flex flex-col">
            <div className="h-20 flex justify-center items-center mb-10">
              <HeaderLogo 
                fontSize="text-3xl"
              />
            </div>
            <Link
              href="/dashboard"
              className="flex gap-4 text-xl font-bold items-center p-4 text-indigo-600 mb-2 transition-all duration-300 hover:text-white hover:bg-indigo-600"
            >
              <FaHouse size={24}/>
              Home
            </Link>

            <Link
              href="/dashboard/projects"
              className="flex gap-4 text-xl font-bold items-center p-4 text-indigo-600 my-2 transition-all duration-300 hover:text-white hover:bg-indigo-600"
            >
              <FaFolderOpen size={24}/>
              Projects
            </Link>

            <Link
              href="/dashboard/projects"
              className="flex gap-4 text-xl font-bold items-center p-4 text-indigo-600 my-2 transition-all duration-300 hover:text-white hover:bg-indigo-600"
            >
              <FaEnvelope size={24}/>
              Messages
            </Link>
          </div>
          <AuthMenuMobile
            isDashboard={true}
          />
      </nav>
    </>
  )
}
