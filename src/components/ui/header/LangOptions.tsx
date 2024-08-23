import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { languages } from "@/data";

interface Props {
    flag: string;
    setShowOptions: React.Dispatch<React.SetStateAction<boolean>>
    hiddenMenu?: () => void;
}

export const LangOptions = ({flag, setShowOptions, hiddenMenu} : Props) => {

  const pathname = usePathname();
  const languagesArray = Object.values(languages);
  
  return (
    <>
        <div 
            className="absolute top-0 h-20 w-full left-0" 
            onMouseEnter={() => setShowOptions(true)}
            onMouseLeave={() => setShowOptions(false)}
        ></div>
        <div 
            className="absolute fade-in text-white left-32 md:top-14 flex flex-col items-center gap-2 w-full md:left-0 bg-slate-900 rounded-lg hover:bg-indigo-600 hover:shadow-md hover:shadow-indigo-600 transition-all duration-500"
            onMouseEnter={() => setShowOptions(true)}
            onMouseLeave={() => setShowOptions(false)}
        >
            {languagesArray.map(language => (
                <Link 
                    href={`${pathname}?lang=${language.code}`}
                    key={language.flag} 
                    onClick={hiddenMenu && hiddenMenu}
                    scroll={false}
                    className={`flex items-center ${flag === language.flag ? " hidden" : "py-2"}`}
                >
                    <Image 
                        src={language.flag}
                        alt=""
                        width={50}
                        height={50}
                        quality={100}
                        className="rounded-lg w-7 object-cover mr-2 cursor-pointer"
                    />
                    <p>{language.label}</p>
                </Link>
            ))}
        </div>
    </>
  )
}
