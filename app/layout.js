// app/layout.js

import './globals.css'
import {Providers} from './providers'
import Header from '@/components/Header'
import Footer from "@/components/Footer";

export const metadata = {
    title: 'Daniele Gregori | Portfolio',
    description: 'Cybersecurity Specialist.',
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