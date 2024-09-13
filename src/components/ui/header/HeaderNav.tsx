"use client";

import Link from "next/link"
import { useSearchParams } from "next/navigation";
import { Lang } from "@/interfaces";
import { navItems } from "@/data"
import { LangButton } from "./LangButton"
import { Suspense } from 'react'


export const HeaderNav = () => {

  
  const params = useSearchParams();
  const lang = params.get("lang") as Lang ?? "us";
  
  return (
    <nav className="gap-2 hidden md:flex items-center">
        {navItems.map(item => (
            <Link 
                key={item.url}
                href={item.url}
                className="text-indigo-600 font-bold text-xl hover:text-white hover:bg-indigo-600 px-4 py-2 rounded-lg hover:shadow-md hover:shadow-indigo-600 transition-all duration-500"
            >{item.label[lang]}</Link>
        ))}
        <LangButton lang={lang} />
    </nav>
  )
}

export const HeaderNavSuspense = () => {
  return (
    <Suspense>
      <HeaderNav />
    </Suspense>
  )
}