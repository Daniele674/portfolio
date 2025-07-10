// components/ThemeSwitcher.jsx

'use client'

import {useState, useEffect} from 'react'
import {useTheme} from 'next-themes'
import {FiSun, FiMoon} from 'react-icons/fi'

export default function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const {theme, setTheme} = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const isDark = theme === 'dark'

    return (
        <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-14 h-8 flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300 relative"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
        >
                <span
                    className={`absolute left-1 top-1 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center transition-transform duration-300
                        ${isDark ? 'translate-x-6' : 'translate-x-0'}`}
                >
                    {isDark ? <FiMoon className="text-blue-500"/> : <FiSun className="text-yellow-400"/>}
                </span>
        </button>
    )
}