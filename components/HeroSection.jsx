// components/HeroSection.jsx

'use client'

import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {motion} from 'framer-motion';
import {FaGithub, FaLinkedin} from 'react-icons/fa6';

// --- ECCO LA MODIFICA FONDAMENTALE ---
// Importiamo ProfileCard SENZA le parentesi graffe {}.
// Ho anche pulito il percorso, assumendo che i file si chiamino ProfileCard.jsx e ProfileCard.css
import ProfileCard from '@/components/ui/Components/ProfileCard/ProfileCard';
import '@/components/ui/Components/ProfileCard/ProfileCard.css';


export default function HeroSection() {
    const router = useRouter();

    const handleContactClick = () => {
        router.push('/contact');
    };

    return (
        <motion.section
            className="flex flex-col items-center justify-center my-16 md:my-20"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
        >

            <ProfileCard
                // --- INFO PRINCIPALI (Testi più incisivi) ---
                name="Daniele Gregori"
                title="Sviluppatore Full-Stack & Cybersecurity"
                handle="daniele_gregori" // Usare un handle più realistico
                status="Disponibile per nuove opportunità"

                // --- BOTTONE CTA MIGLIORATO ---
                // Il testo ora ha una freccia per indicare l'azione.
                // Lo stile del bottone lo modificheremo direttamente nel CSS per un controllo totale.
                contactText="Contattami →"
                onContactClick={handleContactClick}

                // --- IMMAGINI E TEXTURE ---
                avatarUrl="/me.jpg"
                // Aggiungiamo un mini-avatar per coerenza visiva.
                miniAvatarUrl="/me.jpg"
                // Un pattern di sfondo tecnologico. Scarica un'immagine SVG (es. da "heropatterns.com")
                // e mettila in public/textures/circuit-pattern.svg
                iconUrl="/textures/circuit-pattern.svg"
                // Una texture di grana per un look più premium. Mettila in public/textures/grain.png
                grainUrl="/textures/grain.png"

                // --- STILE E COMPORTAMENTO ---
                showUserInfo={true}
                enableTilt={true}

                // --- GRADIENTI PIÙ RAFFINATI ---
                // Un gradiente interno scuro ma con più carattere
                innerGradient="linear-gradient(145deg, #181c27, #222838)"
                // Il gradiente esterno ora usa un blu più definito per creare un "glow"
                behindGradient="radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(59,130,246,0) 50%)"
            />

            <motion.div
                className="text-center mt-8"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.3, duration: 0.5}}
            >
                <div className="flex justify-center gap-5 mb-6">
                    <a href="https://github.com/tuoutente" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                       className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                        <FaGithub size={28}/>
                    </a>
                    <a href="https://linkedin.com/in/tuonome" target="_blank" rel="noopener noreferrer"
                       aria-label="LinkedIn"
                       className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <FaLinkedin size={28}/>
                    </a>
                </div>

                <Link
                    href="/projects"
                    className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                    I miei lavori
                </Link>
            </motion.div>

        </motion.section>
    );
}