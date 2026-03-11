// components/FeaturedProjects.jsx

'use client';

// 1. IMPORTA useRouter DA next/navigation
import {useRouter} from 'next/navigation';
import {motion} from 'framer-motion';
import {featuredProjects} from '@/data/portfolio';
import CardSwap, {Card} from '@/components/ui/Components/CardSwap/CardSwap';
import {FiArrowRight} from 'react-icons/fi';

const extractTextFromReactNode = (node) => {
    if (typeof node === 'string') return node;
    if (typeof node === 'number') return String(node);
    if (!node) return '';
    if (Array.isArray(node)) return node.map(extractTextFromReactNode).join('');
    if (node.props && node.props.children) return extractTextFromReactNode(node.props.children);
    return '';
};

export default function FeaturedProjects() {
    // 2. CREA UN'ISTANZA DEL ROUTER
    const router = useRouter();

    return (
        <motion.section
            id="projects"
            className="mb-16 md:mb-24"
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.2}}
            transition={{duration: 0.5}}
        >
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col items-center lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center gap-8">
                    <div className="text-center lg:text-left w-full max-w-md">
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
                            className="flex justify-center lg:justify-start w-full"
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.6, delay: 0.2}}
                        >
                            <a
                                href="/projects"
                                className="w-full sm:w-auto text-center inline-block bg-blue-600 text-white px-8 py-4 sm:py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                            >
                                Scopri tutti i progetti →
                            </a>
                        </motion.div>
                    </div>
                    <motion.div
                        className="relative h-[400px] w-full max-w-sm mx-auto flex justify-center lg:max-w-none mt-16 md:mt-20 lg:mt-0"
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
                                <Card
                                    key={project.title}
                                    onClick={() => router.push(`/projects?open=${encodeURIComponent(project.title)}`)}
                                >
                                    <div
                                        className="group bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-[24px] sm:rounded-[32px] h-full flex flex-col overflow-hidden transition-all duration-500 hover:border-blue-500/30 dark:hover:border-blue-400/30 hover:shadow-2xl hover:-translate-y-2 cursor-pointer relative p-6 sm:p-8">
                                        
                                        {/* Glowing Border effect on hover */}
                                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/10 dark:group-hover:border-blue-400/10 rounded-[24px] sm:rounded-[32px] transition-colors duration-500 pointer-events-none z-20"></div>

                                        {/* Top Row: Small Icon and Category */}
                                        <div className="flex items-start justify-between mb-6 relative z-10 w-full gap-4 shrink-0">
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
                                        <div className="flex flex-col flex-grow justify-start relative z-10 w-full overflow-hidden">
                                            <h3 className="font-extrabold tracking-tight mb-3 transition-colors duration-500 text-xl sm:text-2xl">
                                                <span className="bg-clip-text text-transparent bg-gradient-to-br from-neutral-900 to-neutral-500 dark:from-white dark:to-neutral-500 group-hover:from-blue-600 group-hover:to-purple-600 dark:group-hover:from-blue-400 dark:group-hover:to-purple-400">
                                                    {project.title}
                                                </span>
                                            </h3>
                                            
                                            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium mb-4 text-xs sm:text-sm line-clamp-3">
                                                 {project.detailedContent ? extractTextFromReactNode(project.detailedContent()) : project.description || "Scopri di più sul progetto cliccando sulla card."}
                                            </p>

                                            {/* Bottom Row: Tags & Arrow */}
                                            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-neutral-100 dark:border-neutral-800/50 items-center justify-between shrink-0">
                                                <div className="flex flex-wrap gap-2">
                                                    {project.tags.slice(0, 2).map(tag => (
                                                        <span key={tag}
                                                              className="bg-white dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full shadow-sm transition-all group-hover:border-blue-200 dark:group-hover:border-blue-900 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                    {project.tags.length > 2 && (
                                                        <span className="bg-white dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 text-neutral-400 dark:text-neutral-500 text-[10px] font-bold px-2 py-1.5 rounded-full shadow-sm">
                                                            +{project.tags.length - 2}
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="text-blue-500 dark:text-blue-400 transition-transform duration-300 group-hover:translate-x-1 shrink-0 ml-2">
                                                    <FiArrowRight size={20}/>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Background Watermark Icon (Very subtle) */}
                                        <div className="absolute -bottom-4 -right-4 text-[120px] sm:text-[180px] text-neutral-50 dark:text-neutral-800 opacity-60 dark:opacity-40 group-hover:scale-110 -rotate-12 group-hover:-rotate-0 group-hover:text-blue-50 dark:group-hover:text-blue-900/20 transition-all duration-700 pointer-events-none z-0">
                                            {project.icon}
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </CardSwap>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}