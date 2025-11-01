'use client'

import { motion } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export function Hero() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (heroRef.current) {
            const rect = heroRef.current.getBoundingClientRect()
            setScrollY(-rect.top * 0.3)
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projetos')
    projectsSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: '#020136' }}
    >
      {/* Parallax background elements */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          transform: `translateY(${scrollY}px)`,
        }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-light rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-navy-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-accent-light to-accent-dark p-1 shadow-soft overflow-hidden">
                <Image 
                  src="/img.jpg" 
                  alt="Foto de perfil" 
                  width={160}
                  height={160}
                  className="w-full h-full object-cover rounded-full"
                  priority
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-navy-800"></div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-3xl md:text-7xl font-bold mb-4 text-white flex flex-col md:flex-row md:justify-center gap-2 md:gap-3"
          >
            <span>Augusto</span>
            <span>Pires</span>
            <span>Zuanazzi</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl md:text-2xl text-white mb-8 font-medium opacity-90"
          >
            Desenvolvedor Backend
          </motion.p>

          {/* Motto */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex justify-center gap-4 mb-12 text-sm md:text-base text-white opacity-70"
          >
            <span className="opacity-70">Estudante de Engenharia de Software</span>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            onClick={scrollToProjects}
            className="group px-8 py-4 bg-white text-navy-800 rounded-2xl font-semibold shadow-soft hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-opacity-90"
          >
            Ver Projetos
            <FiChevronDown className="inline-block ml-2 group-hover:translate-y-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <FiChevronDown className="w-6 h-6 text-white opacity-70 animate-bounce" />
      </motion.div>
    </section>
  )
}

