// components/Footer.jsx

'use client';

import Link from 'next/link';
import {motion} from 'framer-motion';
import {FaGithub, FaLinkedin} from 'react-icons/fa6';

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
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-6">
                    <div className="text-center sm:text-left">
                        <Link href="/" className="text-xl font-bold text-gray-900 dark:text-gray-100">
                            Daniele Gregori
                        </Link>
                        <a
                            href="mailto:d.gregori.work@gmail.com"
                            className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            d.gregori.work@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center gap-5">
                        <a href="https://github.com/Daniele-Gregori"
                           target="_blank" rel="noopener noreferrer"
                           aria-label="GitHub"
                           className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                            <FaGithub size={24}/>
                        </a>
                        <a href="https://linkedin.com/in/daniele-gregori"
                           target="_blank" rel="noopener noreferrer"
                           aria-label="LinkedIn"
                           className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <FaLinkedin size={24}/>
                        </a>
                    </div>
                </div>
                <hr className="border-gray-200 dark:border-gray-700"/>
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6 text-sm">
                    <p className="text-gray-500 dark:text-gray-400">
                        © {new Date().getFullYear()} Daniele Gregori.
                    </p>
                    <a
                        href="/CV-Daniele-Gregori.pdf"
                        download="CV-Daniele-Gregori.pdf"
                        className="font-semibold text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
                    >
                        Scarica il mio CV
                    </a>
                    <p className="text-gray-500 dark:text-gray-400">
                        Realizzato con Next.js & Tailwind CSS.
                    </p>
                </div>
            </div>
        </motion.footer>
    );
}