// app/about/page.js

'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Timeline } from '@/components/ui/timeline';
import { Meteors } from '@/components/ui/meteors';
import { LampContainer } from '@/components/ui/lamp';
import Link from 'next/link';

// Import delle icone necessarie per la pagina
import {
    FaShieldAlt,
    FaBug,
    FaCodeBranch,
    FaUsers,
    FaComments,
    FaBrain,
    FaMusic,
    FaGamepad,
    FaFilm,
    FaTerminal,
    FaCode,
    FaServer,
    FaCloud
} from 'react-icons/fa';

// --- DATI PER LA SEZIONE "FOCUS: CYBERSECURITY" ---
const cybersecurityPillars = [
    {
        icon: <FaBug />,
        title: "Offensive Security & Penetration Testing",
        description: "Mi metto nei panni di un attaccante per trovare le falle prima che lo faccia qualcun altro. Analizzo, testo e scopro le vulnerabilità per rendere i sistemi più robusti."
    },
    {
        icon: <FaBrain />,
        title: "AI per la Sicurezza Difensiva e Proattiva",
        description: "Sviluppo e integro sistemi di Intelligenza Artificiale per anticipare e mitigare le minacce, trasformando dati complessi in intelligence azionabile."
    },
    {
        icon: <FaShieldAlt />,
        title: "Cloud Security & Security by Design",
        description: "Progetto architetture sicure e integro pratiche di sicurezza fin dalle prime fasi di sviluppo e deployment (DevSecOps) per garantire infrastrutture scalabili e protette."
    }
];

// --- DATI PER LA TIMELINE ---
const timelineData = [
    {
        date: "02/2023 - 02/2025",
        title: "Laurea Magistrale in Cybersecurity",
        institution: "Università degli Studi di Salerno",
        focus: "Votazione finale: 110/110 e Lode - Media esami: 30/30",
        description: "Tesi sperimentale: \"Log2CAPEC: Sviluppo di un sistema basato su Large Language Models (LLM) per l'interpretazione semantica di log di sicurezza e mappatura automatica al framework MITRE CAPEC.\""
    },
    {
        date: "09/2019 - 02/2023",
        title: "Laurea Triennale in Informatica",
        institution: "Università degli Studi di Salerno",
        focus: "Votazione finale: 105/110",
        description: "Tesi: \"Precision Agriculture & AI for the Prevention of Grapevine Diseases\" (Focus su Deep Learning e Computer Vision)."
    },
    {
        date: "2014 - 2019",
        title: "Diploma di Liceo Linguistico",
        institution: "Liceo Publio Virgilio Marone",
        focus: "Voto: 100/100",
        description: "Competenze avanzate in Inglese, Francese e Spagnolo."
    }
];

// --- DATI PER LE COMPETENZE A 360° ---
const securityToolStack = [
    {
        name: "Cyber & Threat Intelligence",
        tools: ["Penetration Testing (Web/Network)", "Vulnerability Assessment", "Ethical Hacking", "OSINT", "Malware Analysis"],
        software: ["Burp Suite", "Metasploit", "Nmap", "Nessus", "Wireshark", "ZAP", "Kali Linux"],
        color: "from-blue-500/20 to-indigo-500/10",
        border: "group-hover:border-blue-500/50"
    },
    {
        name: "Cloud Security & DevSecOps",
        tools: ["Security by Design", "Cloud Architecture", "IAM", "CI/CD Security", "IaC", "Container Security"],
        software: ["Azure AD/Entra ID", "Terraform", "Docker"],
        color: "from-purple-500/20 to-pink-500/10",
        border: "group-hover:border-purple-500/50"
    },
    {
        name: "Framework & Governance",
        tools: ["MITRE ATT&CK", "MITRE CAPEC", "OWASP Top 10", "Zero Trust"],
        software: ["NIST CSF 2.0", "ISO/IEC 27001", "NIS2", "DORA"],
        color: "from-emerald-500/20 to-teal-500/10",
        border: "group-hover:border-emerald-500/50"
    },
    {
        name: "System Engineering & AI",
        tools: ["Hardening", "LLM Integration", "Prompt Engineering", "RAG"],
        software: ["Linux", "Windows Server", "Python", "Bash", "SQL/NoSQL"],
        color: "from-orange-500/20 to-amber-500/10",
        border: "group-hover:border-orange-500/50"
    }
];

