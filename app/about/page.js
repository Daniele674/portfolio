// app/about/page.js

'use client';

import {motion} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {FaGraduationCap, FaCode, FaPaintBrush, FaHeart, FaRocket} from 'react-icons/fa';

// --- DATI ESTRATTI DAL TUO CV ---
const timelineData = [
    {
        date: "2023 - Presente",
        title: "Laurea Magistrale in Computer Science",
        institution: "Università degli Studi di Salerno",
        focus: "Specializzazione in Cybersecurity",
        description: "Approfondimento di secure programming, penetration testing, ethical hacking, networking, database (MongoDB), sviluppo mobile (Flutter) e web (Flask), e digital forensics.",
        icon: <FaRocket/>
    },
    {
        date: "2019 - 2023",
        title: "Laurea Triennale in Computer Science",
        institution: "Università degli Studi di Salerno",
        focus: "Voto: 105/110",
        description: "Basi solide in programmazione (C, Java), database (MySQL), sviluppo web (HTML, CSS, JS), mobile (Android), sistemi operativi (Linux) e sviluppo 3D (Unity).",
        icon: <FaGraduationCap/>
    },
    {
        date: "2014 - 2019",
        title: "Diploma di Liceo Linguistico",
        institution: "Liceo Publio Virgilio Marone",
        focus: "Voto: 100/100",
        description: "Sviluppo di competenze linguistiche in Inglese, Francese e Spagnolo e potenziamento delle capacità di comunicazione in contesti multiculturali.",
        icon: <FaPaintBrush/>
    }
];

const skillsData = {
    Cybersecurity: ["Penetration Testing", "Ethical Hacking", "Secure Programming", "Vulnerability Scanning", "Digital Forensics"],
    "Linguaggi di Programmazione": ["Python (Flask, ML)", "Java (Android, EE)", "C/C++", "Dart (Flutter)", "SQL"],
    "Framework & Librerie": ["Flutter", "Flask", "Unity (3D)", "React & Next.js"],
    Database: ["MySQL (Relational)", "MongoDB (NoSQL)"],
    "Development & Tools": ["Git & GitHub", "Docker", "Linux OS", "IDEs (IntelliJ, VS Code)"]
};

// --- COMPONENTE PRINCIPALE DELLA PAGINA ---
export default function AboutPage() {
    return (
        <motion.main
            className="max-w-4xl mx-auto px-4 py-8"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
        >
            {/* Sezione 1: Introduzione */}
            <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16 md:mb-24">
                <motion.div
                    className="md:w-1/3 text-center"
                    initial={{opacity: 0, scale: 0.8}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.6}}
                >
                    <Image
                        src="/me.jpg" // Usa la stessa foto della ProfileCard per coerenza
                        alt="Foto di Daniele Gregori"
                        width={200}
                        height={200}
                        className="rounded-full shadow-2xl mx-auto border-4 border-white dark:border-gray-800"
                        priority
                    />
                </motion.div>
                <div className="md:w-2/3">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                        Daniele Gregori
                    </h1>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-4">
                        Studente di Cybersecurity & Sviluppatore Full-Stack
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                        La mia missione è trasformare problemi complessi in soluzioni software eleganti, sicure e
                        intuitive. Sono guidato dalla curiosità e dalla convinzione che la tecnologia possa creare un
                        impatto positivo e significativo.
                    </p>
                </div>
            </section>

            {/* Sezione 2: La Mia Storia (Timeline) */}
            <section className="mb-16 md:mb-24">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">Il Mio
                    Percorso</h2>
                <div className="relative border-l-2 border-blue-500/30 dark:border-blue-400/30 ml-6">
                    {timelineData.map((item, index) => (
                        <motion.div
                            key={index}
                            className="mb-10 ml-12"
                            initial={{opacity: 0, x: -20}}
                            whileInView={{opacity: 1, x: 0}}
                            viewport={{once: true, amount: 0.5}}
                            transition={{duration: 0.5, delay: index * 0.1}}
                        >
                            <span
                                className="absolute flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-gray-800 rounded-full -left-6 ring-8 ring-white dark:ring-gray-900 text-blue-500 dark:text-blue-400 text-2xl">
                                {item.icon}
                            </span>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{item.title}</h3>
                            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">{item.date} - {item.institution}</p>
                            <p className="mt-2 text-base font-semibold text-gray-800 dark:text-gray-200">{item.focus}</p>
                            <p className="mt-1 text-gray-600 dark:text-gray-300">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Sezione 3: Le Mie Competenze */}
            <section className="mb-16 md:mb-24">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">Competenze
                    Tecniche</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {Object.entries(skillsData).map(([category, skills], index) => (
                        <motion.div
                            key={category}
                            className="bg-white dark:bg-gray-800/50 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true, amount: 0.5}}
                            transition={{duration: 0.5, delay: index * 0.1}}
                        >
                            <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">{category}</h3>
                            <ul className="space-y-2">
                                {skills.map(skill => (
                                    <li key={skill} className="flex items-center gap-3">
                                        <FaCode className="text-gray-500 dark:text-gray-400"/>
                                        <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Sezione 4: Oltre il Codice */}
            <section className="text-center bg-gray-100 dark:bg-gray-800/50 p-8 rounded-lg">
                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">Oltre il Codice</h2>
                <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
                    Nel mio tempo libero, la mia curiosità non si ferma. Sono un appassionato di musica e videogiochi,
                    non solo come svago, ma come fonte d'ispirazione. Analizzo le meccaniche di gioco e le architetture
                    software per trarre spunti creativi da applicare nel mio lavoro. Credo fermamente che un equilibrio
                    tra apprendimento continuo e relax sia la chiave per una crescita personale e professionale sana.
                </p>
            </section>

        </motion.main>
    );
}