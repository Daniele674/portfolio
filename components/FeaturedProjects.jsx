import Link from 'next/link';
// Importiamo i dati dei progetti
import { featuredProjects } from '@/data/portfolio';

export default function FeaturedProjects() {
    return (
        <section id="projects" className="mb-16">
            <h2 className="text-center text-3xl font-bold mb-8">Progetti in Evidenza</h2>
            <ul className="space-y-8 md:space-y-12">
                {featuredProjects.map((project) => (
                    <li key={project.title} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <h3 className="text-2xl font-semibold mb-2 text-gray-900">{project.title}</h3>
                        <p className="text-gray-700 mb-4">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map(tag => (
                                <span key={tag} className="bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <Link href={project.link} className="font-semibold text-blue-600 hover:underline">
                            Vedi dettagli del progetto →
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="mt-12 text-center">
                <Link href="/projects" className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-black transition-colors">
                    Guarda tutti i progetti
                </Link>
            </div>
        </section>
    );
}