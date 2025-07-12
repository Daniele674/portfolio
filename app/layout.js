// app/layout.js

import './globals.css'
import {Inter} from 'next/font/google'
import {Providers} from './providers'
import Header from '@/components/Header'
import Footer from "@/components/Footer";

Inter({subsets: ['latin']});
export const metadata = {
    title: 'Portfolio | Daniele Gregori',
    description: 'Sviluppatore web full-stack specializzato in React e Next.js.',
}

export default function RootLayout({children}) {
    return (
        <html
            lang="it"
            suppressHydrationWarning
        >
        <body>
        <Providers>
            <div className="flex flex-col min-h-screen">
                <Header/>
                {children}
                <Footer/>
            </div>
        </Providers>
        </body>
        </html>
    )
}