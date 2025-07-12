// components/CombinedIntroSection.jsx

'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import ProfileCard from '@/components/ui/Components/ProfileCard/ProfileCard';
import '@/components/ui/Components/ProfileCard/ProfileCard.css';
// Ho importato le icone più adatte dal tuo CV
import { FaShieldAlt, FaCode, FaNetworkWired } from 'react-icons/fa';

export default function CombinedIntroSection() {
    const router = useRouter();

    const handleContactClick = () => {
        router.push('/contact');
    };

    return (
        <motion.section
            className="my-16 md:my-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-16 items-center">

                {/* Colonna Sinistra: La Profile Card */}
                <motion.div
                    className="md:col-span-2 flex justify-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <ProfileCard
                        name="Daniele Gregori"
                        // Ho aggiornato il titolo per riflettere la tua specializzazione
                        title="Cybersecurity Specialist"
                        handle="daniele-gregori" // Usiamo il tuo nome come handle
                        status="Aperto a collaborazioni"
                        contactText="Contattami →"
                        onContactClick={handleContactClick}
                        avatarUrl="/me.png"
                        miniAvatarUrl="/me.png"
                        enableTilt={true}
                        innerGradient="linear-gradient(145deg, #181c27, #222838)"
                        behindGradient="radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(59,130,246,0) 60%)"
                    />
                </motion.div>

                {/* Colonna Destra: Testo aggiornato dal CV */}
                <motion.div
                    className="md:col-span-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                        Costruisco e Proteggo Esperienze Digitali.
                    </h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                        {/* Testo riscritto per essere più incisivo e basato sul CV */}
                        Studente di Laurea Magistrale in Computer Science con specializzazione in Cybersecurity. La mia passione è unire lo sviluppo di software robusto con le strategie di sicurezza necessarie per difenderlo.
                    </p>

                    {/* Lista aggiornata con le competenze del CV */}
                    <ul className="space-y-3 mb-8">
                        <li className="flex items-center gap-3">
                            <FaShieldAlt className="text-blue-500 dark:text-blue-400 flex-shrink-0" size={20}/>
                            <span className="text-gray-800 dark:text-gray-200">Penetration Testing & Ethical Hacking</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaCode className="text-blue-500 dark:text-blue-400 flex-shrink-0" size={20}/>
                            <span className="text-gray-800 dark:text-gray-200">Secure Programming e Sviluppo Web/Mobile</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaNetworkWired className="text-blue-500 dark:text-blue-400 flex-shrink-0" size={20}/>
                            <span className="text-gray-800 dark:text-gray-200">Networking e Architetture Distribuite</span>
                        </li>
                    </ul>

                    <Link
                        href="/about"
                        className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                        Scopri di più su di me →
                    </Link>
                </motion.div>
            </div>
        </motion.section>
    );
}