// actions/sendEmail.js

"use server";

import { Resend } from 'resend';
import { ContactFormEmail } from '@/components/emails/ContactFormEmail';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactFormSchema = z.object({
    name: z.string().min(2, "Il nome deve contenere almeno 2 caratteri."),
    email: z.email("L'indirizzo email non è valido."),
    message: z.string().min(5, "Il messaggio deve contenere almeno 5 caratteri."),
});

// La action ora accetta un singolo oggetto 'data'
export async function sendEmail(data) {
    const validatedFields = contactFormSchema.safeParse(data);

    if (!validatedFields.success) {
        // Restituisce l'oggetto con gli errori di validazione
        return { error: validatedFields.error.flatten().fieldErrors };
    }

    const { name, email, message } = validatedFields.data;

    try {
        await resend.emails.send({
            from: 'Portfolio Contact Form <onboarding@resend.dev>', // Indirizzo di test di Resend
            to: 'd.gregori.work@gmail.com', // <-- EMAIL DOVE RICEVERAI I MESSAGGI
            subject: `Nuovo messaggio da ${name} dal tuo portfolio!`,
            reply_to: email, // Permette di rispondere direttamente all'utente
            react: <ContactFormEmail name={name} email={email} message={message} />,
        });
        return { success: "Messaggio inviato con successo!" };
    } catch (error) {
        console.error('Email sending error:', error);
        return { error: "Si è verificato un errore durante l'invio. Riprova più tardi." };
    }
}