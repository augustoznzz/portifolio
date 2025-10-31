import type { Metadata } from 'next'
import React from 'react'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'Portfólio | Desenvolvedor Backend',
  description: 'Portfólio pessoal de desenvolvedor backend.',
  keywords: 'desenvolvedor, backend, portfólio, programador, web developer',
  authors: [{ name: 'Seu Nome' }],
  openGraph: {
    title: 'Portfólio | Desenvolvedor Backend',
    description: 'Portfólio pessoal de desenvolvedor backend',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="dark">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="dark">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

