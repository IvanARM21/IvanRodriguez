"use client";

import Link from "next/link";
import { useAuthStore } from "@/store/auth-store";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";


export const AuthMenuMobile = () => {

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

    const className = `flex text-xl mt-3 font-bold gap-3 items-center text-indigo-600 p-4 transition-all duration-300 hover:text-white hover:bg-indigo-600`

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
                    <FaSignOutAlt size={24} />
                    Sign Out
                </button>
            </>
        ) : (
            <Link
                href={"/auth/login"}
                className={className}
            >
                <FaSignInAlt size={24} />
                Sign In
            </Link>
        )}
    </>
  )
}
