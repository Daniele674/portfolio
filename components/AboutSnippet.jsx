import Link from 'next/link';

// Anche qui, export default e l'import per Link
export default function AboutSnippet() {
    return (
        <section className="bg-white p-8 rounded-lg shadow-lg mb-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Chi sono</h2>
            <p className="text-gray-700 mb-4 max-w-xl mx-auto">
                Laureato in Informatica e creatore di soluzioni web scalabili,
                da e‑commerce ortopedici a sistemi blockchain per ISP.
            </p>
            <Link href="/about" className="text-blue-600 hover:underline font-medium">
                Scopri di più su di me →
            </Link>
        </section>
    );
}