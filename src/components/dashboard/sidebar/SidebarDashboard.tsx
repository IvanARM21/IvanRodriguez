"use client";

import { HeaderLogo } from "@/components/ui/header/HeaderLogo";
import { AuthMenuMobile } from "@/components/ui/menu-mobile/AuthMenuMobile"
import { useDashboardStore } from "@/store"
import clsx from "clsx";
import Link from "next/link"
import { useEffect, useState } from "react";
import { FaEnvelope, FaFolderOpen } from "react-icons/fa"
import { FaHouse } from "react-icons/fa6"
import { MdClose } from "react-icons/md";

export const SidebarDashboard = () => {

  const isActive = useDashboardStore(state => state.isActive);
  const hiddenMenu = useDashboardStore(state => state.hiddenMenuDashboard);

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
            "bg-slate-950 border-r-2 border-slate-800 flex flex-col max-w-[280px] w-full h-full max-h-screen fixed z-30 justify-between left-0 gap-4 overflow-hidden lg:translate-x-0 transform transition-all duration-300", 
            {
              "translate-x-0": isActive,
              "-translate-x-full": !isActive
            }
          )}
        >
          <div className="h-20 flex justify-between items-center  mb-3">
            <HeaderLogo 
              fontSize="text-2xl"
            />
            <button
              type="button"
              onClick={hiddenMenu}
            >
              <MdClose 
                className=" text-white cursor-pointer h-10 w-10" 
              />
            </button>
          </div>

          <div className="h-[1px] w-full bg-slate-700" />

          <div className="flex-1">
            <Link
              onClick={hiddenMenu}
              href="/dashboard"
              className="flex gap-4 text-xl font-bold items-center p-4 text-indigo-600 mb-2 transition-all duration-300 hover:text-white hover:bg-indigo-600 mt-3"
            >
              <FaHouse size={24}/>
              Home
            </Link>

            <Link
              onClick={hiddenMenu}
              href="/dashboard/projects"
              className="flex gap-4 text-xl font-bold items-center p-4 text-indigo-600 my-2 transition-all duration-300 hover:text-white hover:bg-indigo-600"
            >
              <FaFolderOpen size={24}/>
              Projects
            </Link>

            <Link
              onClick={hiddenMenu}
              href="/dashboard/projects"
              className="flex gap-4 text-xl font-bold items-center p-4 text-indigo-600 my-2 transition-all duration-300 hover:text-white hover:bg-indigo-600 mb-3"
            >
              <FaEnvelope size={24}/>
              Messages
            </Link>
          </div>

          <div className="h-[1px] w-full bg-slate-700" />

          <AuthMenuMobile />
          
      </nav>
    </>
  )
}
