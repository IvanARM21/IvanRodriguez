"use client"

import { Lang } from "@/interfaces";
import { contactLang } from "@/lang";
import { useContactStore } from "@/store/contact-store";

interface Props {
    lang: Lang
}

export const TestButton = ({lang}: Props) => {
    const increasteCount = useContactStore(state => state.increasteCount);
    return (
        <button
            type="button"
            className=" btn-secondary py-2 px-4"
            onClick={increasteCount}
        >{contactLang[lang]?.buttonTest ?? contactLang["us"].buttonTest}</button>
    )
}