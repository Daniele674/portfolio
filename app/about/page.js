// app/about/page.js

'use client';

import { motion } from 'framer-motion';
import { Timeline } from '@/components/ui/timeline';
import { Meteors } from '@/components/ui/meteors';
import { LampContainer } from '@/components/ui/lamp';

// Import delle icone necessarie
import {
    FaShieldAlt,
    FaBug,
    FaCodeBranch,
    FaGraduationCap,
    FaPaintBrush,
    FaRocket,
    FaUsers,
    FaLightbulb,
    FaComments,
    FaCode, FaBrain
} from 'react-icons/fa';

// --- DATI (Invariati) ---
const cybersecurityPillars = [
    {
        icon: <FaShieldAlt />,
        title: "Difesa Proattiva & Architetture Sicure",
        description: "Progetto e costruisco sistemi pensando alla sicurezza fin dal primo giorno. Il mio obiettivo è creare infrastrutture che non solo reagiscano, ma anticipino le minacce."
    },
    {
        icon: <FaBug />,
        title: "Vulnerability Analysis & Ethical Hacking",
        description: "Mi metto nei panni di un attaccante per trovare le falle prima che lo faccia qualcun altro. Analizzo, testo e scopro le vulnerabilità per rendere i sistemi più robusti."
    },
    {
        icon: <FaCodeBranch />,
        title: "Sviluppo Sicuro (DevSecOps)",
        description: "Integro pratiche e strumenti di sicurezza direttamente nel ciclo di sviluppo del software, automatizzando i controlli per un rilascio continuo e affidabile."
    }
];
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
const techStack = [
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
            {/* SEZIONE 1: INTRODUZIONE CON LAMPADA E CARD */}
            <section className="w-full">
                <LampContainer>
                    <motion.div
                        initial={{ opacity: 0.5, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className="text-center"
                    >
                        <h1 className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-4xl font-medium tracking-tight text-transparent md:text-7xl">
                            Il Mio Focus: Cybersecurity
                        </h1>
                        <p className="mt-4 text-lg font-normal text-slate-400 max-w-2xl mx-auto">
                            La mia passione è costruire e proteggere. Qui ci sono i tre pilastri su cui fondo il mio approccio alla sicurezza digitale.
                        </p>
                    </motion.div>
                </LampContainer>

                {/* --- ECCO LE MODIFICHE PRINCIPALI --- */}
                {/* 1. Il margine negativo è aumentato da -mt-48 a -mt-64 per tirare su di più le card */}
                <div className="bg-slate-950 -mt-64 pb-24 px-4">
                    <div className="max-w-5xl mx-auto">
                        {/* 2. Il padding superiore è ridotto da pt-12 a pt-4 per avvicinare le card al testo */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
                            {cybersecurityPillars.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="relative overflow-hidden bg-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-800 text-center"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                                >
                                    <Meteors number={15} />
                                    <div className="relative z-10">
                                        <div className="text-4xl text-blue-400 mb-4 inline-block">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-100 mb-2">{item.title}</h3>
                                        <p className="text-gray-400">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SEZIONE 2: IL MIO PERCORSO FORMATIVO */}
            <section className="w-full py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
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
                        <div className="lg:col-span-2">
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">Arsenale Tecnico</h3>
                            <div className="space-y-4">
                                {techStack.map(item => (
                                    <div key={item.name}>
                                        <p className="font-semibold text-blue-600 dark:text-blue-400">{item.name}</p>
                                        <p className="text-gray-600 dark:text-gray-400">{item.tools}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
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