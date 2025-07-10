// components/ProjectCard.jsx

'use client';

import Image from 'next/image';
import Link from 'next/link';
import {motion} from 'framer-motion';
import {FaGithub} from "react-icons/fa6";
import {FiExternalLink} from "react-icons/fi";

const itemVariants = {
    hidden: {y: 20, opacity: 0},
    show: {y: 0, opacity: 1, transition: {type: 'spring'}}
};

export default function ProjectCard({project}) {
    return (
        <motion.li
            variants={itemVariants}
            className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-transparent dark:border-gray-700/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10"
        >
            <div className="relative overflow-hidden h-52">
                <Image
                    src={project.image}
                    alt={`Anteprima del progetto ${project.title}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>

            <div className="p-6 flex flex-col h-full">
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">{project.category}</p>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                    {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm flex-grow">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                        <span key={tag}
                              className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-xs font-medium px-2.5 py-1 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                        >
                            <FaGithub size={20}/>
                            Codice
                        </a>
                    )}
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                        >
                            <FiExternalLink size={20}/>
                            Demo Live
                        </a>
                    )}
                </div>
            </div>
        </motion.li>
    );
}