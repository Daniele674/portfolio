// app/projects/page.js

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { allProjects } from '@/data/portfolio';
import ProjectsGrid from '@/components/ProjectsGrid';

const filterCategories = ["Tutti", "Cybersecurity", "Machine Learning", "App Mobile"];

export default function ProjectsPage() {
    const [activeFilter, setActiveFilter] = useState("Tutti");

    const filteredProjects = activeFilter === "Tutti"
        ? allProjects
        : allProjects.filter(project => project.filterCategory === activeFilter);

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <section className="w-full py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-3 tracking-tight">
                            Galleria Progetti
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                            Una raccolta completa dei miei lavori. Clicca su una card per esplorare i dettagli di ogni progetto.
                        </p>
                    </div>

                    <div className="flex justify-center flex-wrap gap-4 mb-16">
                        {filterCategories.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`px-5 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${
                                    activeFilter === category
                                        ? 'bg-blue-600 text-white shadow-lg'
                                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <ProjectsGrid projects={filteredProjects} />

                </div>
            </section>
        </motion.main>
    );
}