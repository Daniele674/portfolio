// data/portfolio.js

// Per le icone, installa react-icons: npm install react-icons
import { FaReact, FaNodeJs, FaDocker, FaGolang } from 'react-icons/fa6';
import { SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb } from 'react-icons/si';

export const skills = [
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Golang", icon: <FaGolang className="text-cyan-600" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
];

export const featuredProjects = [
    {
        title: "E-commerce Ortopedico",
        description: "Piattaforma B2B/B2C per la vendita di prodotti ortopedici, con carrello, pagamenti Stripe e dashboard amministrativa.",
        tags: ["Next.js", "React", "MongoDB", "Stripe"],
        link: "/projects/ecommerce-ortopedico" // Link alla pagina dettaglio
    },
    {
        title: "Piattaforma Blockchain per ISP",
        description: "Sistema basato su Hyperledger Fabric per lo scambio sicuro e decentralizzato di log di attacchi informatici tra Internet Service Provider.",
        tags: ["Hyperledger Fabric", "Go", "Docker", "Node.js"],
        link: "/projects/blockchain-isp"
    }
];