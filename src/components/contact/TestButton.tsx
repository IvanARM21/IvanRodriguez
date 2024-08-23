"use client"

import { Lang } from "@/interfaces";
import { contactLang } from "@/lang";
import { useContactStore } from "@/store/contact-store";
import { useSearchParams } from "next/navigation";

export const TestButton = () => {

    const params = useSearchParams();
    const lang = params.get("lang") as Lang ?? "us";

    const increasteCount = useContactStore(state => state.increasteCount);
    return (
        <button
            type="button"
            className=" btn-secondary py-2 px-4"
            onClick={increasteCount}
        >{contactLang[lang].buttonTest}</button>
    )
}