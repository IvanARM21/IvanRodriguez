
import { useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation"
import { HiChevronDown } from "react-icons/hi";
import { languages } from "@/data"; 
import { LangOptions } from "./LangOptions";
import { existsLang } from "@/utils";
import { Lang } from "@/interfaces";

interface Props {
  hiddenMenu?: () => void;
}

export const LangButton = ({hiddenMenu} : Props) => {

  const params = useSearchParams();
  const [showOptions, setShowOptions] = useState(false);

  let lang = params.get("lang") as Lang;
  if(!existsLang(lang)) lang = "us";
  const { flag, label } = languages[lang];

  return (
    <div
        onMouseEnter={() => setShowOptions(true)}
        onMouseLeave={() => setShowOptions(false)}
        className="w-fit relative flex items-center text-indigo-600 font-bold hover:text-white hover:bg-indigo-600 px-4 py-2 rounded-lg hover:shadow-md hover:shadow-indigo-600 transition-all duration-500"
    >
        <Image 
            src={flag}
            alt={`Language ${label}`}
            width={50}
            height={50}
            quality={100}
            className="rounded-lg w-7 object-cover mr-2"
        />
        <p>{label}</p>
        <HiChevronDown className="size-6"/>

        {showOptions && (
            <LangOptions 
              flag={flag} 
              setShowOptions={setShowOptions}
              hiddenMenu={hiddenMenu}
            />
        )}
    </div>
  )
}