const cybersecuritySoftSkills = [
    {
        icon: <FaUsers />,
        title: "Collaborazione e Gestione",
        description: "Durante i progetti universitari, ho interagito con diversi team, assumendo responsabilità gestionali per rispettare scadenze e risolvere problemi, ottenendo ottimi risultati."
    },
    {
        icon: <FaComments />,
        title: "Adattabilità e Comunicazione Multiculturale",
        description: "Le esperienze all'estero, come il corso presso l'Azurlingua École De Français a Nice, hanno potenziato la mia abilità di adattarmi e comunicare efficacemente in contesti internazionali."
    },
    {
        icon: <FaBrain />,
        title: "Apprendimento Continuo e Autonomia",
        description: "Dedico il mio tempo libero a corsi online per espandere le mie conoscenze, unendo lo studio formale a un percorso di apprendimento autonomo e costante."
    }
];

// --- DATI PER LE COMPETENZE LINGUISTICHE ---
const languageSkills = [
    { lang: "Italiano", level: "Madrelingua", cert: null },
    { lang: "Inglese", level: "Competente", cert: "B2 First - Cambridge Assessment" },
    { lang: "Francese", level: "Competente", cert: "DELF B2" },
    { lang: "Spagnolo", level: "Conversazionale", cert: null }
];


// --- COMPONENTE TERMINALE HOBBIES ---
const TerminalHobbies = () => {
    const [typing, setTyping] = useState(true);
    const [cmdInput, setCmdInput] = useState("");
    const fullCmd = "./show_hobbies.sh";

    // Effetto macchina da scrivere per il comando
    useEffect(() => {
        let timer;
        if (cmdInput.length < fullCmd.length) {
            timer = setTimeout(() => {
                setCmdInput(fullCmd.slice(0, cmdInput.length + 1));
            }, 100);
        } else {
            timer = setTimeout(() => {
                setTyping(false);
            }, 500); // Pausa prima di mostrare l'output
        }
        return () => clearTimeout(timer);
    }, [cmdInput, fullCmd]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-4xl mx-auto md:mt-8 rounded-xl overflow-hidden shadow-2xl border border-gray-700 dark:border-gray-800 bg-[#0f111a] font-mono text-sm sm:text-base relative"
        >
            {/* Header del terminale macOS/Linux style */}
            <div className="bg-gray-800/80 px-4 py-3 flex items-center gap-2 border-b border-gray-700/50">
                <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_5px_rgba(239,68,68,0.5)]"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_5px_rgba(234,179,8,0.5)]"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
                <span className="ml-4 text-xs text-gray-400 font-sans tracking-widest uppercase">daniele@kali:~</span>
            </div>

            {/* Area Output */}
            <div className="p-6 md:p-8 text-gray-300 min-h-[350px]">
                {/* Prompt iniziale con auto-typing */}
                <div className="flex items-center gap-2 mb-6">
                    <span className="text-green-400 font-bold">daniele@kali</span>
                    <span className="text-white">:</span>
                    <span className="text-blue-400 font-bold">~</span>
                    <span className="text-white">$</span>
                    <span className="text-gray-100">{cmdInput}</span>
                    {typing && <span className="w-2.5 h-5 bg-gray-300 animate-pulse inline-block ml-1"></span>}
                </div>

                {/* Mostra il contenuto solo quando il typing è finito */}
                {!typing && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <div className="border-l-2 border-purple-500/50 pl-4 py-2">
                            <h4 className="flex items-center gap-3 text-purple-400 font-bold text-lg mb-2">
                                <FaMusic className="text-xl" /> [01] Analisi Onde Sonore
                            </h4>
                            <p className="text-gray-400 leading-relaxed max-w-2xl">
                                &gt; Buffering audio stream... OK.<br />
                                <span className="text-gray-300">Ascolto di tutto, senza barriere di genere. Per me la giornata è cio che ti accade mentre ascolto musica.</span>
                            </p>
                        </div>

                        <div className="border-l-2 border-emerald-500/50 pl-4 py-2">
                            <h4 className="flex items-center gap-3 text-emerald-400 font-bold text-lg mb-2">
                                <FaGamepad className="text-xl" /> [02] Simulazioni Immersive
                            </h4>
                            <p className="text-gray-400 leading-relaxed max-w-2xl">
                                &gt; Loading single-player campaign... 100%<br />
                                <span className="text-gray-300">Amo perdermi nelle storie e nell'esplorazione. Ho un debole per il looting compulsivo negli FPS: devo setacciare ogni angolo e raccogliere ogni oggetto.</span>
                            </p>
                        </div>

                        <div className="border-l-2 border-orange-500/50 pl-4 py-2">
                            <h4 className="flex items-center gap-3 text-orange-400 font-bold text-lg mb-2">
                                <FaFilm className="text-xl" /> [03] Frame & Visioni
                            </h4>
                            <p className="text-gray-400 leading-relaxed max-w-2xl">
                                &gt; Watchlist: Mad Men, La La Land...<br />
                                <span className="text-gray-300">Il cinema è la mia evasione preferita. Dai labirinti mentali di Nolan alle atmosfere di Villeneuve, passando per lo stile ritmato di Guy Ritchie.</span>
                            </p>
                        </div>

                        <div className="flex items-center gap-2 mt-8 pt-4">
                            <span className="text-green-400 font-bold">daniele@kali</span>
                            <span className="text-white">:</span>
                            <span className="text-blue-400 font-bold">~</span>
                            <span className="text-white">$</span>
                            <span className="w-2.5 h-5 bg-gray-300 animate-pulse inline-block ml-1"></span>
                        </div>
                    </motion.div>
                )}
            </div>

            {/* Sottile background glow per il terminale */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
        </motion.div>
    );
};


