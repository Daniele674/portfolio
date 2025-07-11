import React from 'react';

export const ContactFormEmail = ({ name, email, message }) => (
    <div>
        <h1>Nuovo Messaggio dal Tuo Portfolio!</h1>
        <p>Hai ricevuto un nuovo messaggio da:</p>
        <ul>
            <li><strong>Nome:</strong> {name}</li>
            <li><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></li>
        </ul>
        <hr />
        <h2>Messaggio:</h2>
        <p>{message}</p>
        <hr />
        <p><em>Questo messaggio è stato inviato tramite il form di contatto del tuo sito portfolio.</em></p>
    </div>
);