// app/not-found.js
import Link from 'next/link'
export default function NotFound() {
    return (
        <div className="text-center py-24">
            <h1 className="text-4xl font-bold">Pagina non Trovata</h1>
            <p className="mt-4">Oops! Sembra che questa pagina non esista.</p>
            <Link href="/" className="mt-8 inline-block bg-blue-600 text-white px-6 py-2 rounded">
                Torna alla Home
            </Link>
        </div>
    )
}