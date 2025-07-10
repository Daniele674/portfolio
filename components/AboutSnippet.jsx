// components/AboutSnippet.jsx

'use client' // Necessario per usare framer-motion

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

export default function AboutSnippet() {
    return (
        <motion.section
            id="about-snippet"
            className="mb-16 md:mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }} // L'animazione parte quando il 30% della sezione è visibile
            transition={{ duration: 0.6 }}
        >
            <h2 className="text-center text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">
                Chi sono
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">

                {/* Colonna Immagine (2/5 della larghezza su schermi grandi) */}
                <div className="md:col-span-2">
                    <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-md">
                        {/* Consiglio: usa una foto diversa da quella della Hero Section */}
                        <Image
                            src="/about-photo.jpg" // CAMBIA CON LA TUA FOTO!
                            alt="Daniele al lavoro"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 40vw"
                        />
                    </div>
                </div>

                {/* Colonna Testo (3/5 della larghezza su schermi grandi) */}
                <div className="md:col-span-3">
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                        Sono un informatico con la passione per la creazione di esperienze web complete, dalla progettazione dell'interfaccia utente fino all'architettura del server. Credo nel codice pulito, scalabile e in soluzioni che risolvono problemi reali.
                    </p>

                    <ul className="space-y-3 mb-8">
                        <li className="flex items-center gap-3">
                            <FiCheckCircle className="text-blue-500 dark:text-blue-400 flex-shrink-0" size={20} />
                            <span className="text-gray-800 dark:text-gray-200">Sviluppo di applicazioni React e Next.js performanti</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FiCheckCircle className="text-blue-500 dark:text-blue-400 flex-shrink-0" size={20} />
                            <span className="text-gray-800 dark:text-gray-200">Progettazione di interfacce UI/UX intuitive</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FiCheckCircle className="text-blue-500 dark:text-blue-400 flex-shrink-0" size={20} />
                            <span className="text-gray-800 dark:text-gray-200">Interesse per le tecnologie emergenti come la blockchain</span>
                        </li>
                    </ul>

                    <Link
                        href="/about"
                        className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                        Leggi la mia storia →
                    </Link>
                </div>

            </div>
        </motion.section>
    );
}