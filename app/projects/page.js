// app/projects/page.js

'use client';

import {motion} from 'framer-motion';
import {allProjects} from '@/data/portfolio'; // Importa tutti i progetti
import ProjectCard from '@/components/ProjectCard'; // Importa il componente riutilizzabile

const containerVariants = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {staggerChildren: 0.1}
    }
};

export default function ProjectsPage() {
    return (
        <motion.main
            className="max-w-4xl mx-auto px-4 py-8"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
        >
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    I Miei Progetti
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                    Una selezione di lavori universitari e personali che dimostrano le mie competenze.
                </p>
            </div>

            <motion.ul
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                {allProjects.map((project) => (
                    <ProjectCard key={project.title} project={project}/>
                ))}
            </motion.ul>
        </motion.main>
    );
}