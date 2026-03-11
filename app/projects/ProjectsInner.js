// app/projects/ProjectsInner.js
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { allProjects } from '@/data/portfolio';
import ProjectsGrid from '@/components/ProjectsGrid';
import { useSearchParams } from 'next/navigation';

const filterCategories = ["Tutti", "Cybersecurity", "Machine Learning", "App Mobile"];

export default function ProjectsInner() {
    const [activeFilter, setActiveFilter] = useState("Tutti");
    const [hoveredFilter, setHoveredFilter] = useState(null);

    const searchParams = useSearchParams();
    const projectToOpen = searchParams.get('open');

    const filteredProjects = activeFilter === "Tutti"
        ? allProjects
        : allProjects.filter(p => p.filterCategory === activeFilter);

    return (
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <section className="w-full py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
                        <motion.h1
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-neutral-900 dark:text-white tracking-tighter mb-6 leading-tight"
                        >
                            Esplora i Miei <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                                Lavori Migliori.
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed font-medium"
                        >
                            Una collezione curata di progetti che fondono design pulito, performance e soluzioni scalabili. Seleziona una card per scoprire tecnologie e sfide affrontate.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex justify-center flex-wrap gap-3 mb-16"
                        onMouseLeave={() => setHoveredFilter(null)}
                    >
                        {filterCategories.map(category => {
                            const isActive = activeFilter === category;
                            return (
                                <button
                                    key={category}
                                    onClick={() => setActiveFilter(category)}
                                    onMouseEnter={() => setHoveredFilter(category)}
                                    className={`relative px-6 sm:px-5 py-3 sm:py-2 text-base sm:text-sm font-medium rounded-full transition-colors duration-300 z-10 ${isActive
                                            ? 'text-white'
                                            : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                                        }`}
                                >
                                    {hoveredFilter === category && !isActive && (
                                        <motion.div
                                            layoutId="filter-hover"
                                            className="absolute inset-0 bg-gray-200 dark:bg-gray-800 rounded-full -z-10"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        />
                                    )}
                                    {isActive && (
                                        <motion.div
                                            layoutId="filter-active"
                                            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 shadow-md rounded-full -z-10"
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        />
                                    )}
                                    {category}
                                </button>
                            );
                        })}
                    </motion.div>

                    <ProjectsGrid
                        projects={filteredProjects}
                        initialActiveProjectTitle={projectToOpen}
                    />
                </div>
            </section>
        </motion.main>
    );
}
