"use client";

import { Lang } from "@/interfaces";
import { contactLang } from "@/lang";
import { useContactStore } from "@/store/contact-store";
import { useMemo } from "react";

interface Props {
    lang: Lang
}
export const UsignVar = ({lang} : Props) => {

    const type = useContactStore(state => state.type);
    const isConsole = useMemo(() => type === "console", [type]);
        
    return (
        <>
            <p className="text-slate-400 mt-5 text-nowrap text-xl">
                {`// ${contactLang[lang].firstComment}`}
            </p>
            <p className="font-bold text-nowrap text-xl">
                {isConsole ? (
                    <>
                        <span className="text-gray-300">console.</span>
                        <span className="text-amber-300">log</span>
                    </>
                ) : (
                    <span className="text-amber-300">alert</span>
                )}
                <span className="text-fuchsia-600">{"("}</span>
                <span className="text-emerald-500">{`"${contactLang[lang].consoleText} "`}</span>
                <span className="text-indigo-500">{" "} + {" "}</span>
                <span className="text-gray-300">{contactLang[lang].varMyEmail}</span>
                <span className="text-fuchsia-600">{")"}</span>
                <span>;</span>
            </p>
            
        </>
            
    )
}