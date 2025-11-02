'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiAward, FiCalendar } from 'react-icons/fi'

interface Education {
  id: number
  degree: string
  institution: string
  period: string
  description?: string
}

const educations: Education[] = [
  {
    id: 1,
    degree: 'Engenharia de Software',
    institution: 'Estácio',
    period: '2025.2 - 2029.2',
    description: 'Graduação em Engenharia de Software',
  },
  {
    id: 2,
    degree: 'Direito',
    institution: 'CESUSC',
    period: '2022.1 - 2027.2',
    description: 'Bacharel em Direito',
  },
]

export function Formacao() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="formacao"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
            Formação
          </h2>

          <div className="space-y-8">
            {educations.map((education, index) => (
              <motion.div
                key={education.id}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative pl-8 pb-8 border-l-2 border-navy-600 last:border-l-0 last:pb-0"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent-light border-2 border-navy-800"></div>
                <div className="bg-navy-700 rounded-2xl p-6 hover:shadow-soft transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-navy-600">
                      <FiAward className="w-6 h-6 text-accent-light" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                        {education.degree}
                      </h3>
                      <p className="text-white/90 font-medium mb-3">
                        {education.institution}
                      </p>
                      <div className="flex items-center gap-2 text-white/70 text-sm">
                        <FiCalendar className="w-4 h-4" />
                        <span>{education.period}</span>
                      </div>
                    </div>
                  </div>
                  {education.description && (
                    <p className="text-white/80 leading-relaxed mt-4">
                      {education.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

