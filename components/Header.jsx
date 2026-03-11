// components/Header.jsx

'use client'

import {useState, useEffect} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {motion, AnimatePresence} from 'framer-motion';
import ThemeSwitcher from './ThemeSwitcher';
import {FiMenu, FiX} from 'react-icons/fi';

const navLinks = [
    {name: 'Home', href: '/'},
    {name: 'Chi sono', href: '/about'},
    {name: 'Progetti', href: '/projects'},
    {name: 'Contatti', href: '/contact'},
];

export default function Header() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false); // Stato per il menu mobile
    const [scrolled, setScrolled] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
             setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Spazio vuoto segnaposto per compensare l'altezza dell'header fixed ed evitare scatti o sovrapposizioni iniziali */}
            <div className={`w-full transition-all duration-300 ${scrolled ? 'h-[52px]' : 'h-[76px]'}`} aria-hidden="true" />
            
            {/* Header diventa fixed e usa layoutRoot per isolare le coordinate di Framer Motion dallo scroll del documento */}
            <motion.header
                layoutRoot
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md border-b ${
                    scrolled 
                        ? 'bg-white/80 dark:bg-gray-900/80 py-3 shadow-md border-gray-200 dark:border-gray-800' 
                        : 'bg-white/50 dark:bg-gray-900/50 py-5 border-transparent'
                }`}
            >
            <nav className="w-full max-w-4xl mx-auto flex items-center justify-between px-4">
                {/* Logo / Nome */}
                <Link
                    href="/"
                    className="font-bold text-xl text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    onClick={() => setIsOpen(false)} // Chiude il menu se aperto
                >
                    Daniele Gregori
                </Link>

                {/* Navigazione Desktop */}
                <div className="hidden md:flex items-center gap-2 sm:gap-4 relative" onMouseLeave={() => setHoveredLink(null)}>
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onMouseEnter={() => setHoveredLink(link.name)}
                                className={`relative px-3 py-2 text-sm sm:text-base font-medium transition-colors ${
                                    isActive
                                        ? 'text-blue-600 dark:text-blue-400'
                                        : 'text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white'
                                }`}
                            >
                                {/* Hover Background */
                                hoveredLink === link.name && (
                                    <motion.span
                                        className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-lg -z-10"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.15 }}
                                    />
                                )}
                                {link.name}
                                
                                {/* Active Underline */}
                                {isActive && (
                                    <motion.div
                                        className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-blue-600 dark:bg-blue-400 origin-center"
                                        initial={{ opacity: 0, scaleX: 0 }}
                                        animate={{ opacity: 1, scaleX: 1 }}
                                        transition={{ duration: 0.2 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                    <div className="pl-2 border-l border-gray-200 dark:border-gray-700">
                        <ThemeSwitcher/>
                    </div>
                </div>

                {/* Menu Hamburger (visibile solo su mobile) */}
                <div className="md:hidden flex items-center gap-4">
                    <ThemeSwitcher/>
                    <button onClick={() => setIsOpen(!isOpen)} aria-label="Apri menu" className="p-2 -m-2">
                        <FiMenu size={24} className="text-gray-800 dark:text-gray-200"/>
                    </button>
                </div>
            </nav>

            {/* Overlay Menu Mobile (animato) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -20}}
                        transition={{duration: 0.2}}
                        className="md:hidden absolute top-0 left-0 w-full bg-white/98 dark:bg-gray-900/98 backdrop-blur-xl shadow-2xl z-40 border-b border-gray-200 dark:border-gray-800"
                    >
                        <div
                            className="flex justify-between items-center px-4 py-5 border-b border-gray-200 dark:border-gray-800">
                            <Link href="/" className="font-bold text-xl text-gray-900 dark:text-gray-100" onClick={() => setIsOpen(false)}>
                                Daniele Gregori
                            </Link>
                            <button onClick={() => setIsOpen(false)} aria-label="Chiudi menu" className="p-2 -m-2">
                                <FiX size={24} className="text-gray-800 dark:text-gray-200"/>
                            </button>
                        </div>
                        <div className="flex flex-col items-center py-6 px-4 gap-2">
                            {navLinks.map((link, index) => {
                                const isActive = pathname === link.href;
                                return (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 + 0.1 }}
                                    className="w-full"
                                >
                                    <Link
                                        href={link.href}
                                        className={`block font-medium w-full text-center py-4 rounded-xl transition-colors ${
                                            isActive
                                                ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400'
                                                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                                        }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            )})}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
        </>
    );
}