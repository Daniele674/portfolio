// components/FeaturedProjects.jsx

'use client'; // Necessario per framer-motion

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { featuredProjects } from '@/data/portfolio';
import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

// Animazioni
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: 'spring' } }
};

// Componente per la singola card, per un codice più pulito
function ProjectCard({ project }) {
    return (
        <motion.li
            variants={itemVariants}
            className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-transparent dark:border-gray-700/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10"
        >
            <div className="relative overflow-hidden">
                <Image
                    src={project.image}
                    alt={`Anteprima del progetto ${project.title}`}
                    width={500}
                    height={300}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                    {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                        <span key={tag} className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-xs font-medium px-2.5 py-1 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                    >
                        <FaGithub size={20} />
                        Codice
                    </a>
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                        >
                            <FiExternalLink size={20} />
                            Demo Live
                        </a>
                    )}
                </div>
            </div>
        </motion.li>
    );
}

export default function FeaturedProjects() {
    return (
        <motion.section
            id="projects"
            className="mb-16 md:mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-center text-3xl font-bold mb-12 text-gray-900 dark:text-gray-100">
                Progetti in Evidenza
            </h2>

            <motion.ul
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
            >
                {featuredProjects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </motion.ul>

            <div className="mt-12 text-center">
                <Link
                    href="/projects"
                    className="inline-block bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-black dark:hover:bg-white transition-colors"
                >
                    Guarda tutti i progetti
                </Link>
            </div>
        </motion.section>
    );
}