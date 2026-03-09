// components/SkillsSection.jsx

'use client';

import { motion } from 'framer-motion';
import { categorizedSkills } from '@/data/portfolio';

// Varianti per l'animazione di entrata del contenitore e dei figli
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.9 },
    show: { y: 0, opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 24 } },
};

export default function SkillsSection() {
    return (
        <motion.section
            id="skills"
            className="mb-16 md:mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-gray-100">
                Le mie Competenze Tecniche
            </h2>

            {/* Bento Grid 2x2 per le categorie */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                {categorizedSkills.map((categoryGroup, idx) => (
                    <motion.div 
                        key={categoryGroup.category}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        className="bg-gray-50/50 dark:bg-gray-900/30 p-6 md:p-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm"
                    >
                        {/* Titolo della Categoria */}
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
                            <h3 className="text-xl md:text-2xl font-bold text-center text-gray-800 dark:text-gray-100 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300">
                                {categoryGroup.category}
                            </h3>
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
                        </div>

                        {/* Griglia interna per le skills 2x2 */}
                        <motion.ul
                            className="grid grid-cols-2 gap-4 sm:gap-6"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {categoryGroup.skills.map((skill) => (
                                <motion.li
                                    key={skill.name}
                                    variants={itemVariants}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    className="group flex flex-col items-center justify-center p-4 sm:p-6 bg-white dark:bg-slate-900/80 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 dark:hover:border-blue-400/50 hover:shadow-xl transition-all duration-300 overflow-hidden relative"
                                >
                                    {/* Effetto glow al passaggio del mouse */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:to-blue-500/10 dark:group-hover:to-blue-400/10 transition-colors duration-500 pointer-events-none" />
                                    
                                    <span className="text-4xl sm:text-5xl mb-3 transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                                        {skill.icon}
                                    </span>
                                    <span className="font-semibold text-center text-sm md:text-base text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {skill.name}
                                    </span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}