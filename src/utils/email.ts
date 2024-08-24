"use server";

import { Resend } from "resend";
import { MailSend } from "@/interfaces";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMail = async (formData : MailSend) => {
    try {
        const { error } = await resend.emails.send({
            from: `${formData.email} <onboarding@resend.dev>`,
            to: "ivanrms371@gmail.com",
            subject: formData.subject,
            html: `
                <p>Hi I'm ${formData.name},</p>
                <p>${formData.message}</p>
            `
        });
        
        if(error) {
            return { 
                error: true,
                us: { message: "An unexpected error has occurred, try again later" },
                es: { message: "Ha ocurrido un error inesperado, intenté más tarde" }
            }
        }
        return { 
            error: false,
            us: { message: "The message has been sent correctly" },
            es: { message: "El mensaje se ha enviado correctamente" }
        }

    } catch (error) {
        return { 
            error: true,
            us: { message: "An unexpected error has occurred, try again later" },
            es: { message: "Ha ocurrido un error inesperado, intenté más tarde" }
        }
    }
}