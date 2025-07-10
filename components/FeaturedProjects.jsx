// components/FeaturedProjects.jsx

'use client';

import Link from 'next/link';
import {motion} from 'framer-motion';
import {featuredProjects} from '@/data/portfolio';
import CardSwap, {Card} from '@/components/ui/Components/CardSwap/CardSwap';
import {FiArrowRight} from 'react-icons/fi';

export default function FeaturedProjects() {
    return (
        <motion.section
            id="projects"
            className="mb-16 md:mb-24"
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.2}}
            transition={{duration: 0.5}}
        >
            {/* Contenitore principale con larghezza massima per centrare le colonne */}
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                    {/* Colonna Sinistra: Testo e CTA */}
                    <div className="text-center lg:text-left">
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100"
                            initial={{opacity: 0, x: -20}}
                            whileInView={{opacity: 1, x: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.6}}
                        >
                            Lavori in Primo Piano
                        </motion.h2>
                        <motion.p
                            className="text-lg text-gray-600 dark:text-gray-400 mb-8"
                            initial={{opacity: 0, x: -20}}
                            whileInView={{opacity: 1, x: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.6, delay: 0.1}}
                        >
                            Una selezione dei progetti che meglio rappresentano il mio percorso. Ogni card è un invito a
                            scoprire i dettagli del progetto.
                        </motion.p>
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.6, delay: 0.2}}
                        >
                            <Link
                                href="/projects"
                                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                            >
                                Scopri tutti i progetti →
                            </Link>
                        </motion.div>
                    </div>

                    {/* Colonna Destra: CardSwap */}
                    <motion.div
                        className="relative h-[400px] w-full max-w-sm mx-auto lg:max-w-none"
                        initial={{opacity: 0, scale: 0.9}}
                        whileInView={{opacity: 1, scale: 1}}
                        viewport={{once: true}}
                        transition={{duration: 0.6, delay: 0.2}}
                    >
                        <CardSwap
                            cardDistance={20}
                            verticalDistance={40}
                            delay={4000}
                            pauseOnHover={true}
                        >
                            {featuredProjects.map((project) => (
                                <Card key={project.title}>
                                    <Link href={project.link || '#'}>
                                        <div
                                            className="group bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg h-full flex flex-col p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-blue-500/10 cursor-pointer">
                                            <div className="text-3xl text-blue-500 dark:text-blue-400 mb-4">
                                                {project.icon}
                                            </div>
                                            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">
                                                {project.category}
                                            </p>
                                            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow">
                                                {project.description}
                                            </p>
                                            <div className="mt-auto pt-4 flex justify-between items-center">
                                                <div className="flex flex-wrap gap-1">
                                                    {project.tags.slice(0, 3).map(tag => (
                                                        <span key={tag}
                                                              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-semibold px-2 py-1 rounded-full">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                                <div
                                                    className="text-blue-500 dark:text-blue-400 transition-transform duration-300 group-hover:translate-x-1">
                                                    <FiArrowRight size={22}/>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </Card>
                            ))}
                        </CardSwap>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}