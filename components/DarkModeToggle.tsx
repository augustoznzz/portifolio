'use client'

import { useTheme } from './ThemeProvider'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useEffect, useState } from 'react'

export function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Evitar flash de conteúdo não correspondente durante a hidratação
  if (!mounted) {
    return (
      <button
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-navy-800 shadow-soft transition-all duration-300"
        aria-label="Toggle dark mode"
        disabled
      >
        <FiMoon className="w-5 h-5 text-white" />
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-navy-800 shadow-soft transition-all duration-300 hover:scale-110"
      aria-label="Toggle dark mode"
    >
      {theme === 'light' ? (
        <FiMoon className="w-5 h-5 text-white" />
      ) : (
        <FiSun className="w-5 h-5 text-yellow-400" />
      )}
    </button>
  )
}

