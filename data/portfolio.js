import React from 'react';

// Import delle icone per le competenze e i progetti
import {
    FaCode,
    FaDatabase,
    FaJava,
    FaPython,
    FaCube,
    FaBrain,
    FaLeaf,
    FaBug,
    FaGithub, FaFlutter, FaLinux,
} from 'react-icons/fa6';

import {
    SiFlask,
    SiUnity,
} from 'react-icons/si';

import {
    FiSmartphone
} from 'react-icons/fi';
import { FaFingerprint, FaShieldAlt } from "react-icons/fa";
import { AiFillSecurityScan } from "react-icons/ai";

// Dati per la sezione "Le Mie Competenze" categorizzate
export const categorizedSkills = [
    {
        category: "Cybersecurity & Threat Intelligence",
        skills: [
            { name: "Penetration Testing", icon: <FaBug className="text-red-500" /> },
            { name: "Vulnerability Assessment", icon: <AiFillSecurityScan className="text-blue-500" /> },
            { name: "Ethical Hacking", icon: <FaCode className="text-green-500" /> },
            { name: "Malware Analysis & Forensics", icon: <FaFingerprint /> },
        ]
    },
    {
        category: "Cloud Security & DevSecOps",
        skills: [
            { name: "Security by Design", icon: <FaShieldAlt className="text-blue-400" /> },
            { name: "IAM & Cloud Architecture", icon: <FaDatabase className="text-sky-500" /> },
            { name: "CI/CD Pipeline Security", icon: <FaGithub className="text-gray-800 dark:text-gray-200" /> },
            { name: "IaC & Container Security", icon: <FaLinux /> },
        ]
    },
    {
        category: "System Engineering & AI",
        skills: [
            { name: "Python (Security Automation)", icon: <FaPython className="text-yellow-400" /> },
            { name: "Bash & Scripting", icon: <FaCode className="text-gray-500" /> },
            { name: "LLM, Prompt Eng & RAG", icon: <FaBrain className="text-purple-500" /> },
            { name: "Linux Server Hardening", icon: <FaLinux /> },
        ]
    },
    {
        category: "Framework & GRC",
        skills: [
            { name: "MITRE ATT&CK e CAPEC", icon: <FaShieldAlt className="text-purple-400" /> },
            { name: "OWASP Top 10", icon: <FaBug className="text-red-400" /> },
            { name: "NIST CSF 2.0", icon: <AiFillSecurityScan /> },
            { name: "ISO/IEC 27001, NIS2, DORA", icon: <FaFingerprint /> },
        ]
    }
];

