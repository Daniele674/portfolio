// components/ProjectsGrid.jsx

"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { LinkPreview } from "@/components/ui/link-preview";

const CardContent = ({ project, isFeatured }) => {
    // Mouse tracking for glare effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div 
            onMouseMove={handleMouseMove}
            className="flex flex-col h-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-[24px] sm:rounded-[32px] overflow-hidden group relative p-6 sm:p-8 transition-colors duration-500 hover:border-blue-500/30 dark:hover:border-blue-400/30"
        >
            {/* Hover Glare Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[24px] sm:rounded-[32px] opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                        600px circle at ${mouseX}px ${mouseY}px,
                        rgba(59, 130, 246, 0.08),
                        transparent 80%
                        )
                    `,
                }}
            />

            {/* Top Row: Small Icon and Category */}
            <div className="flex items-start justify-between mb-5 relative z-10 w-full gap-4 shrink-0">
                <div className="flex items-center justify-center p-3.5 bg-neutral-100 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-200 rounded-2xl group-hover:bg-blue-500 group-hover:text-white transition-colors duration-500 shadow-sm border border-neutral-200/50 dark:border-neutral-700/50 shrink-0">
                    <div className="text-xl sm:text-2xl">
                        {project.icon}
                    </div>
                </div>
                <div className="text-[9px] sm:text-[10px] leading-tight font-bold text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-blue-100 dark:border-blue-800/30 tracking-widest uppercase shadow-sm text-center max-w-[75%] flex items-center justify-center">
                    {project.category}
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex flex-col flex-grow justify-start relative z-10 w-full">
                <h3 className={`font-bold tracking-tight leading-snug mb-4 transition-colors duration-500 ${isFeatured ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'}`}>
                    <span className="bg-clip-text text-transparent bg-gradient-to-br from-neutral-900 to-neutral-500 dark:from-white dark:to-neutral-500 group-hover:from-blue-600 group-hover:to-purple-600 dark:group-hover:from-blue-400 dark:group-hover:to-purple-400">
                        {project.title}
                    </span>
                </h3>
                
                <p className={`text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium mb-6 ${isFeatured ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'}`}>
                     {project.description}
                </p>

                {/* Bottom Row: Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-2 shrink-0">
                    {project.tags.slice(0, isFeatured ? 4 : 2).map(tag => (
                        <span key={tag}
                              className="bg-white dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full shadow-sm transition-all group-hover:border-blue-200 dark:group-hover:border-blue-900 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                            {tag}
                        </span>
                    ))}
                    {project.tags.length > (isFeatured ? 4 : 2) && (
                        <span className="bg-white dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 text-neutral-400 dark:text-neutral-500 text-[10px] sm:text-xs font-bold px-2 py-1.5 rounded-full shadow-sm">
                            +{project.tags.length - (isFeatured ? 4 : 2)}
                        </span>
                    )}
                </div>
            </div>
            
            {/* Background Watermark Icon (Very subtle) */}
            <div className="absolute -bottom-8 -right-8 text-[120px] sm:text-[180px] md:text-[220px] text-neutral-50 dark:text-neutral-800 opacity-60 dark:opacity-40 group-hover:scale-110 -rotate-12 group-hover:-rotate-0 group-hover:text-blue-50 dark:group-hover:text-blue-900/20 transition-all duration-700 pointer-events-none z-0">
                {project.icon}
            </div>
        </div>
    );
};

