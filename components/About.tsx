'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  SiPython, 
  SiNodedotjs, 
  SiGo,
  SiGit
} from 'react-icons/si'

const skills = [
  { name: 'Python', icon: SiPython, color: 'text-blue-500' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
  { name: 'Golang', icon: SiGo, color: 'text-cyan-500' },
  { name: 'Git', icon: SiGit, color: 'text-orange-500' },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="sobre"
      ref={ref}
      className="py-20 md:py-32 bg-navy-800 transition-colors"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white">
            Sobre Mim
          </h2>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-white leading-relaxed mb-4 opacity-90">
              Sou um desenvolvedor backend apaixonado por criar soluções robustas e escaláveis. 
              Com experiência em arquitetura de sistemas e desenvolvimento de APIs, trabalho 
              para transformar ideias em código funcional e eficiente.
            </p>
            <p className="text-white leading-relaxed opacity-90">
              Minha jornada na programação começou com a curiosidade de entender como as coisas 
              funcionam por trás dos bastidores. Hoje, me dedico a construir aplicações que 
              não apenas funcionam, mas que fazem a diferença na vida das pessoas.
            </p>
          </div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center text-white">
              Habilidades
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                    className="flex flex-col items-center p-6 rounded-2xl bg-navy-700 hover:shadow-soft transition-all duration-300 hover:scale-105"
                  >
                    <Icon className={`w-10 h-10 ${skill.color} mb-2`} />
                    <span className="text-sm font-medium text-white">
                      {skill.name}
                    </span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

