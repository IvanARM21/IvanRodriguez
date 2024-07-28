"use client";

import Link from "next/link";
import clsx from "clsx";
import { useAuthStore, useUiStore } from "@/store"
import { navItems } from "@/data";
import { MdClose } from "react-icons/md";
import { AuthMenuMobile } from "./AuthMenuMobile";
import { FaDatabase } from "react-icons/fa";

export const MenuMobile = () => {

  const hiddenMenu = useUiStore(state => state.hiddenMenu);
  const isActive = useUiStore(state => state.isActive);
  const user = useAuthStore(state => state.user);

  return (
    <>
      {isActive && (
        <div 
          onClick={hiddenMenu}
          className="fade-in inset-0 z-20 bg-indigo-600 fixed bg-opacity-10 backdrop-blur-sm transition-all duration-300 md:hidden"
        />
      )}

      <nav className={clsx(
        " bg-slate-950 max-w-[280px] min-[400px]:max-w-[360px] w-full h-full max-h-screen fixed z-30 flex flex-col px-4 top-0 right-0 gap-2 transform transition-all duration-300 md:hidden",
        {
          "translate-x-full": !isActive
        }
      )}>
        <MdClose 
          onClick={hiddenMenu}
          className="ml-auto right-2 top-2 h-10 w-10 mb-10 text-white cursor-pointer absolute" 
        />

        {user?.email && (
          <Link
            href={"/dashboard"}
            onClick={hiddenMenu}
            className="flex text-xl first-of-type:mt-16 mb-3 font-bold gap-3 items-center text-indigo-600 p-4 my-2 transition-all duration-300 hover:text-white hover:bg-indigo-600"
          >
            {<FaDatabase />}
            Dashboard
          </Link>
        )}

        <div className="h-[1px] w-full bg-slate-700" />

        <div className="flex-1">
          {navItems.map(item => (
            <Link
              key={item.url}
              href={item.url}
              onClick={hiddenMenu}
              className={clsx("flex text-xl last-of-type:mb-3 font-bold gap-3 items-center text-indigo-600 p-4 my-2 transition-all duration-300 hover:text-white hover:bg-indigo-600",
                {
                  "first-of-type:mt-16": user?.email === undefined || user.email === null,
                  "first-of-type:mt-3": user?.email
                }
              )}
            >
              {<item.icon size={item.size}/>}
              {item.label}
            </Link>
          ))}
        </div>

        <div className="h-[1px] w-full bg-slate-700 mb-3" />

        <AuthMenuMobile />
      </nav>
    </>
  )
}
