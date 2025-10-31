'use client'

import { FiArrowUp } from 'react-icons/fi'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-navy-950 text-white transition-colors">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {currentYear} João Silva. Todos os direitos reservados.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-navy-800 hover:bg-navy-700 transition-colors text-sm font-medium text-white"
            aria-label="Voltar ao topo"
          >
            <FiArrowUp className="w-4 h-4" />
            Voltar ao topo
          </button>
        </div>
      </div>
    </footer>
  )
}

