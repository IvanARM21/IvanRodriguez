"use client"

import { useContactStore } from "@/store/contact-store";

export const TestButton = () => {
    const increasteCount = useContactStore(state => state.increasteCount);
    return (
        <button
            type="button"
            className=" btn-secondary py-2 px-4"
            onClick={increasteCount}
        >Test</button>
    )
}