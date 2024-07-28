"use client";

import { useContactStore } from "@/store/contact-store";
import { useEffect, useMemo, useRef, useState } from "react";

export const PrintEmail = () => {

    const message = "Email of contact: ";
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
