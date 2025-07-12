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
import {FaFingerprint, FaShieldAlt} from "react-icons/fa";
import {AiFillSecurityScan} from "react-icons/ai";

// Dati per la sezione "Le Mie Competenze" categorizzate
export const categorizedSkills = [
    {
        category: "Cybersecurity",
        skills: [
            {name: "Penetration Testing", icon: <FaBug className="text-red-500"/>},
            {name: "Secure Programming", icon: <FaCode className="text-green-500"/>},
            {name: "Vulnerability Scanning", icon: <AiFillSecurityScan className="text-blue-500"/>},
            {name: "Digital Forensics", icon: <FaFingerprint/>},
        ]
    },
    {
        category: "Sviluppo & Framework",
        skills: [
            {name: "Python", icon: <FaPython className="text-yellow-400"/>},
            {name: "Flask", icon: <SiFlask/>},
            {name: "Java", icon: <FaJava className="text-orange-500"/>},
            {name: "Flutter", icon: <FaFlutter className="text-sky-400"/>},
        ]
    },
    {
        category: "Altre Tecnologie",
        skills: [
            {name: "Database (SQL, NoSQL)", icon: <FaDatabase className="text-purple-400"/>},
            {name: "Git & GitHub", icon: <FaGithub className="text-blue-600"/>},
            {name: "Linux OS", icon: <FaLinux/>},
            {name: "Unity", icon: <SiUnity/>},
        ]
    }
];

export const allProjects = [
    {
        title: "Correlazione Eventi Honeypot e Pattern CAPEC",
        filterCategory: "Cybersecurity",
        category: "Tesi Magistrale - Cybersecurity",
        icon: <FaShieldAlt/>,
        image: "/projects/tesi-magistrale.png", // Aggiungi un'immagine in public/projects/
        tags: ["Python", "NLP", "LLM", "ChromaDB"],
        github: "https://github.com/Daniele674/downloadElastic",
        live: null,
        link: "/projects/tesi-magistrale",
        detailedContent: () => (
            <p>
                Questo progetto di tesi magistrale si concentra sullo sviluppo di un sistema avanzato per analizzare e
                correlare automaticamente gli eventi di sicurezza raccolti da sistemi honeypot con i pattern di attacco
                standardizzati CAPEC (Common Attack Pattern Enumeration and Classification). L&#39;obiettivo è trasformare
                dati grezzi in intelligence azionabile per anticipare le minacce, utilizzando tecniche di Natural
                Language Processing e Large Language Models per comprendere il contesto degli attacchi.
            </p>
        )
    },
    {
        title: "Piattaforma Blockchain per Log di Sicurezza",
        filterCategory: "Cybersecurity",
        category: "Progetto Universitario - Blockchain",
        icon: <FaCube/>,
        image: "/projects/blockchain-isp.png", // Aggiungi un'immagine in public/projects/
        tags: ["Hyperledger Fabric", "Go", "Docker", "API"],
        github: "https://github.com/Daniele674/isp_security_logs", // Sostituisci con il link reale
        live: null,
        link: "/projects/blockchain-isp",
        detailedContent: () => (
            <p>
                Realizzazione di una piattaforma decentralizzata per la condivisione sicura e immutabile di log di
                attacchi informatici tra diversi Internet Service Provider (ISP). L&#39;uso della tecnologia Hyperledger
                Fabric garantisce trasparenza e integrità dei dati, migliorando la collaborazione nella lotta contro le
                minacce informatiche. Il progetto include lo sviluppo di smart contract (chaincode) in Go e
                un&#39;architettura basata su container Docker.
            </p>
        )
    },
    {
        title: "App MediCall - Assistente Medico Virtuale",
        filterCategory: "App Mobile",
        category: "Progetto Universitario - Mobile App",
        icon: <FiSmartphone/>,
        image: "/projects/medicall.png", // Aggiungi un'immagine in public/projects/
        tags: ["Flutter", "Python", "Flask", "LLM"],
        github: "https://github.com/dany-el92/MediCall", // Sostituisci con il link reale
        live: null,
        link: "/projects/medicall",
        detailedContent: () => (
            <p>
                Sviluppo di un&#39;applicazione mobile cross-platform con Flutter che funge da assistente virtuale per la
                prenotazione di appuntamenti medici. Il backend, realizzato in Flask, gestisce le prenotazioni e si
                integra con un chatbot basato su LLM per un&#39;interazione naturale con l&#39;utente. Questo progetto ha
                partecipato all&#39; &#34;App Challenge&#34; in collaborazione con Accenture.
            </p>
        )
    },
    {
        title: "Emotion GAIT - Analisi Emozioni dal Passo",
        filterCategory: "Machine Learning",
        category: "Progetto Universitario - Machine Learning",
        icon: <FaBrain/>,
        image: "/projects/emotion-gait.png", // Aggiungi un'immagine in public/projects/
        tags: ["Python", "Scikit-Learn", "Yolov7", "KNN"],
        github: "https://github.com/Daniele674/Emotion-GAIT-Knn-Dynamic-Time-Warping", // Sostituisci con il link reale
        live: null,
        link: "/projects/emotion-gait",
        detailedContent: () => (
            <p>
                Progetto di ricerca e sviluppo focalizzato sul riconoscimento delle emozioni umane attraverso l&#39;analisi
                della camminata (gait analysis). Utilizzando il modello di object detection Yolov7 per la stima della
                posa (Pose Estimation), sono state estratte feature posturali per addestrare un classificatore K-Nearest
                Neighbors (KNN) in grado di distinguere diversi stati emotivi.
            </p>
        )
    },
    {
        title: "Previsione Fitopatologie della Vite",
        filterCategory: "Machine Learning",
        category: "Tesi Triennale - Deep Learning",
        icon: <FaLeaf/>,
        image: "/projects/precision-agriculture.png", // Aggiungi un'immagine in public/projects/
        tags: ["TensorFlow", "Keras", "CNN", "Python"],
        github: "https://github.com/Daniele674/Precision-Agriculture-and-Artificial-Intelligence-for-the-Prevention-of-Grapevine-Diseases", // Sostituisci con il link reale
        live: null,
        link: "/projects/precision-agriculture",
        detailedContent: () => (
            <p>
                Questo progetto di tesi triennale esplora l&#39;applicazione del Deep Learning per l&#39;agricoltura di
                precisione. È stato sviluppato e addestrato un modello basato su Reti Neurali Convoluzionali (CNN),
                sfruttando tecniche di Transfer Learning da architetture note (es. MobileNetV2), per classificare e
                prevedere la presenza di malattie nelle piante di vite a partire da immagini delle foglie.
            </p>
        )
    },
];

export const featuredProjects = allProjects.slice(0, 3);