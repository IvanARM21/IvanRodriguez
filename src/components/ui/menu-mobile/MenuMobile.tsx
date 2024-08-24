"use client";

import { Lang } from "@/interfaces";
import { footerLang } from "@/lang";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export const MenuMobile = () => {
  const params = useSearchParams();
  const lang = (params.get("lang") as Lang) ?? "us";

  return (
    <p className="text-center text-xl text-gray-400">
      <span className="block md:inline">&copy; {new Date().getFullYear()} {" "}
        <span>{"<IvanRodriguez />"}</span> 
      </span> {" "}
      <span className="block md:inline">{footerLang[lang].rights}</span>
    </p>
  );
};

export const MenuMobileSuspense = () => {
  return (
    <Suspense>
      <MenuMobile />
    </Suspense>
  )
}
