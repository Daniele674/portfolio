import Image from 'next/image';
import Link from 'next/link';

// Esportiamo il componente come "default" per poterlo importare senza graffe
export default function HeroSection() {
    return (
        <section className="text-center my-16 md:my-24">
            <div className="mx-auto mb-6 w-40 h-40 relative rounded-full overflow-hidden shadow-lg border-4 border-white">
                <Image
                    src="/me.jpg"
                    alt="Foto di Daniele"
                    fill
                    sizes="160px" // La dimensione è fissa, quindi possiamo essere specifici
                    className="object-cover"
                    priority // Indica a Next.js di caricare questa immagine per prima (ottimo per la performance)
                />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Ciao, sono Daniele 👋</h1>
            <p className="text-lg max-w-2xl mx-auto text-gray-700 mb-8">
                Sviluppatore web full‑stack, appassionato di React, Next.js,
                blockchain e UI/UX design.
            </p>
            <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
                Contattami →
            </Link>
        </section>
    );
}