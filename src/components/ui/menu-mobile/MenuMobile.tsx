"use client";

import Link from "next/link";
import clsx from "clsx";
import { useUiStore } from "@/store"
import { navItems } from "@/data";
import { MdClose } from "react-icons/md";
import { useSearchParams } from "next/navigation";
import { Lang } from "@/interfaces";
import { LangButton } from "../header/LangButton";

export const MenuMobile = () => {

  const params = useSearchParams();
  const lang = params.get("lang") as Lang ?? "us";
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
        " bg-slate-950 sidebar-width max-w-[500px] w-full h-full max-h-screen fixed z-30 flex flex-col px-4 top-0 right-0 gap-2 transform transition-all duration-300 md:hidden",
        {
          "translate-x-full": !isActive
        }
      )}>
        <MdClose 
          onClick={hiddenMenu}
          className="ml-auto mt-5 h-10 w-10 text-white cursor-pointer" 
        />

        <div className="flex-1 mt-5">
          {navItems.map(item => (
            <Link
              key={item.url}
              href={item.url}
              onClick={hiddenMenu}
              className={clsx("flex text-xl last-of-type:mb-3 font-bold gap-3 items-center text-indigo-600 p-4 my-2 transition-all duration-300 hover:text-white hover:bg-indigo-600",
              )}
            >
              {item.label[lang]}
            </Link>
          ))}
        </div>

        <div className="mb-10">
            <LangButton 
              hiddenMenu={hiddenMenu}
            />
        </div>
      </nav>
    </>
  )
}
