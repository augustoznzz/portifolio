import type { Metadata } from 'next'
import React from 'react'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'Portfólio | Desenvolvedor Backend',
  description: 'Portfólio pessoal de desenvolvedor backend. Criar. Evoluir. Inovar.',
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
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" href="" type="image/svg+xml" />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

