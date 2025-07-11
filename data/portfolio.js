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
        filterCategory: "Cybersecurity",
        category: "Tesi Magistrale - Cybersecurity",
        icon: <FaShieldAlt />,
        image: "/projects/tesi-magistrale.png", // Aggiungi un'immagine in public/projects/
        tags: ["Python", "NLP", "LLM", "ChromaDB"],
        github: "https://github.com/Daniele674/downloadElastic",
        live: null,
        link: "/projects/tesi-magistrale",
        detailedContent: () => (
            <p>
                Questo progetto di tesi magistrale si concentra sullo sviluppo di un sistema avanzato per analizzare e correlare automaticamente gli eventi di sicurezza raccolti da sistemi honeypot con i pattern di attacco standardizzati CAPEC (Common Attack Pattern Enumeration and Classification). L'obiettivo è trasformare dati grezzi in intelligence azionabile per anticipare le minacce, utilizzando tecniche di Natural Language Processing e Large Language Models per comprendere il contesto degli attacchi.
            </p>
        )
    },
    {
        title: "Piattaforma Blockchain per Log di Sicurezza",
        filterCategory: "Cybersecurity",
        category: "Progetto Universitario - Blockchain",
        icon: <FaCube />,
        image: "/projects/blockchain-isp.png", // Aggiungi un'immagine in public/projects/
        tags: ["Hyperledger Fabric", "Go", "Docker", "API"],
        github: "https://github.com/Daniele674/isp_security_logs", // Sostituisci con il link reale
        live: null,
        link: "/projects/blockchain-isp",
        detailedContent: () => (
            <p>
                Realizzazione di una piattaforma decentralizzata per la condivisione sicura e immutabile di log di attacchi informatici tra diversi Internet Service Provider (ISP). L'uso della tecnologia Hyperledger Fabric garantisce trasparenza e integrità dei dati, migliorando la collaborazione nella lotta contro le minacce informatiche. Il progetto include lo sviluppo di smart contract (chaincode) in Go e un'architettura basata su container Docker.
            </p>
        )
    },
    {
        title: "App MediCall - Assistente Medico Virtuale",
        filterCategory: "App Mobile",
        category: "Progetto Universitario - Mobile App",
        icon: <FiSmartphone />,
        image: "/projects/medicall.png", // Aggiungi un'immagine in public/projects/
        tags: ["Flutter", "Python", "Flask", "LLM"],
        github: "https://github.com/dany-el92/MediCall", // Sostituisci con il link reale
        live: null,
        link: "/projects/medicall",
        detailedContent: () => (
            <p>
                Sviluppo di un'applicazione mobile cross-platform con Flutter che funge da assistente virtuale per la prenotazione di appuntamenti medici. Il backend, realizzato in Flask, gestisce le prenotazioni e si integra con un chatbot basato su LLM per un'interazione naturale con l'utente. Questo progetto ha partecipato all' "App Challenge" in collaborazione con Accenture.
            </p>
        )
    },
    {
        title: "Emotion GAIT - Analisi Emozioni dal Passo",
        filterCategory: "Machine Learning",
        category: "Progetto Universitario - Machine Learning",
        icon: <FaBrain />,
        image: "/projects/emotion-gait.png", // Aggiungi un'immagine in public/projects/
        tags: ["Python", "Scikit-Learn", "Yolov7", "KNN"],
        github: "https://github.com/Daniele674/Emotion-GAIT-Knn-Dynamic-Time-Warping", // Sostituisci con il link reale
        live: null,
        link: "/projects/emotion-gait",
        detailedContent: () => (
            <p>
                Progetto di ricerca e sviluppo focalizzato sul riconoscimento delle emozioni umane attraverso l'analisi della camminata (gait analysis). Utilizzando il modello di object detection Yolov7 per la stima della posa (Pose Estimation), sono state estratte feature posturali per addestrare un classificatore K-Nearest Neighbors (KNN) in grado di distinguere diversi stati emotivi.
            </p>
        )
    },
    {
        title: "Previsione Fitopatologie della Vite",
        filterCategory: "Machine Learning",
        category: "Tesi Triennale - Deep Learning",
        icon: <FaLeaf />,
        image: "/projects/precision-agriculture.png", // Aggiungi un'immagine in public/projects/
        tags: ["TensorFlow", "Keras", "CNN", "Python"],
        github: "https://github.com/Daniele674/Precision-Agriculture-and-Artificial-Intelligence-for-the-Prevention-of-Grapevine-Diseases", // Sostituisci con il link reale
        live: null,
        link: "/projects/precision-agriculture",
        detailedContent: () => (
            <p>
                Questo progetto di tesi triennale esplora l'applicazione del Deep Learning per l'agricoltura di precisione. È stato sviluppato e addestrato un modello basato su Reti Neurali Convoluzionali (CNN), sfruttando tecniche di Transfer Learning da architetture note (es. MobileNetV2), per classificare e prevedere la presenza di malattie nelle piante di vite a partire da immagini delle foglie.
            </p>
        )
    },
];

export const featuredProjects = allProjects.slice(0, 3);