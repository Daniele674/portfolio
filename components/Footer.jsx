// components/Footer.jsx

'use client'; // Necessario per framer-motion

import Link from 'next/link';
import {motion} from 'framer-motion';
import {FaGithub, FaLinkedin} from 'react-icons/fa6';
import {FiMail} from 'react-icons/fi';

const navLinks = [
    {name: 'Home', href: '/'},
    {name: 'Chi sono', href: '/about'},
    {name: 'Progetti', href: '/projects'},
];

export default function Footer() {
    return (
        <motion.footer
            className="border-t border-gray-200 dark:border-gray-800 mt-16 md:mt-24"
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.2}}
            transition={{duration: 0.5}}
        >
            <div className="max-w-4xl mx-auto px-4 py-8">

                {/* Sezione superiore con nome e social */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-6">
                    <div className="text-center sm:text-left">
                        <Link href="/" className="text-xl font-bold text-gray-900 dark:text-gray-100">
                            Daniele Gregori
                        </Link>
                        <a
                            href="mailto:tua.email@esempio.com" // CAMBIA CON LA TUA EMAIL
                            className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            tua.email@esempio.com
                        </a>
                    </div>

                    <div className="flex items-center gap-5">
                        <a href="https://github.com/tuoutente" target="_blank" rel="noopener noreferrer"
                           aria-label="GitHub"
                           className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                            <FaGithub size={24}/>
                        </a>
                        <a href="https://linkedin.com/in/tuonome" target="_blank" rel="noopener noreferrer"
                           aria-label="LinkedIn"
                           className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <FaLinkedin size={24}/>
                        </a>
                    </div>
                </div>

                {/* Divisore */}
                <hr className="border-gray-200 dark:border-gray-700"/>

                {/* Sezione inferiore con copyright e "built with" */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6 text-sm">
                    <p className="text-gray-500 dark:text-gray-400">
                        © {new Date().getFullYear()} Daniele Gregori. Tutti i diritti riservati.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                        Realizzato con <span className="font-semibold">Next.js</span> e <span className="font-semibold">Tailwind CSS</span>.
                    </p>
                </div>

            </div>
        </motion.footer>
    );
}