"use client";

import { useContactStore } from "@/store/contact-store";
import { useEffect, useState } from "react";

export const PrintEmail = () => {

    const message = "Email of contact: ";
    const myEmail = "ivanrms371@gmail.com";

    const [loaded, setLoaded] = useState(false);
    const type = useContactStore(state => state.type);
    const count = useContactStore(state => state.count);

    useEffect(() => {
        setLoaded(true);
        if(loaded) {
            if(type === "console") console.log(message + myEmail);
            if(type === "alert") alert(message + myEmail)
        }
    }, [count]);

    return <></>;
};
