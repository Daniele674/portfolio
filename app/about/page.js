// app/about/page.js

'use client';

import {motion} from 'framer-motion';
import {Timeline} from '@/components/ui/timeline';
import {Meteors} from '@/components/ui/meteors';
import {LampContainer} from '@/components/ui/lamp';
import Link from 'next/link';

// Import delle icone necessarie per la pagina
import {
    FaShieldAlt,
    FaBug,
    FaCodeBranch,
    FaUsers,
    FaComments,
    FaBrain
} from 'react-icons/fa';

// --- DATI PER LA SEZIONE "FOCUS: CYBERSECURITY" ---
const cybersecurityPillars = [
    {
        icon: <FaBug/>,
        title: "Penetration Testing & Ethical Hacking",
        description: "Mi metto nei panni di un attaccante per trovare le falle prima che lo faccia qualcun altro. Analizzo, testo e scopro le vulnerabilità per rendere i sistemi più robusti."
    },
    {
        icon: <FaShieldAlt/>,
        title: "Difesa Proattiva & Architetture Sicure",
        description: "Progetto e costruisco sistemi pensando alla sicurezza fin dal primo giorno. Il mio obiettivo è creare infrastrutture che non solo reagiscano, ma anticipino le minacce."
    },
    {
        icon: <FaCodeBranch/>,
        title: "Sviluppo Sicuro (DevSecOps)",
        description: "Integro pratiche e strumenti di sicurezza direttamente nel ciclo di sviluppo del software, automatizzando i controlli per un rilascio continuo e affidabile."
    }
];

// --- DATI PER LA TIMELINE ---
const timelineData = [
    {
        date: "2023 - Presente",
        title: "Laurea Magistrale in Computer Science",
        institution: "Università degli Studi di Salerno",
        focus: "Specializzazione in Cybersecurity",
        description: "Approfondimento di secure programming, penetration testing, ethical hacking, networking, e database (MongoDB). GPA: 30/30."
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

// --- DATI PER LE COMPETENZE A 360° ---
const securityToolStack = [
    {name: "Scansione e Analisi", tools: "Nessus, GVM, OWASP ZAP, Wireshark, Burp Suite"},
    {name: "Sistemi e Container", tools: "Linux (Kali, Ubuntu), Docker, Docker Compose"},
    {name: "Sviluppo e Scripting", tools: "Python (Flask, Scapy), Go, Bash"},
    {name: "Database", tools: "MySQL, MongoDB, SQL Injection Techniques"}
];

const cybersecuritySoftSkills = [
    {
        icon: <FaUsers/>,
        title: "Collaborazione e Gestione",
        description: "Durante i progetti universitari, ho interagito con diversi team, assumendo responsabilità gestionali per rispettare scadenze e risolvere problemi, ottenendo ottimi risultati."
    },
    {
        icon: <FaComments/>,
        title: "Adattabilità e Comunicazione Multiculturale",
        description: "Le esperienze all'estero, come il corso presso l'Azurlingua École De Français a Nice, hanno potenziato la mia abilità di adattarmi e comunicare efficacemente in contesti internazionali."
    },
    {
        icon: <FaBrain/>,
        title: "Apprendimento Continuo e Autonomia",
        description: "Dedico il mio tempo libero a corsi online per espandere le mie conoscenze, unendo lo studio formale a un percorso di apprendimento autonomo e costante."
    }
];

// --- DATI PER LE COMPETENZE LINGUISTICHE ---
const languageSkills = [
    {lang: "Italiano", level: "Madrelingua", cert: null},
    {lang: "Inglese", level: "C1 (Lettura) / B2 (Altro)", cert: "Cambridge First"},
    {lang: "Francese", level: "B2", cert: "DELF B2"},
    {lang: "Spagnolo", level: "B2 (Lettura) / B1 (Altro)", cert: null}
];


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
                    {item.description.includes("GPA: 30/30") && (
                        <span className="ml-2">(GPA: 30/30)</span>
                    )}
                </p>
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-base">{item.description.replace(" GPA: 30/30.", "")}</p>
            </div>
        )
    }));

    return (
        <motion.main
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
        >
            {/* SEZIONE 1: IL MIO FOCUS: CYBERSECURITY */}
            <section className="w-full">
                <LampContainer>
                    <motion.div
                        initial={{opacity: 0.5, y: 100}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{delay: 0.3, duration: 0.8, ease: "easeInOut"}}
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
                <div className="bg-slate-950 -mt-64 pb-24 px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
                            {cybersecurityPillars.map((item, index) => (
                                <motion.div key={index}
                                            className="relative overflow-hidden bg-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-800 text-center"
                                            initial={{opacity: 0, y: 50}}
                                            whileInView={{opacity: 1, y: 0}}
                                            viewport={{once: true, amount: 0.5}}
                                            transition={{duration: 0.5, delay: 0.3 + (index * 0.1)}}
                                >
                                    <Meteors number={15}/>
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
                    <Timeline data={aceternityTimelineData}/>
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
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">Arsenale
                                Tecnico</h3>
                            <div className="space-y-4">
                                {securityToolStack.map(item => (
                                    <div key={item.name}>
                                        <p className="font-semibold text-blue-600 dark:text-blue-400">{item.name}</p>
                                        <p className="text-gray-600 dark:text-gray-400">{item.tools}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:col-span-3">
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">Mentalità e Soft
                                Skills</h3>
                            <div className="space-y-6">
                                {cybersecuritySoftSkills.map(skill => (
                                    <div key={skill.title} className="flex gap-4 items-start">
                                        <div
                                            className="text-2xl text-blue-500 dark:text-blue-400 pt-1">{skill.icon}</div>
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

            {/* SEZIONE 4: COMPETENZE LINGUISTICHE */}
            <section className="w-full py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
                        Competenze Linguistiche
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {languageSkills.map(lang => (
                            <motion.div key={lang.lang}
                                        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
                                        initial={{opacity: 0, y: 20}}
                                        whileInView={{opacity: 1, y: 0}}
                                        viewport={{once: true, amount: 0.5}}
                                        transition={{duration: 0.5}}
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

            {/* SEZIONE 5: OLTRE IL CODICE */}
            <section className="w-full py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">
                        Oltre il Codice
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
                        Credo nell&#39;equilibrio tra apprendimento e relax. Le mie due più grandi passioni sono la
                        musica, che ispira la mia creatività, e i videogiochi. Questi ultimi non sono solo
                        intrattenimento, ma una sfida intellettuale: analizzo le meccaniche di gioco e il level design
                        per capire come migliorare le mie stesse capacità nello sviluppo di software interattivo.
                    </p>
                </div>
            </section>

            {/* SEZIONE 6: CALL TO ACTION FINALE (REINSERITA) */}
            <section className="w-full py-16 md:py-20 text-center bg-gray-100 dark:bg-gray-800">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                        Interessato a collaborare?
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                        Scarica il mio curriculum per una visione completa del mio percorso o contattami direttamente.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <a
                            href="/CV-Daniele-Gregori.pdf"
                            download="CV-Daniele-Gregori.pdf"
                            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
                        >
                            Scarica CV
                        </a>
                        <Link
                            href="/contact"
                            className="inline-block bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        >
                            Contattami →
                        </Link>
                    </div>
                </div>
            </section>
        </motion.main>
    );
}