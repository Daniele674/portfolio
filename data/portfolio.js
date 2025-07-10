// data/portfolio.js

// Le importazioni delle icone rimangono le stesse
import {FaReact, FaNodeJs, FaDocker, FaGolang} from 'react-icons/fa6';
import {SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb} from 'react-icons/si';

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
        description: "Sviluppo di un sistema ibrido per la correlazione di eventi di sicurezza da honeypot con i pattern di attacco noti (CAPEC), utilizzando NLP e LLM.",
        image: "/projects/tesi-magistrale.png", // -> Aggiungi un'immagine in public/projects/
        tags: ["Python", "NLP", "LLM", "ChromaDB", "Machine Learning"],
        github: null, // Aggiungi il link se/quando sarà pubblico
        live: null,
    },
    {
        title: "Piattaforma Blockchain per Log di Sicurezza",
        category: "Progetto Universitario - Blockchain",
        description: "Piattaforma per la condivisione sicura e decentralizzata di log di sicurezza tra ISP, basata su Hyperledger Fabric e sviluppata in Go.",
        image: "/projects/blockchain-isp.png", // -> Aggiungi un'immagine in public/projects/
        tags: ["Hyperledger Fabric", "Go", "Docker", "Node.js", "API"],
        github: "https://github.com/tuoutente/blockchain-repo", // Sostituisci con il link reale
        live: null,
    },
    {
        title: "App MediCall - Assistente Medico Virtuale",
        category: "Progetto Universitario - Mobile App",
        description: "Assistente virtuale per la prenotazione di appuntamenti medici, realizzato con Flutter e un backend in Flask, con chatbot integrato.",
        image: "/projects/medicall.png", // -> Aggiungi un'immagine in public/projects/
        tags: ["Flutter", "Python", "Flask", "LLM", "Twilio API", "Oracle DB"],
        github: "https://github.com/tuoutente/medicall-repo", // Sostituisci con il link reale
        live: null, // Potresti linkare il manifesto "App Challenge"
    },
    {
        title: "Emotion GAIT - Analisi Emozioni dal Passo",
        category: "Progetto Universitario - Machine Learning",
        description: "Studio ed implementazione di un modello per il riconoscimento delle emozioni umane dall'analisi della camminata, tramite Pose Estimation e KNN.",
        image: "/projects/emotion-gait.png", // -> Aggiungi un'immagine in public/projects/
        tags: ["Python", "Scikit-Learn", "Yolov7", "KNN", "Data Mining"],
        github: "https://github.com/tuoutente/emotion-gait-repo", // Sostituisci con il link reale
        live: null,
    },
    {
        title: "Previsione Fitopatologie della Vite",
        category: "Tesi Triennale - Deep Learning",
        description: "Utilizzo di modelli di Deep Learning (CNN) e Transfer Learning per la previsione di fitopatologie nelle piante di vite da immagini fogliari.",
        image: "/projects/precision-agriculture.png", // -> Aggiungi un'immagine in public/projects/
        tags: ["TensorFlow", "Keras", "CNN", "Computer Vision", "Python"],
        github: "https://github.com/tuoutente/precision-agriculture-repo", // Sostituisci con il link reale
        live: null,
    },
];


// AGGIORNA featuredProjects per usare gli stessi dati (opzionale ma consigliato)
export const featuredProjects = allProjects.slice(0, 2); // Mostra i primi due come "in evidenza"