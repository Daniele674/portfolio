// app/contact/page.js

"use client";

import {useState} from "react";
import {motion} from "framer-motion";
import {FaGithub, FaLinkedin} from "react-icons/fa6";
import {FiMail} from "react-icons/fi";
import {sendEmail} from "@/actions/sendEmail";
import {Button as StatefulButton} from "@/components/ui/stateful-button";

export default function ContactPage() {
    const [formData, setFormData] = useState({name: "", email: "", message: ""});
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleFormSubmit = async () => {
        setErrors({});
        setSuccessMessage("");
        const result = await sendEmail(formData);
        if (result.error) {
            setErrors(result.error);
            throw new Error("La validazione del form è fallita.");
        }
        if (result.success) {
            setSuccessMessage(result.success);
            setFormData({name: "", email: "", message: ""});
        }
    };

    return (
        <motion.main initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5}}>
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
                        <motion.div
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
                                    value={formData.name} onChange={handleChange}
                                    className="bg-transparent border-b-2 border-gray-300 dark:border-gray-700 p-2 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                                />
                                {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name[0]}</p>}
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email"
                                       className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                                <input
                                    type="email" id="email" name="email" placeholder="latua@email.com" required
                                    value={formData.email} onChange={handleChange}
                                    className="bg-transparent border-b-2 border-gray-300 dark:border-gray-700 p-2 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                                />
                                {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email[0]}</p>}
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="message"
                                       className="text-sm font-medium text-gray-700 dark:text-gray-300">Messaggio</label>
                                <textarea
                                    id="message" name="message" placeholder="Come posso aiutarti?" required rows={5}
                                    value={formData.message} onChange={handleChange}
                                    className="bg-transparent border-b-2 border-gray-300 dark:border-gray-700 p-2 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors resize-none"
                                />
                                {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message[0]}</p>}
                            </div>
                            <StatefulButton
                                type="button"
                                onClick={handleFormSubmit}
                                className="mt-4 bg-blue-600 hover:ring-blue-500"
                            >
                                Invia Messaggio
                            </StatefulButton>
                            {successMessage &&
                                <p className="mt-2 text-center text-green-600 dark:text-green-400 font-semibold">{successMessage}</p>}
                            {errors.form &&
                                <p className="mt-2 text-center text-red-600 dark:text-red-400 font-semibold">{errors.form}</p>}
                        </motion.div>
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
                                        <a href="https://github.com/Daniele674" target="_blank"
                                           rel="noopener noreferrer"
                                           className="text-lg text-gray-700 dark:text-gray-300 hover:underline">GitHub</a>
                                    </li>
                                </ul>
                            </div>
                            {/* --- NUOVA SEZIONE PER IL CV --- */}
                            <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                                    Riepilogo Completo
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    Preferisci un documento formale? Puoi scaricare il mio CV completo in formato PDF.
                                </p>
                                <a
                                    href="/CV-Daniele-Gregori.pdf"
                                    download="CV-Daniele-Gregori.pdf"
                                    className="inline-flex items-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-5 py-2 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                                         fill="currentColor">
                                        <path fillRule="evenodd"
                                              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    Scarica il CV
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </motion.main>
    );
}