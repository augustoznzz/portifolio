'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-navy-800">
      <div className="text-center px-6">
        <h2 className="text-2xl font-bold text-white mb-4">Algo deu errado!</h2>
        <button
          onClick={reset}
          className="px-6 py-3 bg-white text-navy-800 rounded-xl font-semibold hover:bg-opacity-90 transition-colors"
        >
          Tentar novamente
        </button>
      </div>
    </div>
  )
}


