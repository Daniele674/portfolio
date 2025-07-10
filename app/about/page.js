// app/about/page.js

'use client';

import { motion } from 'framer-motion';
import { Timeline } from '@/components/ui/timeline';

// Import delle icone
import {
    FaCode,
    FaShieldAlt,
    FaUserFriends,
    FaGraduationCap,
    FaPaintBrush,
    FaRocket,
    FaBrain // Aggiunta per la nuova card
} from 'react-icons/fa';

// --- NUOVI DATI PER LE CARD "FILOSOFIA CYBERSECURITY" ---
const cybersecurityPhilosophyData = [
    {
        icon: <FaShieldAlt />,
        title: "Difesa Proattiva",
        description: "Non mi limito a reagire alle minacce. Il mio approccio si basa sulla previsione e la modellazione dei rischi (threat modeling) per costruire sistemi resilienti fin dal principio."
    },
    {
        icon: <FaCode />,
        title: "Sicurezza Integrata (Shift-Left)",
        description: "La sicurezza non è l'ultimo step, ma una responsabilità condivisa in tutto il ciclo di vita del software. Promuovo pratiche DevSecOps per scrivere codice intrinsecamente sicuro."
    },
    {
        icon: <FaBrain />,
        title: "Mentalità Etica e Miglioramento Continuo",
        description: "Il panorama delle minacce si evolve ogni giorno. Studio costantemente nuove vulnerabilità e tecniche di attacco per rimanere un passo avanti e garantire che le difese siano sempre aggiornate."
    }
];

// --- DATI ESISTENTI (Invariati) ---
const timelineData = [
    {
        date: "2023 - Presente",
        title: "Laurea Magistrale in Computer Science",
        institution: "Università degli Studi di Salerno",
        focus: "Specializzazione in Cybersecurity",
        description: "Approfondimento di secure programming, penetration testing, ethical hacking, networking, e database (MongoDB)."
    },
    {
        date: "2019 - 2023",
        title: "Laurea Triennale in Computer Science",
        institution: "Università degli Studi di Salerno",
        focus: "Voto: 105/110",
        description: "Basi solide in programmazione (C, Java), database (MySQL), sviluppo web, mobile, e sistemi operativi."
    },
    {
        date: "2014 - 2019",
        title: "Diploma di Liceo Linguistico",
        institution: "Liceo Publio Virgilio Marone",
        focus: "Voto: 100/100",
        description: "Competenze avanzate in Inglese, Francese e Spagnolo."
    }
];

const skillsData = {
    "Cybersecurity": ["Penetration Testing", "Ethical Hacking", "Secure Programming", "Vulnerability Scanning", "Digital Forensics"],
    "Linguaggi di Programmazione": ["Python (Flask, ML)", "Java (Android, EE)", "C/C++", "Dart (Flutter)", "SQL"],
    "Framework & Librerie": ["Flutter", "Flask", "Unity (3D)", "React & Next.js"],
    "Development & Tools": ["Git & GitHub", "Docker", "Linux OS", "IDEs (IntelliJ, VS Code)"]
};


// --- COMPONENTE PAGINA ---
export default function AboutPage() {

    const aceternityTimelineData = timelineData.map((item) => ({
        title: item.title,
        content: (
            <div className="flex flex-col gap-1 text-left">
                <p className="text-base text-gray-500 dark:text-gray-400">
                    {item.date} - <span className="font-medium text-gray-600 dark:text-gray-300">{item.institution}</span>
                </p>
                <p className="text-lg font-bold text-gray-800 dark:text-gray-200 mt-1">{item.focus}</p>
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-base">{item.description}</p>
            </div>
        )
    }));

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* SEZIONE 1: IL MIO APPROCCIO ALLA CYBERSECURITY */}
            <section className="w-full py-16 md:py-24">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 tracking-tight"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Il Mio Approccio alla Cybersecurity
                    </motion.h1>
                    <motion.p
                        className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-16"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        La sicurezza non è un prodotto, ma un processo. Questi sono i principi che guidano il mio lavoro per proteggere le infrastrutture digitali.
                    </motion.p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {cybersecurityPhilosophyData.map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-white dark:bg-gray-800/50 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-left"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="text-3xl text-blue-500 dark:text-blue-400 mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SEZIONE 2: IL MIO PERCORSO (Invariata) */}
            <section className="w-full py-16 md:py-24 bg-gray-50 dark:bg-gray-900/70">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                            Il Mio Percorso
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            Le tappe fondamentali della mia crescita professionale e accademica.
                        </p>
                    </div>
                    <Timeline data={aceternityTimelineData} />
                </div>
            </section>

            {/* SEZIONE 3: COMPETENZE TECNICHE (Invariata) */}
            <section className="w-full py-16 md:py-24">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-gray-100">
                        Competenze Tecniche
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {Object.entries(skillsData).map(([category, skills], index) => (
                            <motion.div
                                key={category}
                                className="bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <h3 className="text-xl font-bold mb-5 text-blue-500 dark:text-blue-400">{category}</h3>
                                <ul className="space-y-3">
                                    {skills.map(skill => (
                                        <li key={skill} className="flex items-center gap-3">
                                            <FaCode className="text-gray-400 dark:text-gray-500 flex-shrink-0" />
                                            <span className="text-base text-gray-700 dark:text-gray-300">{skill}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </motion.main>
    );
}