// components/SkillsSection.jsx

'use client'; // Necessario per framer-motion

import {motion} from 'framer-motion';
// Importiamo la nuova struttura dati
import {categorizedSkills} from '@/data/portfolio';

// Definiamo le animazioni per un codice più leggibile
const containerVariants = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Applica un ritardo tra l'animazione di ogni figlio
        },
    },
};

const itemVariants = {
    hidden: {y: 20, opacity: 0},
    show: {y: 0, opacity: 1, transition: {type: 'spring'}},
};

export default function SkillsSection() {
    return (
        <motion.section
            id="skills"
            className="mb-16 md:mb-24"
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.2}}
            transition={{duration: 0.5}}
        >
            <h2 className="text-center text-3xl font-bold mb-12 text-gray-900 dark:text-gray-100">
                Le mie Competenze Tecniche
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {categorizedSkills.map((categoryGroup) => (
                    <div key={categoryGroup.category}>
                        <h3 className="text-xl font-semibold text-center mb-4 text-gray-800 dark:text-gray-200">
                            {categoryGroup.category}
                        </h3>
                        <motion.ul
                            className="grid grid-cols-2 gap-4"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show" // Anima quando la lista entra nella vista
                            viewport={{once: true, amount: 0.2}}
                        >
                            {categoryGroup.skills.map((skill) => (
                                <motion.li
                                    key={skill.name}
                                    className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center justify-center gap-2 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                                    variants={itemVariants}
                                >
                                    <span className="text-4xl">{skill.icon}</span>
                                    <span
                                        className="font-medium text-center text-gray-800 dark:text-gray-200">{skill.name}</span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>
                ))}
            </div>
        </motion.section>
    );
}