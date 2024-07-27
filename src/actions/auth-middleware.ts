"use server";
import prisma from "@/lib/prisma";
import jwt, { JwtPayload } from "jsonwebtoken"
import { redirect } from "next/dist/server/api-utils";
import { cookies } from "next/headers";

interface DecodedToken extends JwtPayload {
    id: number
}

export const authMiddleware = async () => {
    const cookieStore = cookies();
    let token;

    if(cookieStore.has("token")) {
        token = cookieStore.get("token")?.value ?? undefined;
    }


    // Redirect the user to login
    if(!token) {
        return {
            error: true,
            redirect: "/auth/login"
        }
    }

    // Get a user
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET || "") as DecodedToken;

        if(!decodedToken.id) {
            return {
                error: true,
                redirect: "/auth/login"
            }
        }
        // Search the User
        const user = await prisma.user.findFirst({
            where: { id: decodedToken.id }
        });

        if(!user) {
            return {
                error: true,
                redirect: "/auth/login"
            }
        }

        const { password, ...rest } = user;

        return {
            error: false,
            user: rest,
            redirect: ""
        };
    } catch (error) {
        return {
            error: true,
            redirect: "/auth/login"
        }
    }
}