// components/ProjectsGrid.jsx

"use client";

import React, {useEffect, useId, useRef, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {useOutsideClick} from "@/hooks/use-outside-click";
import Link from 'next/link';

// 1. RE-IMPORTIAMO LINKPREVIEW
import {LinkPreview} from "@/components/ui/link-preview";

// Componente interno per il contenuto della card (per pulizia del codice)
const CardContent = ({project}) => (
    <div className="flex flex-col h-full">
        <div
            className="relative w-full h-48 rounded-t-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center overflow-hidden">
            <div className="text-6xl text-gray-300 dark:text-gray-600">
                {project.icon}
            </div>
        </div>
        <div className="p-4 md:p-6 flex flex-col items-start w-full flex-grow">
            <h3 className="font-bold text-neutral-800 dark:text-neutral-200 text-lg">
                {project.title}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                {project.category}
            </p>
            <div className="flex flex-wrap gap-2 my-4">
                {project.tags.slice(0, 3).map(tag => (
                    <span key={tag}
                          className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-semibold px-2.5 py-1 rounded-full">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </div>
);


export default function ProjectsGrid({projects = []}) {
    const [active, setActive] = useState(null);
    const id = useId();
    const ref = useRef(null);

    useEffect(() => {
        function onKeyDown(event) {
            if (event.key === "Escape") {
                setActive(null);
            }
        }

        if (active) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            <AnimatePresence>
                {active && (
                    <motion.div
                        initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm h-full w-full z-40"/>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active ? (
                    <div className="fixed inset-0 grid place-items-center z-50 p-4">
                        <motion.button
                            key={`button-${active.title}-${id}`} layout initial={{opacity: 0}} animate={{opacity: 1}}
                            exit={{opacity: 0, transition: {duration: 0.05}}}
                            className="flex absolute top-4 right-4 items-center justify-center bg-white rounded-full h-8 w-8 z-50"
                            onClick={() => setActive(null)}>
                            <CloseIcon/>
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.title}-${id}`} ref={ref}
                            className="w-full max-w-lg h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-2xl overflow-hidden shadow-2xl">
                            <div
                                className="relative w-full h-60 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center overflow-hidden">
                                <div className="text-8xl text-gray-300 dark:text-gray-600">{active.icon}</div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">{active.title}</h3>
                                <p className="text-base text-neutral-600 dark:text-neutral-400">{active.category}</p>
                                <div className="flex flex-wrap gap-2 my-4">
                                    {active.tags.map(tag => (
                                        <span key={tag}
                                              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                                    ))}
                                </div>
                                <div className="text-neutral-600 text-base my-2 overflow-auto dark:text-neutral-300">
                                    {active.detailedContent()}
                                </div>
                            </div>
                            <div className="p-6 pt-2 mt-auto border-t border-gray-200 dark:border-gray-700/50">
                                {active.github && (
                                    // 2. REINTEGRIAMO LINKPREVIEW CON isStatic={false}
                                    <LinkPreview
                                        url={active.github}
                                        isStatic={false}
                                        className="font-semibold text-blue-600 hover:underline"
                                    >
                                        Vedi il codice su GitHub →
                                    </LinkPreview>
                                )}
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>

            <motion.ul layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    // 3. AGGIUNGIAMO IL BORDO GRADIENTE ALLA CARD NELLA GRIGLIA
                    <motion.li
                        layoutId={`card-${project.title}-${id}`} key={project.title} onClick={() => setActive(project)}
                        // Il `li` diventa il contenitore del gradiente
                        className="p-[1px] bg-gradient-to-br from-neutral-200 via-neutral-100 to-neutral-200 dark:from-neutral-800 dark:via-neutral-800/50 dark:to-neutral-800 rounded-2xl cursor-pointer hover:bg-gradient-to-br hover:from-blue-400 hover:to-purple-400 transition-all duration-300"
                    >
                        {/* Il `div` interno ha il colore di sfondo solido, creando l'effetto bordo */}
                        <div className="bg-white dark:bg-gray-800 rounded-[15px] h-full w-full">
                            <CardContent project={project}/>
                        </div>
                    </motion.li>
                ))}
            </motion.ul>
        </>
    );
}

export const CloseIcon = () => (
    <motion.svg
        initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, transition: {duration: 0.05}}}
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24"
        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        className="h-5 w-5 text-black"
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M18 6l-12 12"/>
        <path d="M6 6l12 12"/>
    </motion.svg>
);