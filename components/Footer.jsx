import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="text-center py-8 border-t mt-16">
            <p className="text-gray-500">© {new Date().getFullYear()} Daniele Gregori. Tutti i diritti riservati.</p>
            <div className="flex justify-center gap-6 mt-4">
                {/* Ricorda di sostituire i link con i tuoi profili reali! */}
                <Link
                    href="https://github.com/tuoutente"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                    aria-label="Visita il mio profilo GitHub"
                    target="_blank" // Apre il link in una nuova scheda
                    rel="noopener noreferrer"
                >
                    GitHub
                </Link>
                <Link
                    href="https://linkedin.com/in/tuonome"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                    aria-label="Visita il mio profilo LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </Link>
            </div>
        </footer>
    );
}