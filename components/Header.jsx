// components/Header.jsx

'use client'

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeSwitcher from './ThemeSwitcher';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Chi sono', href: '/about' },
    { name: 'Progetti', href: '/projects' },
    { name: 'Contatti', href: '/contact' },
];

export default function Header() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false); // Stato per il menu mobile

    return (
        // Header diventa sticky, con sfondo sfocato e un bordo inferiore
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
            <nav className="w-full max-w-4xl mx-auto flex items-center justify-between py-4 px-4">
                {/* Logo / Nome */}
                <Link
                    href="/"
                    className="font-bold text-xl text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    onClick={() => setIsOpen(false)} // Chiude il menu se aperto
                >
                    Daniele Gregori
                </Link>

                {/* Navigazione Desktop */}
                <div className="hidden md:flex items-center gap-4 sm:gap-6">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm sm:text-base font-medium transition-colors ${
                                    isActive
                                        ? 'text-blue-600 dark:text-blue-400'
                                        : 'text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white'
                                }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                    <ThemeSwitcher />
                </div>

                {/* Menu Hamburger (visibile solo su mobile) */}
                <div className="md:hidden flex items-center gap-4">
                    <ThemeSwitcher />
                    <button onClick={() => setIsOpen(!isOpen)} aria-label="Apri menu">
                        <FiMenu size={24} className="text-gray-800 dark:text-gray-200" />
                    </button>
                </div>
            </nav>

            {/* Overlay Menu Mobile (animato) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden absolute top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-lg z-40"
                    >
                        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-200 dark:border-gray-800">
                            <Link href="/" className="font-bold text-xl" onClick={() => setIsOpen(false)}>
                                Daniele Gregori
                            </Link>
                            <button onClick={() => setIsOpen(false)} aria-label="Chiudi menu">
                                <FiX size={24} className="text-gray-800 dark:text-gray-200" />
                            </button>
                        </div>
                        <div className="flex flex-col items-center py-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="font-medium text-lg w-full text-center py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}