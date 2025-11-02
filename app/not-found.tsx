export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-navy-800">
      <div className="text-center px-6">
        <h2 className="text-4xl font-bold text-white mb-4">404</h2>
        <p className="text-white/90 text-lg mb-6">Página não encontrada</p>
        <a
          href="/"
          className="px-6 py-3 bg-white text-navy-800 rounded-xl font-semibold hover:bg-opacity-90 transition-colors inline-block"
        >
          Voltar para a página inicial
        </a>
      </div>
    </div>
  )
}


