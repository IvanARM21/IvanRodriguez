"use client";

import { Lang } from "@/interfaces";
import { useContactStore } from "@/store/contact-store";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const PrintEmail = () => {

    const params = useSearchParams();
    const lang = params.get("lang") as Lang ?? "us";
    const message = lang === "us" ? "Email of contact: " : "Email de contacto: ";
    const myEmail = "ivanrms371@gmail.com";


    const type = useContactStore(state => state.type);
    const count = useContactStore(state => state.count);

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
        if(loaded) {
            if (type === "console") console.log(message + myEmail);
            if (type === "alert") alert(message + myEmail);
        }
    }, [count]);

    return <></>;
};
