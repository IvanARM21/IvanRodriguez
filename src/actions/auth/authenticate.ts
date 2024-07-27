"use server";

import prisma from "@/lib/prisma";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { User, UserAuth } from "@/interfaces";

interface Authenticate {
    email: string;
    password: string;
}

const secret = process.env.JWT_SECRET || 'default-value'

export const authenticate = async ({ email, password }: Authenticate): Promise<{ token: string, user: UserAuth, error: boolean, message: string } | { message: string, error: boolean, user: {}, token: null}> => {
    try {
        const user = await prisma.user.findFirst({
            where: {
                email: email
            }
        });
        if (!user) {
            throw new Error("User not found");
        }
        
        // Validate Passwords
        if (!bcrypt.compareSync(password, user.password)) {
            throw new Error("Incorrect Password");
        } 

        // Create a jwt
        const token = jwt.sign({id: user.id}, secret, {
            expiresIn: '30d'
        });

        const { password: _, ...rest } = user;
        
        return { 
            token: token,
            user: rest,
            message: "¡Success! Redirect to Dashboard",
            error: false,
        };
    } catch (error: unknown) {
        console.log(error);
        if (error instanceof Error) {
            return { message: error.message, error: true, user: {}, token: null };
        }
        return { message: "", error: true, user: {}, token: null };
    }
};