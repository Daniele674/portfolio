// Importiamo i dati dal nostro file centralizzato
import { skills } from '@/data/portfolio';

export default function SkillsSection() {
    return (
        <section id="skills" className="mb-16">
            <h2 className="text-center text-3xl font-bold mb-8">Le mie Competenze</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {skills.map((skill) => (
                    <li
                        key={skill.name}
                        className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center gap-2 border border-transparent hover:border-blue-500 transition-all duration-300"
                    >
                        <span className="text-4xl">{skill.icon}</span>
                        <span className="font-medium text-gray-800">{skill.name}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}