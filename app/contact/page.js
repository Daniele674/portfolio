// app/contact/page.js

"use client";

import {useEffect, useRef, useActionState} from "react"; // <-- 1. MODIFICA QUI
import {useFormStatus} from "react-dom";
import {motion} from "framer-motion";
import {FaPaperPlane, FaGithub, FaLinkedin} from "react-icons/fa6";
import {FiMail} from "react-icons/fi";

import {sendEmail} from "@/actions/sendEmail";

function SubmitButton() {
    const {pending} = useFormStatus();
    return (
        <button
            type="submit"
            disabled={pending}
            className="mt-4 flex items-center justify-center gap-3 bg-blue-600 text-white rounded-lg py-3 px-6 font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
            {pending ? "Invio in corso..." : "Invia Messaggio"}
            {!pending && <FaPaperPlane/>}
        </button>
    );
}

export default function ContactPage() {
    const initialState = {error: null, success: null};

    // 2. MODIFICA ANCHE QUI
    const [state, formAction] = useActionState(sendEmail, initialState);

    const formRef = useRef(null);

    useEffect(() => {
        if (state.success) {
            formRef.current?.reset();
        }
    }, [state]);

    return (
        <motion.main
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
        >
            <section className="w-full py-16 md:py-24">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-3 tracking-tight">
                            Mettiamoci in Contatto
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Hai una domanda, una proposta o vuoi semplicemente salutarmi? Compila il form o usa uno dei
                            canali qui sotto.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <motion.form
                            ref={formRef}
                            action={formAction}
                            className="flex flex-col gap-6"
                            initial={{opacity: 0, x: -20}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.6}}
                        >
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name"
                                       className="text-sm font-medium text-gray-700 dark:text-gray-300">Nome</label>
                                <input
                                    type="text" id="name" name="name" placeholder="Il tuo nome" required
                                    className="bg-transparent border-b-2 border-gray-300 dark:border-gray-700 p-2 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                                />
                                {state.error?.name && <p className="text-sm text-red-500">{state.error.name[0]}</p>}
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email"
                                       className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                                <input
                                    type="email" id="email" name="email" placeholder="latua@email.com" required
                                    className="bg-transparent border-b-2 border-gray-300 dark:border-gray-700 p-2 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                                />
                                {state.error?.email && <p className="text-sm text-red-500">{state.error.email[0]}</p>}
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="message"
                                       className="text-sm font-medium text-gray-700 dark:text-gray-300">Messaggio</label>
                                <textarea
                                    id="message" name="message" placeholder="Come posso aiutarti?" required rows={5}
                                    className="bg-transparent border-b-2 border-gray-300 dark:border-gray-700 p-2 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors resize-none"
                                />
                                {state.error?.message &&
                                    <p className="text-sm text-red-500">{state.error.message[0]}</p>}
                            </div>

                            <SubmitButton/>

                            {state.success &&
                                <p className="mt-2 text-center text-green-600 dark:text-green-400 font-semibold">{state.success}</p>}
                            {typeof state.error === 'string' &&
                                <p className="mt-2 text-center text-red-600 dark:text-red-400 font-semibold">{state.error}</p>}
                        </motion.form>

                        <motion.div
                            className="space-y-8"
                            initial={{opacity: 0, x: 20}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.6, delay: 0.2}}
                        >
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Altri
                                    Canali</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-4">
                                        <FiMail className="text-2xl text-blue-500 dark:text-blue-400"/>
                                        <a href="mailto:d.gregori.work@gmail.com"
                                           className="text-lg text-gray-700 dark:text-gray-300 hover:underline">d.gregori.work@gmail.com</a>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <FaLinkedin className="text-2xl text-blue-500 dark:text-blue-400"/>
                                        <a href="https://linkedin.com/in/daniele-gregori" target="_blank"
                                           rel="noopener noreferrer"
                                           className="text-lg text-gray-700 dark:text-gray-300 hover:underline">LinkedIn</a>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <FaGithub className="text-2xl text-blue-500 dark:text-blue-400"/>
                                        <a href="https://github.com/Daniele-Gregori" target="_blank"
                                           rel="noopener noreferrer"
                                           className="text-lg text-gray-700 dark:text-gray-300 hover:underline">GitHub</a>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </motion.main>
    );
}