// Il componente ora accetta la prop `initialActiveProjectTitle`
export default function ProjectsGrid({ projects = [], initialActiveProjectTitle = null }) {

    // Funzione per trovare il progetto iniziale basandosi sul titolo ricevuto dall'URL
    const findInitialProject = () => {
        if (!initialActiveProjectTitle) return null;
        return projects.find(p => p.title === initialActiveProjectTitle) || null;
    };

    // Lo stato `active` viene inizializzato con il risultato della funzione
    const [active, setActive] = useState(findInitialProject);

    const id = useId();
    const ref = useRef(null);

    useEffect(() => {
        function onKeyDown(event) {
            if (event.key === "Escape") {
                setActive(null);
            }
        }
        if (active) { document.body.style.overflow = "hidden"; }
        else { document.body.style.overflow = "auto"; }
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            <AnimatePresence>
                {active && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-md h-full w-full z-40" />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active ? (
                    <div className="fixed inset-0 grid place-items-center z-50 p-4">
                        <motion.button
                            key={`button-${active.title}-${id}`} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.1 } }}
                            className="absolute top-6 right-6 md:top-8 md:right-8 bg-white/10 dark:bg-black/20 hover:bg-white/30 dark:hover:bg-black/40 backdrop-blur-md border border-white/20 rounded-full h-12 w-12 flex items-center justify-center z-[60] transition-colors"
                            onClick={() => setActive(null)}>
                            <CloseIcon className="text-white drop-shadow-md" />
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.title}-${id}`} ref={ref}
                            className="w-full max-w-[95vw] lg:max-w-[1000px] xl:max-w-[1100px] h-auto max-h-[90vh] flex flex-col lg:flex-row bg-white/95 dark:bg-neutral-900/95 backdrop-blur-3xl shadow-2xl rounded-[32px] sm:rounded-[40px] z-[70] overflow-hidden border border-white/50 dark:border-neutral-700/50">
                            
                            {/* Left Side: Visual Hero (Mesh Gradient + Icon) */}
                            <div className="relative w-full lg:w-2/5 h-48 sm:h-64 lg:h-auto flex-shrink-0 overflow-hidden">
                                {/* Modal Animated Mesh Gradient Background */}
                                <motion.div 
                                    initial={{ scale: 1.1 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 dark:from-blue-600 dark:via-indigo-800 dark:to-purple-900"
                                >
                                    <div className="absolute inset-0 opacity-50 mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.3) 0%, transparent 60%)' }}></div>
                                </motion.div>

                                {/* Modal Floating Glass Badge */}
                                <motion.div 
                                    initial={{ y: 30, opacity: 0, scale: 0.8 }}
                                    animate={{ y: 0, opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 100 }}
                                    className="absolute inset-0 flex items-center justify-center p-8 lg:p-12 z-10"
                                >
                                    <div className="bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/30 dark:border-white/10 p-8 sm:p-12 rounded-[2rem] sm:rounded-[3rem] shadow-2xl flex items-center justify-center">
                                         <div className="text-7xl sm:text-8xl lg:text-9xl text-white drop-shadow-2xl opacity-90">
                                            {active.icon}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Right Side: Content & Actions */}
                            <div className="w-full lg:w-3/5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between overflow-y-auto lg:overflow-visible">
                                <div className="flex flex-col">
                                    <motion.p 
                                        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                                        className="text-sm sm:text-base text-blue-600 dark:text-blue-400 font-bold mb-2 uppercase tracking-widest"
                                    >
                                        {active.category}
                                    </motion.p>
                                    
                                    <motion.h3 
                                        initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
                                        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-neutral-100 mb-6 tracking-tight leading-tight"
                                    >
                                        {active.title}
                                    </motion.h3>
                                    
                                    <motion.div 
                                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
                                        className="prose prose-blue dark:prose-invert prose-base sm:prose-lg max-w-none text-neutral-700 dark:text-neutral-300 leading-relaxed mb-8 custom-scrollbar line-clamp-none lg:line-clamp-6"
                                    >
                                        {active.detailedContent()}
                                    </motion.div>

                                    <motion.div 
                                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                                        className="flex flex-wrap gap-2 mb-8"
                                    >
                                        {active.tags.map(tag => (
                                            <span key={tag}
                                                  className="bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-xl border border-neutral-200/50 dark:border-neutral-700/50 uppercase tracking-wide">
                                                {tag}
                                            </span>
                                        ))}
                                    </motion.div>
                                </div>

                                {/* Actions */}
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
                                    className="flex items-center pt-6 mt-auto border-t border-neutral-100 dark:border-neutral-800/50"
                                >
                                    {active.github && (
                                        <LinkPreview
                                            url={active.github}
                                            isStatic={false}
                                            className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 font-bold text-white rounded-2xl overflow-hidden transition-transform hover:scale-105 active:scale-95"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 border justify-center border-blue-500/50"></div>
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-shimmer"></div>
                                            <span className="relative z-10 flex items-center gap-2">
                                                Vedi su GitHub
                                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                            </span>
                                        </LinkPreview>
                                    )}
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>

        <motion.ul layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 auto-rows-[1fr]">
                {projects.map((project, idx) => {
                    // Bento Box Layout Logic: Make the first project larger (span 2 cols) if it's the "Tutti" view or has enough items
                    const isFeatured = idx === 0 && projects.length > 3;
                    
                    return (
                        <motion.li
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: (idx % 3) * 0.15, ease: "easeOut" }}
                            layoutId={`card-${project.title}-${id}`} key={project.title} onClick={() => setActive(project)}
                            className={`group relative cursor-pointer list-none ${isFeatured ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'}`}
                        >
                            {/* Colorful drop shadow behind the card */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] sm:rounded-[34px] blur-lg opacity-0 group-hover:opacity-40 transition duration-700"></div>
                            <div className="relative h-full w-full rounded-[24px] sm:rounded-[32px] shadow-2xl shadow-gray-200/50 dark:shadow-black/40 hover:-translate-y-2 hover:shadow-3xl transition-all duration-500 bg-white dark:bg-gray-800">
                                <CardContent project={project} isFeatured={isFeatured} />
                            </div>
                        </motion.li>
                    );
                })}
            </motion.ul>
        </>
    );
}

export const CloseIcon = ({ className }) => (
    <motion.svg
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24"
        fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        className={`h-6 w-6 ${className || "text-black dark:text-white"}`}
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M18 6l-12 12" />
        <path d="M6 6l12 12" />
    </motion.svg>
);