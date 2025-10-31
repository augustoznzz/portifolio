/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#e6e7f0',
          100: '#cdcfe1',
          200: '#9b9fc3',
          300: '#696fa5',
          400: '#373f87',
          500: '#1e2569',
          600: '#181d59',
          700: '#121549',
          800: '#010930',
          900: '#010828',
          950: '#010620',
        },
        beige: {
          50: '#faf9f7',
          100: '#f5f3f0',
          200: '#e8e6e1',
          300: '#d9d6d0',
          400: '#c4c0b8',
          500: '#a8a39a',
        },
        accent: {
          light: '#5eb3f6',
          DEFAULT: '#3b82f6',
          dark: '#2563eb',
        },
      },
      fontFamily: {
        mono: ['var(--font-suse-mono)', 'monospace'],
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '24px',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'soft-dark': '0 2px 15px -3px rgba(0, 0, 0, 0.3), 0 10px 20px -2px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}

