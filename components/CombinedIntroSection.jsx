// components/CombinedIntroSection.jsx

'use client'

import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {motion} from 'framer-motion';
import ProfileCard from '@/components/ui/Components/ProfileCard/ProfileCard';
import '@/components/ui/Components/ProfileCard/ProfileCard.css';
import {FiCheckCircle} from 'react-icons/fi';

export default function CombinedIntroSection() {
    const router = useRouter();

    const handleContactClick = () => {
        router.push('/contact');
    };

    return (
        <motion.section
            className="my-16 md:my-24"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
        >
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-16 items-center">

                {/* Colonna Sinistra (2/5): La Profile Card */}
                <motion.div
                    className="md:col-span-2 flex justify-center"
                    initial={{opacity: 0, x: -20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.8, delay: 0.2}}
                >
                    <ProfileCard
                        name="Daniele Gregori"
                        title="Penetration Tester"
                        handle="daniele_gregori"
                        status="Aperto a collaborazioni"
                        contactText="Contattami →"
                        onContactClick={handleContactClick}
                        avatarUrl="/me.png"
                        miniAvatarUrl="/me.png"
                        enableTilt={true}
                        innerGradient="linear-gradient(145deg, #181c27, #222838)"
                        behindGradient="linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%);"
                    />
                </motion.div>

                {/* Colonna Destra (3/5): Il Contenuto "About" */}
                <motion.div
                    className="md:col-span-3"
                    initial={{opacity: 0, x: 20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.8, delay: 0.4}}
                >
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                        Benvenuto nel mio mondo digitale.
                    </h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                        Sono un informatico con la passione per la creazione di esperienze web complete, dalla
                        progettazione dell'interfaccia utente fino all'architettura del server. Credo nel codice pulito,
                        scalabile e in soluzioni che risolvono problemi reali.
                    </p>

                    <ul className="space-y-3 mb-8">
                        <li className="flex items-center gap-3">
                            <FiCheckCircle className="text-blue-500 dark:text-blue-400 flex-shrink-0" size={20}/>
                            <span className="text-gray-800 dark:text-gray-200">Sviluppo di applicazioni React e Next.js performanti</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FiCheckCircle className="text-blue-500 dark:text-blue-400 flex-shrink-0" size={20}/>
                            <span className="text-gray-800 dark:text-gray-200">Progettazione di interfacce UI/UX intuitive</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FiCheckCircle className="text-blue-500 dark:text-blue-400 flex-shrink-0" size={20}/>
                            <span className="text-gray-800 dark:text-gray-200">Interesse per le tecnologie emergenti come la blockchain</span>
                        </li>
                    </ul>

                    <Link
                        href="/about"
                        className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                        Leggi la mia storia →
                    </Link>
                </motion.div>
            </div>
        </motion.section>
    );
}