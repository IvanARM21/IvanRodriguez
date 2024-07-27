"use client";

import Link from "next/link";
import clsx from "clsx";
import { useUiStore } from "@/store"
import { navItems } from "@/data";
import { MdClose } from "react-icons/md";
import { AuthMenuMobile } from "./AuthMenuMobile";

export const MenuMobile = () => {

  const hiddenMenu = useUiStore(state => state.hiddenMenu);
  const isActive = useUiStore(state => state.isActive);

  return (
    <>
      {isActive && (
        <div 
          onClick={hiddenMenu}
          className="fade-in inset-0 z-20 bg-indigo-600 fixed bg-opacity-10 backdrop-blur-sm transition-all duration-300 md:hidden"
        />
      )}

      <nav className={clsx(
        " bg-slate-950 max-w-[320px] w-full overflow-auto h-screen fixed z-30 flex flex-col px-4 top-0 right-0 gap-2 transform transition-all duration-300 md:hidden",
        {
          "translate-x-full": !isActive
        }
      )}>
        <MdClose 
          onClick={hiddenMenu}
          className="ml-auto right-2 top-2 h-10 w-10 mb-10 text-white cursor-pointer absolute" 
        />

        {navItems.map(item => (
          <Link
            key={item.url}
            href={item.url}
            onClick={hiddenMenu}
            className="flex text-xl first-of-type:mt-16 font-bold justify-between items-center border-b border-indigo-600 text-indigo-600 p-4 my-2 transition-all duration-300 hover:text-white hover:bg-indigo-600"
          >
            {<item.icon size={item.size}/>}
            {item.label}
          </Link>
        ))}

        <AuthMenuMobile />
      </nav>
    </>
  )
}
