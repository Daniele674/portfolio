import './globals.css'
import Link from 'next/link'

export const metadata = {
    title: 'Portfolio Daniele',
    description: 'Sito personale creato con Next.js e Tailwind CSS',
}

export default function RootLayout({ children }) {
    return (
        <html lang="it">
        <body className="bg-gray-100 text-gray-900 font-sans p-6">
        <nav className="mb-8 flex gap-6 text-blue-600 font-semibold text-lg">
            <Link href="/">Home</Link>
            <Link href="/about">Chi sono</Link>
            <Link href="/projects">Progetti</Link>
            <Link href="/contact">Contatti</Link>
        </nav>
        <main className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md">
            {children}
        </main>
        </body>
        </html>
    )
}
