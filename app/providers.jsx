import {ThemeProvider} from 'next-themes'

export function Providers({children}) {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} >
            {children}
        </ThemeProvider>
    )
}