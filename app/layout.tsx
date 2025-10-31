import type { Metadata } from 'next'
import React from 'react'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'Portfólio | Augusto Pires Zuanazzi',
  description: 'Desenvolvedor Backend e estudante de Engenharia de Software. Especializado em Python, Node.js e Golang.',
  keywords: 'desenvolvedor, backend, portfólio, programador, Python, Node.js, Golang, engenharia de software',
  authors: [{ name: 'Augusto Pires Zuanazzi' }],
  creator: 'Augusto Pires Zuanazzi',
  openGraph: {
    title: 'Portfólio | Augusto Pires Zuanazzi',
    description: 'Desenvolvedor Backend e estudante de Engenharia de Software',
    type: 'website',
    locale: 'pt_BR',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'),
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          as="style"
        />
      </head>
      <body className="dark">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

