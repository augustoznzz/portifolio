'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  SiPython, 
  SiNodedotjs, 
  SiGo,
  SiGit,
  SiDjango,
  SiFlask,
  SiExpress,
  SiFastapi
} from 'react-icons/si'
import { FiChevronDown } from 'react-icons/fi'

const skills = [
  { 
    name: 'Python', 
    icon: SiPython, 
    color: 'text-blue-500',
    frameworks: [
      { name: 'Django', icon: SiDjango, color: 'text-green-600' },
      { name: 'FastAPI', icon: SiFastapi, color: 'text-teal-500' }
    ]
  },
  { 
    name: 'Node.js', 
    icon: SiNodedotjs, 
    color: 'text-green-500',
    frameworks: [
      { name: 'Express.js', icon: SiExpress, color: 'text-gray-400' },
      { name: 'Fastify', icon: SiNodedotjs, color: 'text-green-400' }
    ]
  },
  { 
    name: 'Golang', 
    icon: SiGo, 
    color: 'text-cyan-500',
    frameworks: [
      { name: 'Go Kit', icon: SiGo, color: 'text-blue-400' },
      { name: 'Kratos', icon: SiGo, color: 'text-purple-400' }
    ]
  },
  { 
    name: 'Git', 
    icon: SiGit, 
    color: 'text-orange-500',
    frameworks: [
      { name: 'GitHub', icon: SiGit, color: 'text-gray-300' },
    ]
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null)

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

          <div className="prose prose-lg max-w-none mb-32">
            <p className="text-white leading-relaxed mb-4 opacity-90">
              Atualmente sou um estudante de engenharia de software e apaixonado por criar soluções e 
              buscando desenvolver experiência para transformar ideias em código funcional e eficiente.
            </p>
            <p className="text-white leading-relaxed opacity-90">
              Minha jornada na programação começou com o interesse pelo trabalho do meu pai e a 
              curiosidade de entender como as coisas funcionam nesse universo.
              Hoje, me dedico a construir aplicações que não apenas funcionam, 
              mas que fazem a diferença na vida das pessoas.
            </p>
          </div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-12"
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-center text-white">
              Linguagens
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {skills.map((skill, index) => {
                const Icon = skill.icon
                const isSelected = selectedSkill === index
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                    className="relative flex flex-col items-center"
                  >
                    {/* Skill Card */}
                    <div className="flex flex-col items-center p-6 rounded-2xl bg-navy-700 hover:shadow-soft transition-all duration-300 hover:scale-105 w-full">
                      <Icon className={`w-10 h-10 ${skill.color} mb-2`} />
                      <span className="text-sm font-medium text-white">
                        {skill.name}
                      </span>
                    </div>
                    
                    {/* Arrow Button */}
                    <motion.button
                      onClick={() => setSelectedSkill(selectedSkill === index ? null : index)}
                      className={`mt-2 p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                        isSelected 
                          ? 'bg-white/20 shadow-lg' 
                          : 'bg-navy-600 hover:bg-navy-500'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        animate={{ 
                          rotate: isSelected ? 180 : 0,
                          color: isSelected ? '#ffffff' : '#94a3b8'
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <FiChevronDown className="w-4 h-4" />
                      </motion.div>
                    </motion.button>

                    {/* Connecting Line */}
                    {isSelected && (
                      <motion.div
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        exit={{ scaleY: 0 }}
                        className="w-0.5 h-6 bg-gradient-to-b from-white/40 to-transparent origin-top"
                      />
                    )}
                  </motion.div>
                )
              })}
            </div>

            {/* Frameworks Section */}
            {selectedSkill !== null && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mt-8"
              >
                <h4 className="text-xl font-semibold mb-4 text-center text-white">
                  Frameworks & Tools
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
                  {skills[selectedSkill].frameworks.map((framework, fIndex) => {
                    const FrameworkIcon = framework.icon
                    return (
                      <motion.div
                        key={framework.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: fIndex * 0.1, duration: 0.3 }}
                        className="flex items-center p-4 rounded-xl bg-navy-600 transition-colors duration-300"
                      >
                        <FrameworkIcon className={`w-6 h-6 ${framework.color} mr-3`} />
                        <span className="text-sm font-medium text-white">
                          {framework.name}
                        </span>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

