"use client";

import { Lang } from "@/interfaces";
import { contactLang } from "@/lang";
import { useContactStore } from "@/store/contact-store";
import { useSearchParams } from "next/navigation";

export const ChangeTypeButton = () => {

    const params = useSearchParams();
    const lang = params.get("lang") as Lang ?? "us";

    const type = useContactStore(state => state.type);
    const count = useContactStore(state => state.count);
    const changeType = useContactStore(state => state.changeType);

  return (
    <div className="flex justify-between items-center mb-4">
        <div
            className="flex gap-2"
        >
            <button
                type="button"
                onClick={() => changeType("console")}
                className={`${type === "console" ? "bg-slate-800 text-gray-200" : " bg-slate-950 text-gray-200 hover:border-slate-800"} border border-transparent rounded-lg px-2 py-1 transition-all duration-300`}
            >{contactLang[lang].console}</button>
            <button
                type="button"
                onClick={() => changeType("alert")}
                className={`${type === "alert" ? "bg-slate-800 text-gray-200" : " bg-slate-950 text-gray-200 hover:border-slate-800"} border border-transparent rounded-lg px-2 transition-all duration-300`}
            >{contactLang[lang].alert}</button>
        </div>

        <p
            className={`bg-slate-950 px-3 py-1 rounded-lg text-lg `}
        >{contactLang[lang].test + " " + count}</p>
    </div>
  )
}
