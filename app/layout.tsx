import type { Metadata } from 'next'
import React from 'react'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'Portfólio | Augusto Pires Zuanazzi',
  description: 'Portfólio pessoal',
  keywords: 'desenvolvedor, backend, portfólio, programador',
  authors: [{ name: 'Seu Nome' }],
  openGraph: {
    title: 'Portfólio | Augusto Pires Zuanazzi',
    description: 'Portfólio pessoal',
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
        <link rel="icon" href="" type="image/svg+xml" />
      </head>
      <body className="dark">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