// --- COMPONENTE PAGINA ---
export default function AboutPage() {

    const aceternityTimelineData = timelineData.map((item) => ({
        title: item.title,
        content: (
            <div className="flex flex-col gap-1 text-left">
                <p className="text-base text-gray-500 dark:text-gray-400">
                    {item.date} - <span
                        className="font-medium text-gray-600 dark:text-gray-300">{item.institution}</span>
                </p>
                <p className="text-lg font-bold text-gray-800 dark:text-gray-200 mt-1">
                    {item.focus}
                </p>
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-base">{item.description}</p>
            </div>
        )
    }));

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full min-h-screen text-gray-800 dark:text-gray-200"
        >
            {/* SEZIONE 1: IL MIO FOCUS: CYBERSECURITY */}
            <section className="w-full bg-slate-950">
                <LampContainer>
                    <motion.div
                        initial={{ opacity: 0.5, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                        className="text-center"
                    >
                        <h1 className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-4xl font-medium tracking-tight text-transparent md:text-7xl">
                            Il Mio Focus: Cybersecurity
                        </h1>
                        <p className="mt-4 text-lg font-normal text-slate-400 max-w-2xl mx-auto">
                            La mia passione è costruire e proteggere. Qui ci sono i tre pilastri su cui fondo il mio
                            approccio alla sicurezza digitale.
                        </p>
                    </motion.div>
                </LampContainer>
                <div className="bg-slate-950 relative z-10 -mt-64 pb-24 px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
                            {cybersecurityPillars.map((item, index) => (
                                <motion.div key={index}
                                    className="relative overflow-hidden bg-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-800 text-center"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                                >
                                    <Meteors number={15} />
                                    <div className="relative z-10">
                                        <div className="text-4xl text-blue-400 mb-4 inline-block">{item.icon}</div>
                                        <h3 className="text-xl font-bold text-gray-100 mb-2">{item.title}</h3>
                                        <p className="text-gray-400">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SFONDO GLOBALE UNIFICATO PER IL RESTO DELLA PAGINA */}
            <div className="w-full bg-gray-50 dark:bg-[#0f111a] relative">
                {/* Gradiente di transizione morbida dalla Section 1 */}
                <div className="absolute top-0 left-0 w-full h-32 md:h-48 bg-gradient-to-b from-slate-950 to-transparent pointer-events-none" />

                {/* SEZIONE 2: IL MIO PERCORSO FORMATIVO */}
                <section className="w-full pt-20 pb-16 md:pt-32 md:pb-24 relative z-10">
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

                {/* SEZIONE 3: ARSENALE E MENTALITÀ (BENTO GRID REDESIGN - LIGHTER & PREMIUM) */}
                <section className="w-full py-16 md:py-24 relative overflow-hidden">
                    <div className="max-w-6xl mx-auto px-4">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-4 tracking-tight">
                                Il Mio Arsenale
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                Tecnologie, framework e mindset che utilizzo ogni giorno per analizzare, proteggere e innovare.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 auto-rows-min">
                            {/* --- HARD SKILLS (BENTO BOXES) --- */}
                            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                                <div className="md:col-span-2 mb-2">
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 uppercase tracking-widest text-sm mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">Hard Skills & Stack</h3>
                                </div>

                                {securityToolStack.map((item, idx) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1, duration: 0.4 }}
                                        className={`group relative overflow-hidden rounded-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 p-6 sm:p-8 hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-xl ${item.border}`}
                                    >
                                        {/* Subtle gradient overlay */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none`}></div>

                                        <div className="relative z-10 flex flex-col h-full">
                                            <h4 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 drop-shadow-sm">{item.name}</h4>

                                            <div className="flex-grow space-y-4">
                                                <div>
                                                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Competenze</p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {item.tools.map(tool => (
                                                            <span key={tool} className="text-[11px] sm:text-xs font-semibold text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 px-3 py-1.5 rounded-lg shadow-sm">
                                                                {tool}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 mt-4">Tools & Stack</p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {item.software.map(sw => (
                                                            <span key={sw} className="text-[11px] sm:text-xs font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800/50 px-3 py-1.5 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors cursor-default">
                                                                {sw}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* --- SOFT SKILLS (FROSTED GLASS VERTICAL CARDS) --- */}
                            <div className="lg:col-span-4 flex flex-col gap-6 lg:gap-8">
                                <div className="mb-2">
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 uppercase tracking-widest text-sm mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">Mindset & Approccio</h3>
                                </div>
                                {cybersecuritySoftSkills.map((skill, idx) => (
                                    <motion.div
                                        key={skill.title}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.15, duration: 0.5 }}
                                        className="relative flex gap-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-shadow group"
                                    >
                                        <div className="relative z-10 text-3xl text-blue-600 dark:text-blue-400 mt-1 shrink-0 drop-shadow-sm">
                                            {skill.icon}
                                        </div>
                                        <div className="relative z-10 w-full">
                                            <h4 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-2 leading-tight">{skill.title}</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-medium">{skill.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* SEZIONE 4: COMPETENZE LINGUISTICHE */}
                <section className="w-full py-16 md:py-24">
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
                            Competenze Linguistiche
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {languageSkills.map(lang => (
                                <motion.div key={lang.lang}
                                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{lang.lang}</h3>
                                    <p className="text-blue-500 dark:text-blue-400 font-semibold my-2">{lang.level}</p>
                                    {lang.cert && (
                                        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">Cert: {lang.cert}</p>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SEZIONE 5: OLTRE IL CODICE (HACKER TERMINAL REDESIGN) */}
                <section className="w-full py-16 md:py-24 overflow-hidden relative">
                    <div className="max-w-6xl mx-auto px-4 relative z-10 flex flex-col items-center">
                        <motion.div
                            className="text-center mb-10"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-4 tracking-tight">
                                Oltre il Codice
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                L'equilibrio ideale tra creatività e sfida analitica.
                            </p>
                        </motion.div>

                        {/* Vetrina del Terminale Hobbies */}
                        <div className="w-full px-2 sm:px-4">
                            <TerminalHobbies />
                        </div>
                    </div>
                </section>

                {/* SEZIONE 6: CALL TO ACTION FINALE (REINSERITA) */}
                <section className="w-full py-16 md:py-24 text-center border-t border-gray-200 dark:border-gray-800">
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                            Interessato a collaborare?
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                            Scarica il mio curriculum per una visione completa del mio percorso o contattami direttamente.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4 w-full">
                            <a
                                href="/CV-Daniele-Gregori.pdf"
                                download="CV-Daniele-Gregori.pdf"
                                className="w-full sm:w-auto text-center inline-block bg-blue-600 text-white px-8 py-4 sm:py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
                            >
                                Scarica CV
                            </a>
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto text-center inline-block bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-8 py-4 sm:py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                            >
                                Contattami →
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </motion.main>
    );
}