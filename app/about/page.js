// app/about/page.js

'use client';

import { motion } from 'framer-motion';
import { Timeline } from '@/components/ui/timeline';

// Import delle icone necessarie
import {
    FaShieldAlt,
    FaBug,
    FaNetworkWired,
    FaGraduationCap,
    FaPaintBrush,
    FaRocket,
    FaUsers,
    FaLightbulb,
    FaBrain
} from 'react-icons/fa';

// --- DATI PER LA NUOVA SEZIONE "FOCUS OPERATIVO" ---
const cybersecurityFocusData = [
    {
        icon: <FaBug />,
        title: "Penetration Testing & Vulnerability Assessment",
        description: "La mia area di maggiore interesse. Analizzo metodicamente le applicazioni web e le infrastrutture di rete per identificare, classificare e sfruttare le vulnerabilità prima che possano farlo gli attaccanti."
    },
    {
        icon: <FaShieldAlt />,
        title: "Secure Development & Code Review",
        description: "Credo che la sicurezza nasca dal codice. Analizzo il codice sorgente per scovare le falle logiche e applico i principi di programmazione sicura per prevenire le vulnerabilità più comuni (es. OWASP Top 10)."
    },
    {
        icon: <FaNetworkWired />,
        title: "Analisi di Rete e Digital Forensics",
        description: "Esamino il traffico di rete e analizzo i sistemi post-incidente per ricostruire le attività, identificare i vettori di attacco e raccogliere prove digitali in modo metodico e documentato."
    }
];

// --- DATI PER LA TIMELINE ---
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

// --- DATI PER LA NUOVA SEZIONE "ARSENALE & MENTALITÀ" ---
const securityToolStack = [
    { name: "Scansione e Analisi", tools: "Nessus, GVM, OWASP ZAP, Wireshark, Burp Suite" },
    { name: "Sistemi e Container", tools: "Linux (Kali, Ubuntu), Docker, Docker Compose" },
    { name: "Sviluppo e Scripting", tools: "Python (Flask, Scapy), Go, Bash" },
    { name: "Database", tools: "MySQL, MongoDB, SQL Injection Techniques" }
];

const cybersecuritySoftSkills = [
    {
        icon: <FaLightbulb />,
        title: "Mentalità Analitica da Attaccante",
        description: "Affronto i problemi di sicurezza pensando 'come potrei rompere questo sistema?'. Questo approccio 'offensive' è fondamentale per costruire difese veramente efficaci."
    },
    {
        icon: <FaUsers />,
        title: "Reportistica Tecnica e Collaborazione",
        description: "So documentare le vulnerabilità scoperte in report chiari e azionabili, comunicando l'impatto tecnico e il rischio di business a sviluppatori e manager."
    },
    {
        icon: <FaBrain />,
        title: "Apprendimento Continuo e Ricerca",
        description: "La cybersecurity è una gara costante. Dedico tempo allo studio di nuove tecniche di attacco, paper di ricerca e CVE per rimanere sempre un passo avanti."
    }
];


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
            {/* SEZIONE 1: IL MIO FOCUS OPERATIVO */}
            <section className="w-full py-16 md:py-24">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 tracking-tight"
                        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                    >
                        Focus Operativo: Offensive Security
                    </motion.h1>
                    <motion.p
                        className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-16"
                        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        La mia specializzazione si concentra sulla sicurezza offensiva: l'arte di trovare le debolezze per costruire difese più forti.
                    </motion.p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {cybersecurityFocusData.map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-white dark:bg-gray-800/50 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700/50 text-center"
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="text-4xl text-blue-500 dark:text-blue-400 mb-4 inline-block">{item.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SEZIONE 2: IL MIO PERCORSO FORMATIVO */}
            <section className="w-full py-16 md:py-24 bg-gray-50 dark:bg-gray-900/70">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="mb-12 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                            Il Percorso per la Specializzazione
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            Le tappe accademiche che hanno costruito le mie fondamenta tecniche.
                        </p>
                    </div>
                    <Timeline data={aceternityTimelineData} />
                </div>
            </section>

            {/* SEZIONE 3: ARSENALE E MENTALITÀ */}
            <section className="w-full py-16 md:py-24">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-gray-100">
                        Il Mio Arsenale e Approccio
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                        {/* Colonna Sinistra: Toolkit Tecnico */}
                        <div className="lg:col-span-2">
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">Arsenale Tecnico</h3>
                            <div className="space-y-4">
                                {securityToolStack.map(item => (
                                    <div key={item.name}>
                                        <p className="font-semibold text-blue-600 dark:text-blue-400">{item.name}</p>
                                        <p className="text-gray-600 dark:text-gray-400">{item.tools}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Colonna Destra: Soft Skills */}
                        <div className="lg:col-span-3">
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">Mentalità e Soft Skills</h3>
                            <div className="space-y-6">
                                {cybersecuritySoftSkills.map(skill => (
                                    <div key={skill.title} className="flex gap-4 items-start">
                                        <div className="text-2xl text-blue-500 dark:text-blue-400 pt-1">{skill.icon}</div>
                                        <div>
                                            <h4 className="font-bold text-lg text-gray-900 dark:text-gray-100">{skill.title}</h4>
                                            <p className="text-gray-600 dark:text-gray-400">{skill.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </motion.main>
    );
}