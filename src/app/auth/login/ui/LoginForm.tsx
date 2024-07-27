"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authenticate } from "@/actions";
import { Alert } from "@/components";
import { useAuthStore } from "@/store/auth-store";

export const LoginForm = () => {

    const router = useRouter();
    const [login, setLogin] = useState({
        email: "",
        password: ""
    });
    const [isBlur, setIsBlur] = useState({
        email: false,
        password: false
    });
    const [alert, setAlert] = useState({
        message: "",
        error: true
    });
    const [isSubmit, setIsSubmit] = useState(false);
    const setToken = useAuthStore(state => state.setToken);
    const signIn = useAuthStore(state => state.signIn);

    const onInput = (e: React.FormEvent<HTMLInputElement>) => {
        setLogin({
            ...login,
            [e.currentTarget.id]: e.currentTarget.value
        });
    }

    const onBlur = (e: React.FormEvent<HTMLInputElement>) => {
        setIsBlur({
            ...isBlur,
            [e.currentTarget.id]: true
        })
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmit(true);

        setIsBlur({
            email: true,
            password: true
        });

        if(Object.values(login).includes("")) {
            setIsSubmit(false);
            return
        }

        // Todo: Call the Server Action
        const result = await authenticate(login);

        setAlert({
            message: result.message,
            error: result.error
        });

        setIsSubmit(false);

        if(result.token) {
            setToken(result.token);
            signIn(result.user);
            router.replace("/dashboard");
        }
    }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2">
        {alert.message !== "" && (
            <div className="flex justify-center mt-3">
                <Alert 
                    isError={alert.error}
                    message={alert.message}
                />
            </div>
        )}
        <div className="flex flex-col gap-2">
            <label 
                htmlFor="email" 
                className="text-lg sm:text-xl font-bold"
            >Email</label>
            <input 
                type="email" 
                className="bg-slate-800 p-3 rounded-md" 
                id="email"
                placeholder="Your Email"
                onInput={onInput}
                onBlur={onBlur}
            />
            {login.email === "" && isBlur.email && <Alert 
                isError={true}
                message="Email cannot be empty"
            />}
        </div>
        <div className="flex flex-col gap-2">
            <label 
                htmlFor="password" 
                className="text-lg sm:text-xl font-bold"
            >Password</label>
            <input 
                type="password" 
                className="bg-slate-800 p-3 rounded-md" 
                id="password"
                placeholder="Your Password"
                onInput={onInput}
                onBlur={onBlur}
            />
            {login.password === "" && isBlur.password && <Alert 
                isError={true}
                message="Password cannot be empty"
            />}
        </div>

        <input 
            type="submit" 
            value="Access Dashboard"
            disabled={isSubmit}
            className="btn-primary px-4 py-3 mt-6 cursor-pointer"
        />
    </form>
  )
}
