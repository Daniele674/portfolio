// data/portfolio.js

// Le importazioni delle icone rimangono le stesse
import {FaReact, FaNodeJs, FaDocker, FaGolang} from 'react-icons/fa6';
import {SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb} from 'react-icons/si';
import {FaCube, FaFlask, FaBrain, FaLeaf, FaShieldAlt} from 'react-icons/fa';
import {FiSmartphone} from 'react-icons/fi';

// Abbiamo rimosso il vecchio array 'skills' e introdotto questa nuova struttura.
// Ho usato esattamente le competenze e i colori che avevi già definito.
export const categorizedSkills = [
    {
        category: "Frontend",
        skills: [
            {name: "React", icon: <FaReact className="text-blue-400"/>},
            {name: "Next.js", icon: <SiNextdotjs/>},
            {name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400"/>},
        ]
    },
    {
        category: "Backend",
        skills: [
            {name: "Node.js", icon: <FaNodeJs className="text-green-500"/>},
            {name: "Express", icon: <SiExpress/>},
            {name: "MongoDB", icon: <SiMongodb className="text-green-600"/>},
            {name: "Golang", icon: <FaGolang className="text-cyan-600"/>},
        ]
    },
    {
        category: "DevOps & Altro",
        skills: [
            {name: "Docker", icon: <FaDocker className="text-blue-500"/>},
            // Qui puoi aggiungere facilmente altre competenze in futuro (es. Git, Testing, CI/CD)
        ]
    }
];

export const allProjects = [
    {
        title: "Correlazione Eventi Honeypot e Pattern CAPEC",
        category: "Tesi Magistrale - Cybersecurity",
        // NUOVO CAMPO ICONA:
        icon: <FaShieldAlt/>,
        description: "Sviluppo di un sistema ibrido per la correlazione di eventi di sicurezza da honeypot con i pattern di attacco noti (CAPEC), utilizzando NLP e LLM.",
        image: "/projects/tesi-magistrale.png", // (lo lasciamo per la pagina dettaglio)
        tags: ["Python", "NLP", "LLM", "ChromaDB"],
        github: null,
        live: null,
        link: "/projects/tesi-magistrale" // NUOVO CAMPO LINK
    },
    {
        title: "Piattaforma Blockchain per Log di Sicurezza",
        category: "Progetto Universitario - Blockchain",
        icon: <FaCube/>,
        description: "Piattaforma per la condivisione sicura e decentralizzata di log di sicurezza tra ISP, basata su Hyperledger Fabric e sviluppata in Go.",
        image: "/projects/blockchain-isp.png",
        tags: ["Hyperledger Fabric", "Go", "Docker", "API"],
        github: "https://github.com/tuoutente/blockchain-repo",
        live: null,
        link: "/projects/blockchain-isp"
    },
    {
        title: "App MediCall - Assistente Medico Virtuale",
        category: "Progetto Universitario - Mobile App",
        icon: <FiSmartphone/>,
        description: "Assistente virtuale per la prenotazione di appuntamenti medici, realizzato con Flutter e un backend in Flask, con chatbot integrato.",
        image: "/projects/medicall.png",
        tags: ["Flutter", "Python", "Flask", "LLM"],
        github: "https://github.com/tuoutente/medicall-repo",
        live: null,
        link: "/projects/medicall"
    },
    {
        title: "Emotion GAIT - Analisi Emozioni dal Passo",
        category: "Progetto Universitario - Machine Learning",
        icon: <FaBrain/>,
        description: "Studio ed implementazione di un modello per il riconoscimento delle emozioni umane dall'analisi della camminata, tramite Pose Estimation e KNN.",
        image: "/projects/emotion-gait.png",
        tags: ["Python", "Scikit-Learn", "Yolov7", "KNN"],
        github: "https://github.com/tuoutente/emotion-gait-repo",
        live: null,
        link: "/projects/emotion-gait"
    },
    {
        title: "Previsione Fitopatologie della Vite",
        category: "Tesi Triennale - Deep Learning",
        icon: <FaLeaf/>,
        description: "Utilizzo di modelli di Deep Learning (CNN) e Transfer Learning per la previsione di fitopatologie nelle piante di vite da immagini fogliari.",
        image: "/projects/precision-agriculture.png",
        tags: ["TensorFlow", "Keras", "CNN", "Python"],
        github: "https://github.com/tuoutente/precision-agriculture-repo",
        live: null,
        link: "/projects/precision-agriculture"
    },
];

// Questo ora prenderà automaticamente i dati aggiornati
export const featuredProjects = allProjects.slice(0, 3);