export const allProjects = [
    {
        title: "Log2CAPEC - AI Security Engineer & Researcher",
        filterCategory: "Cybersecurity",
        category: "Tesi Magistrale - Cybersecurity",
        icon: <FaShieldAlt />,
        image: "/projects/tesi-magistrale.png",
        tags: ["Python", "Hugging Face", "LLM", "ChromaDB", "MITRE CAPEC"],
        github: "https://github.com/Daniele674/Log2CAPEC",
        live: null,
        link: "/projects/tesi-magistrale",
        detailedContent: () => (
            <p>
                Architettato e sviluppato una pipeline di <strong>Threat Intelligence</strong> per l&#39;analisi automatizzata di log eterogenei (ecosistema T-Pot), risolvendo il problema dell&#39;alert fatigue nei SOC.
                Ho implementato un LLM open-weight locale (Mistral-7B quantizzato a 4-bit) come interprete semantico upstream, applicando tecniche di <strong>prompt engineering</strong> avanzato (Chain-of-Thought, few-shot).
                Inoltre, ho progettato un motore di Information Retrieval ibrido per il <strong>mapping real-time sul framework MITRE CAPEC</strong>.
            </p>
        )
    },
    {
        title: "Offensive Security & Penetration Testing Portfolio",
        filterCategory: "Cybersecurity",
        category: "Ricerca Indipendente e Laboratorio Pratico",
        icon: <FaBug />,
        image: "/projects/penetration-testing.png", // Immagine suggerita da aggiungere in futuro
        tags: ["PTES", "OWASP", "Burp Suite", "Privilege Escalation"],
        github: "https://github.com/Daniele674/Penetration-Testing-Portfolio",
        live: null,
        link: "/projects/penetration-testing",
        detailedContent: () => (
            <p>
                Condotti molteplici <strong>penetration test</strong> end-to-end su architetture eterogenee (infrastrutture di test Vulnhub, Hack The Box e laboratori locali), seguendo le metodologie standard del settore come <strong>PTES</strong> e <strong>OWASP</strong>.
                Identificate e sfruttate vulnerabilità critiche appartenenti alle principali classi dell&#39;<strong>OWASP Top 10</strong> (Injections, Broken Access Control) e condotte attività di post-exploitation con tecniche avanzate di <strong>Privilege Escalation</strong> su sistemi Linux e Windows.
                Redatti write-up tecnici e report professionali completi di Executive Summary.
            </p>
        )
    },
    {
        title: "Project Aegis - Blockchain & Security Backend Developer",
        filterCategory: "Cybersecurity",
        category: "Progetto Universitario - Cybersecurity",
        icon: <FaCube />,
        image: "/projects/blockchain-isp.png",
        tags: ["Hyperledger Fabric", "Go", "Docker", "REST API"],
        github: "https://github.com/Daniele674/Project-Aegis",
        live: null,
        link: "/projects/blockchain-isp",
        detailedContent: () => (
            <p>
                Progettato e sviluppato una DApp (Decentralized Application) per un consorzio di ISP, finalizzata alla condivisione sicura, immutabile e in real-time di <strong>Threat Intelligence</strong> (Indicatori di Compromissione, attacchi DDoS, malware).
                Sviluppato Chaincode (Smart Contracts) in linguaggio <strong>Go</strong> su <strong>Hyperledger Fabric</strong> per garantire l&#39;auditability crittografica dei log di sicurezza. Integrato il framework Hyperledger FireFly come layer applicativo per orchestrare la rete.
            </p>
        )
    },
    {
        title: "MediCall - Software Engineer (Team Project)",
        filterCategory: "App Mobile",
        category: "App Challenge X Edizione | In partnership con Accenture Italia",
        icon: <FiSmartphone />,
        image: "/projects/medicall.png",
        tags: ["Flutter", "API Integration", "Agile", "Business Requirements"],
        github: "https://github.com/dany-el92/MediCall",
        live: null,
        link: "/projects/medicall",
        detailedContent: () => (
            <p>
                Progettato e sviluppato in team un&#39;<strong>applicazione mobile per l&#39;e-health</strong> dedicata alla prenotazione di servizi medici, integrando un <strong>assistente virtuale intelligente</strong> per ottimizzare la user experience.
                Gestito l&#39;intero ciclo di vita del software in un ambiente fortemente collaborativo, interfacciandosi con i mentor e i professionisti di <strong>Accenture</strong> per allineare le funzionalità tecniche ai requisiti di business richiesti dalla challenge.
            </p>
        )
    },
    {
        title: "Previsione Fitopatologie della Vite",
        filterCategory: "Machine Learning",
        category: "Tesi Triennale - Deep Learning",
        icon: <FaLeaf />,
        image: "/projects/precision-agriculture.png",
        tags: ["TensorFlow", "Keras", "CNN", "Python"],
        github: "https://github.com/Daniele674/Precision-Agriculture-and-Artificial-Intelligence-for-the-Prevention-of-Grapevine-Diseases",
        live: null,
        link: "/projects/precision-agriculture",
        detailedContent: () => (
            <p>
                Questo progetto di tesi triennale esplora l&#39;applicazione del Deep Learning per l&#39;agricoltura di precisione. È stato sviluppato e addestrato un modello basato su Reti Neurali Convoluzionali (CNN), sfruttando tecniche di Transfer Learning da architetture note (es. MobileNetV2), per classificare e prevedere la presenza di malattie nelle piante di vite a partire da immagini delle foglie.
            </p>
        )
    }
];

export const featuredProjects = allProjects.slice(0, 3);
