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
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-navy-800 via-navy-800 to-navy-900"
    >
      {/* 3D Grid Container with subtle perspective */}
      <div 
        className="absolute inset-0"
        style={{
          perspective: '2000px',
          perspectiveOrigin: '50% 50%',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Back layer - Subtle depth */}
        <div 
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(94, 179, 246, 0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(94, 179, 246, 0.12) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: 'translateZ(-120px) rotateX(8deg) rotateY(-2deg)',
            transformOrigin: 'center center',
            animation: 'grid3DMove 40s linear infinite reverse',
            maskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, black 70%, transparent 110%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, black 70%, transparent 110%)',
          }}
        />
        
        {/* Middle layer - Depth */}
        <div 
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(94, 179, 246, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(94, 179, 246, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: 'translateZ(-60px) rotateX(6deg) rotateY(-1deg)',
            transformOrigin: 'center center',
            animation: 'grid3DMove 35s linear infinite',
            maskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, black 70%, transparent 110%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, black 70%, transparent 110%)',
          }}
        />
        
        {/* Front layer - Main grid */}
        <div 
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(94, 179, 246, 0.18) 1px, transparent 1px),
              linear-gradient(90deg, rgba(94, 179, 246, 0.18) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: 'translateZ(0px) rotateX(4deg) rotateY(-0.5deg)',
            transformOrigin: 'center center',
            maskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, black 70%, transparent 110%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, black 70%, transparent 110%)',
          }}
        />
        
        {/* Subtle lighting effect */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              radial-gradient(ellipse at 50% 0%, rgba(94, 179, 246, 0.2) 0%, transparent 50%),
              linear-gradient(to bottom, rgba(94, 179, 246, 0.08) 0%, transparent 30%)
            `,
            backgroundSize: '100% 100%, 100% 100%',
            transform: 'translateZ(-30px) rotateX(5deg)',
            transformOrigin: 'center center',
            animation: 'grid3DLight 20s ease-in-out infinite',
            maskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, black 70%, transparent 110%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, black 70%, transparent 110%)',
          }}
        />
      </div>

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
            className="text-5xl md:text-7xl font-bold mb-4 text-white"
          >
            Augusto Pires Zuanazzi
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

