import { create } from "zustand";
import { getCookie, setCookie, deleteCookie } from "cookies-next";
import { UserAuth } from "@/interfaces";

interface AuthStore {
    token: string;
    user: UserAuth | undefined;
    setToken: (token : string) => void;
    signOut: () => void;
    signIn: (user : UserAuth) => void;
}

// age = 60 Seconds * 60 Minutes * 24 Hours * 28 Days * 
const cookieAge = 60 * 60 * 24 * 28;

const userInitialValues = undefined;

const useAuthStore = create<AuthStore>((set) => ({
    token: getCookie("token") ?? "",
    user: userInitialValues,
    setToken: (token) => {
        setCookie('token', token, {
            maxAge: cookieAge
        });
        set({token: getCookie('token') ?? ""});
    },
    signOut: () => {
        deleteCookie("token")
        set({token: "", user: userInitialValues});
    },
    signIn: (user: UserAuth) => {
        if(user.id) {
            set({user: user});
        }
    }
}));

export { useAuthStore };
