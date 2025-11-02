import { Hero } from '@/components/Hero'
import dynamic from 'next/dynamic'

// Lazy load components below the fold for better initial load performance
const About = dynamic(() => import('@/components/About').then(mod => ({ default: mod.About })), {
  loading: () => <div className="py-20 md:py-32 bg-navy-800" />,
})

const Formacao = dynamic(() => import('@/components/Formacao').then(mod => ({ default: mod.Formacao })), {
  loading: () => <div className="py-20 md:py-32 bg-navy-800" />,
  ssr: false,
})

const Portfolio = dynamic(() => import('@/components/Portfolio').then(mod => ({ default: mod.Portfolio })), {
  loading: () => <div className="py-20 md:py-32 bg-navy-900" />,
})

const Contact = dynamic(() => import('@/components/Contact').then(mod => ({ default: mod.Contact })), {
  loading: () => <div className="py-20 md:py-32 bg-navy-800" />,
})

const Footer = dynamic(() => import('@/components/Footer').then(mod => ({ default: mod.Footer })), {
  ssr: false,
})

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Formacao />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}

