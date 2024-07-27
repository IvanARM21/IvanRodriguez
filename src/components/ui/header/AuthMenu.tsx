"use client";

import Link from "next/link";
import { useAuthStore } from "@/store/auth-store";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


export const AuthMenu = () => {

    const router = useRouter();
    const user = useAuthStore(state => state.user);
    const signOut = useAuthStore(state => state.signOut);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, [loaded]);

    const onClick = () => {
        signOut();
        router.replace("/auth/login");
    }

    const className = "text-indigo-600 hidden md:block font-bold text-xl hover:text-white hover:bg-indigo-600 px-4 py-2 rounded-md hover:shadow-md hover:shadow-indigo-600 transition-all duration-500"

    if(!loaded) return

  return (
    <>
        {user ? (
            <>
                <button
                    type="button"
                    onClick={onClick}
                    className={className}
                >
                    Sign Out
                </button>
            </>
        ) : (
            <Link
                href={"/auth/login"}
                className={className}
            >
                Sign In
            </Link>
        )}
    </>
  )
}
