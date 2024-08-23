"use client";

import { Lang } from "@/interfaces";
import { projectsLang } from "@/lang";
import { useRouter, usePathname } from "next/navigation";

interface Props {
  id: number | null;
  lang: Lang
}

export const ButtonViewDetails = ({id, lang} : Props) => {

  const pathname = usePathname();
  const router = useRouter();

  const openModal = () => {
    router.replace(`${pathname}?lang=${lang ?? "us"}&viewProject=${id}`, {
      scroll: false
    });
  }
  
  return (
    <button
        type="button"
        onClick={openModal} 
        className="btn-primary w-full p-3 my-5"
    >{projectsLang[lang].projectButton ?? projectsLang["us"].projectButton}</button>
  )
}
