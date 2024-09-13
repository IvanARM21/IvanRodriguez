
import { useState } from "react";
import Image from "next/image";
import { HiChevronDown } from "react-icons/hi";
import { languages } from "@/data"; 
import { LangOptions } from "./LangOptions";
import { Lang } from "@/interfaces";

interface Props {
  lang: Lang
  hiddenMenu?: () => void;
}

export const LangButton = ({hiddenMenu, lang} : Props) => {

  const [showOptions, setShowOptions] = useState(false);

  const { flag, label } = languages[lang];

  return (
    <div
        onMouseEnter={() => setShowOptions(true)}
        onMouseLeave={() => setShowOptions(false)}
        className="w-fit relative cursor-pointer flex items-center text-indigo-600 font-bold hover:text-white hover:bg-indigo-600 px-4 py-2 rounded-lg hover:shadow-md hover:shadow-indigo-600 transition-all duration-500"
    >
        <Image 
            src={flag}
            alt={`Language ${label}`}
            width={50}
            height={50}
            quality={100}
            className="rounded-lg w-7 object-cover mr-2 text-xl"
        />
        <p className="text-xl">{label}</p>
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
