import Hero from '@/components/Hero'
import About from '@/components/About'
import Formacao from '@/components/Formacao'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

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

