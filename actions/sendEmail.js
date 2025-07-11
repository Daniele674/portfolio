// actions/sendEmail.js

"use server";

import {Resend} from "resend";
import {ContactFormEmail} from "@/components/emails/ContactFormEmail";
import {z} from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

// Schema con error map unificata e nuove funzioni di validazione
const contactFormSchema = z.object({
    name: z.string().min(2, {error: "Il nome è troppo corto"}),
    email: z.email({error: "L'email non è valida"}),
    message: z.string().min(5, {error: "Il messaggio è troppo corto"}),
});

export async function sendEmail(prevState, formData) {
    const safe = contactFormSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
    });

    if (!safe.success) {
        // Usa la nuova funzione per creare un oggetto errori strutturato
        const tree = z.treeifyError(safe.error);
        return {
            error: tree,
        };
    }

    const {name, email, message} = safe.data;

    try {
        await resend.emails.send({
            from: "Portfolio Contact Form <onboarding@resend.dev>",
            to: "d.gregori.work@gmail.com",
            subject: `Nuovo messaggio da ${name} dal tuo portfolio!`,
            reply_to: email,
            react: <ContactFormEmail name={name} email={email} message={message}/>,
        });
        return {success: "Messaggio inviato con successo!"};
    } catch (err) {
        console.error("Email sending error:", err);
        return {
            error: "Si è verificato un errore durante l'invio. Riprova più tardi.",
        };
    }
}
