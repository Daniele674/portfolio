// components/Header.jsx

'use client' // Necessario per usare il 'usePathname' hook

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeSwitcher from './ThemeSwitcher'

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Chi sono', href: '/about' },
    { name: 'Progetti', href: '/projects' },
    { name: 'Contatti', href: '/contact' },
]

export default function Header() {
    const pathname = usePathname()

    return (
        <header className="w-full max-w-4xl mx-auto py-4 px-2">
            <nav className="flex items-center justify-between">
                <Link href="/" className="font-bold text-xl hover:text-blue-600 transition-colors">
                    Daniele Gregori
                </Link>
                <div className="flex items-center gap-4 sm:gap-6">
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
            </nav>
        </header>
    )
}