'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiSend, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulação de envio - substitua por integração real (ex: Formspree, EmailJS)
    setTimeout(() => {
      alert('Mensagem enviada com sucesso! (Esta é uma demonstração)')
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      id="contato"
      ref={ref}
      className="py-20 md:py-32 bg-navy-800 transition-colors"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-white">
            Entre em Contato
          </h2>
          <p className="text-center text-white mb-12 opacity-90">
            Vamos conversar sobre seu próximo projeto!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-2 text-white"
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-navy-700 bg-navy-700 text-white placeholder-white placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-accent-light transition-all"
                placeholder="Seu nome"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2 text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-navy-700 bg-navy-700 text-white placeholder-white placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-accent-light transition-all"
                placeholder="seu@email.com"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-2 text-white"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-xl border border-navy-200 dark:border-navy-700 bg-white dark:bg-navy-700 text-navy-800 dark:text-navy-100 focus:outline-none focus:ring-2 focus:ring-accent-light transition-all resize-none"
                placeholder="Sua mensagem..."
              />
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-white text-navy-800 rounded-xl font-semibold shadow-soft hover:shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                'Enviando...'
              ) : (
                <>
                  <FiSend className="w-5 h-5" />
                  Enviar Mensagem
                </>
              )}
            </motion.button>
          </form>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-12 flex justify-center gap-6"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-navy-700 flex items-center justify-center text-white hover:bg-white hover:text-navy-800 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <FiGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-navy-700 flex items-center justify-center text-white hover:bg-white hover:text-navy-800 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-navy-700 flex items-center justify-center text-white hover:bg-white hover:text-navy-800 transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <FiInstagram className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

