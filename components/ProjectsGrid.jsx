// components/ProjectsGrid.jsx

"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export default function ProjectsGrid({ projects = [] }) {
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
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm h-full w-full z-40" />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active ? (
                    <div className="fixed inset-0 grid place-items-center z-50 p-4">
                        <motion.button
                            key={`button-${active.title}-${id}`}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.05 } }}
                            className="flex absolute top-4 right-4 items-center justify-center bg-white rounded-full h-8 w-8 z-50"
                            onClick={() => setActive(null)}>
                            <CloseIcon />
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-full max-w-lg h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-2xl overflow-hidden shadow-2xl">
                            <motion.div layoutId={`image-${active.title}-${id}`}>
                                <img
                                    width={500}
                                    height={400}
                                    src={active.image}
                                    alt={active.title}
                                    className="w-full h-60 lg:h-72 object-cover" />
                            </motion.div>

                            <div className="p-6 flex flex-col flex-grow overflow-hidden">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <motion.h3
                                            layoutId={`title-${active.title}-${id}`}
                                            className="font-bold text-2xl text-neutral-800 dark:text-neutral-100">
                                            {active.title}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${active.category}-${id}`}
                                            className="text-neutral-600 dark:text-neutral-400 text-base">
                                            {active.category}
                                        </motion.p>
                                    </div>
                                    {active.github && (
                                        <motion.a
                                            layout
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            href={active.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 text-sm rounded-full font-bold bg-blue-600 hover:bg-blue-700 text-white transition-colors flex-shrink-0">
                                            Vedi Codice
                                        </motion.a>
                                    )}
                                </div>
                                <motion.div
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-neutral-600 text-sm md:text-base my-4 flex-grow overflow-auto dark:text-neutral-300 [scrollbar-width:none]">
                                    {active.detailedContent()}
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>

            <motion.ul
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <motion.li
                        layoutId={`card-${project.title}-${id}`}
                        key={project.title}
                        onClick={() => setActive(project)}
                        className="p-4 flex flex-col bg-white dark:bg-gray-800/50 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors shadow-sm hover:shadow-lg">
                        <div className="flex flex-col w-full">
                            <motion.div layoutId={`image-${project.title}-${id}`}>
                                <img
                                    width={400}
                                    height={240}
                                    src={project.image}
                                    alt={project.title}
                                    className="h-48 w-full rounded-lg object-cover" />
                            </motion.div>
                            <div className="flex flex-col items-start mt-4">
                                <motion.h3
                                    layoutId={`title-${project.title}-${id}`}
                                    className="font-semibold text-neutral-800 dark:text-neutral-200 text-lg">
                                    {project.title}
                                </motion.h3>
                                <motion.p
                                    layoutId={`description-${project.category}-${id}`}
                                    className="text-neutral-600 dark:text-neutral-400 text-sm">
                                    {project.category}
                                </motion.p>
                            </div>
                        </div>
                    </motion.li>
                ))}
            </motion.ul>
        </>
    );
}

export const CloseIcon = () => (
    <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.05 } }}
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        className="h-5 w-5 text-black"
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M18 6l-12 12" />
        <path d="M6 6l12 12" />
    </motion.svg>
);