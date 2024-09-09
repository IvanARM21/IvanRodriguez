"use client";

import { Lang } from "@/interfaces";
import { projectsLang } from "@/lang";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

interface Props {
  id: number | null;
  lang: Lang
}

export const ButtonViewDetails = ({id, lang} : Props) => {

  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const router = useRouter();

  const openModal = () => {

    const newSearchParams = new URLSearchParams(searchParams.toString());
    if(lang) newSearchParams.set("lang", lang);
    if(id) newSearchParams.set("viewProject", id.toString());
    
    router.replace(`${pathname}?${newSearchParams}`, {
      scroll: false
    });
  }
  
  return (
    <button
        type="button"
        onClick={openModal} 
        className="btn-primary w-full p-3 my-5"
    >{projectsLang[lang]?.projectButton ?? projectsLang["us"].projectButton}</button>
  )
}
