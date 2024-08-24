"use client";

import { Lang } from "@/interfaces";
import { footerLang } from "@/lang";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

export const Copy = () => {
  const [loaded, setLoaded] = useState(false);
  
  const params = useSearchParams();
  const lang = params.get("lang") as Lang ?? "us";

  useEffect(() => {
    setLoaded(true);
  }, [loaded]);

  if(!loaded) return <></>

  return (
    <p className="text-center text-xl text-gray-400">
      <span className="block md:inline ">&copy; {new Date().getFullYear()} {" "}
        <span>{"<IvanRodriguez />"}</span> 
      </span> {" "}
      <span className="block md:inline">{footerLang[lang].rights}</span></p>
  )
}

export const CopySuspense = () => {
  return (
    <Suspense>
      <Copy />
    </Suspense>
  )
}