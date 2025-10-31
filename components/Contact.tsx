'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiSend, FiGithub, FiLinkedin } from 'react-icons/fi'

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Dynamic import of EmailJS only when form is submitted
      const emailjs = (await import('@emailjs/browser')).default
      
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Configuração do EmailJS não encontrada')
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'augustozuanazzi03@gmail.com',
        },
        publicKey
      )

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error)
      setSubmitStatus('error')
      
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
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
                className="w-full px-4 py-3 rounded-xl border border-navy-700 bg-navy-700 text-white placeholder-white placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-accent-light transition-all resize-none"
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

            {/* Mensagens de Status */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-green-500/20 border border-green-500 rounded-xl text-green-400 text-center"
              >
                Mensagem enviada com sucesso! Entrarei em contato em breve.
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-red-500/20 border border-red-500 rounded-xl text-red-400 text-center"
              >
                Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato diretamente pelo email.
              </motion.div>
            )}
          </form>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-12 flex justify-center gap-6"
          >
            <a
              href="https://github.com/augustoznzz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-navy-700 flex items-center justify-center text-white hover:bg-white hover:text-navy-800 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <FiGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/augusto-zuanazzi-a033761a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-navy-700 flex items-center justify-center text-white hover:bg-white hover:text-navy-800 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

