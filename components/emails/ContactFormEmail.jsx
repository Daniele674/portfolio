// components/emails/ContactFormEmail.jsx

import React from 'react';
import {
    Html,
    Body,
    Head,
    Heading,
    Container,
    Preview,
    Section,
    Text,
    Hr,
} from '@react-email/components';
import {Tailwind} from '@react-email/tailwind';

export const ContactFormEmail = ({name, email, message}) => (
    // Html è il componente radice di ogni email
    <Html>
        <Head/>
        {/* Preview è il testo di anteprima che si vede nella inbox dell'email client */}
        <Preview>Nuovo messaggio da {name} dal tuo portfolio</Preview>
        {/* Tailwind permette di usare le classi di Tailwind direttamente nel JSX */}
        <Tailwind>
            <Body className="bg-gray-100 text-black">
                <Container
                    className="bg-white border border-gray-200 rounded-lg shadow-sm my-10 mx-auto px-10 py-8 max-w-[600px]">
                    {/* Intestazione */}
                    <Section className="mt-8">
                        <Heading className="text-2xl font-bold text-center text-gray-800">
                            Nuovo Messaggio dal Portfolio
                        </Heading>
                    </Section>

                    {/* Dettagli del Mittente */}
                    <Section className="my-8 text-center">
                        <Text className="text-lg font-semibold text-gray-700">
                            {name}
                        </Text>
                        <Text className="text-gray-500">
                            <a href={`mailto:${email}`} className="text-blue-600 underline">
                                {email}
                            </a>
                        </Text>
                    </Section>

                    <Hr className="border-gray-300"/>

                    {/* Contenuto del Messaggio */}
                    <Section className="my-8">
                        <Heading as="h2" className="text-xl font-semibold text-gray-800">
                            Messaggio:
                        </Heading>
                        <Text className="text-gray-700 text-base leading-loose whitespace-pre-wrap">
                            {message}
                        </Text>
                    </Section>

                    <Hr className="border-gray-300"/>

                    {/* Footer dell'Email */}
                    <Section className="mt-8 text-center">
                        <Text className="text-xs text-gray-400">
                            Questo messaggio è stato inviato automaticamente dal form di contatto
                            su {new Date().getFullYear()} Daniele Gregori Portfolio.
                        </Text>
                    </Section>

                </Container>
            </Body>
        </Tailwind>
    </Html>
);