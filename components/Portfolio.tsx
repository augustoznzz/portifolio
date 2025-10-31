'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { SiPython, SiReact, SiNodedotjs, SiTypescript } from 'react-icons/si'

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  image: string
  technologies: { name: string; icon: any; color: string }[]
  githubUrl: string
  liveUrl?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'API RESTful E-commerce',
    description: 'Sistema completo de e-commerce com autenticação e pagamentos',
    longDescription: 'API RESTful desenvolvida em Python com FastAPI, incluindo sistema de autenticação JWT, gerenciamento de produtos, carrinho de compras e integração com gateway de pagamento.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    technologies: [
      { name: 'Python', icon: SiPython, color: 'text-blue-500' },
      { name: 'FastAPI', icon: SiPython, color: 'text-green-500' },
    ],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 2,
    title: 'Dashboard Analytics',
    description: 'Dashboard interativo com visualizações em tempo real',
    longDescription: 'Dashboard desenvolvido com React e TypeScript, conectado a uma API Node.js para processamento de dados em tempo real e visualizações interativas.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    technologies: [
      { name: 'React', icon: SiReact, color: 'text-cyan-500' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
      { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
    ],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 3,
    title: 'Sistema de Microserviços',
    description: 'Arquitetura de microserviços escalável com Docker',
    longDescription: 'Sistema distribuído com múltiplos microserviços comunicando via message queue, containerizado com Docker e orquestrado para alta disponibilidade.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    technologies: [
      { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
      { name: 'Docker', icon: SiPython, color: 'text-blue-400' },
    ],
    githubUrl: 'https://github.com',
  },
  {
    id: 4,
    title: 'API de Autenticação',
    description: 'Sistema seguro de autenticação com refresh tokens',
    longDescription: 'API de autenticação robusta implementando OAuth2, refresh tokens, rate limiting e auditoria de segurança para aplicações críticas.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
    technologies: [
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
      { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
    ],
    githubUrl: 'https://github.com',
  },
]

export function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <>
      <section
        id="projetos"
        ref={ref}
        className="py-20 md:py-32 bg-navy-900 transition-colors"
      >
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center text-white"
          >
            Projetos
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group relative overflow-hidden rounded-2xl bg-navy-800 shadow-soft hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-white/90 text-sm">{project.description}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:hidden">
                      {project.title}
                    </h3>
                    <p className="text-white text-sm mb-4 opacity-90 group-hover:hidden">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => {
                        const Icon = tech.icon
                        return (
                          <span
                            key={tech.name}
                            className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-navy-700 text-xs font-medium text-white"
                          >
                            <Icon className={`w-3 h-3 ${tech.color}`} />
                            {tech.name}
                          </span>
                        )
                      })}
                    </div>
                  </div>
                </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-navy-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            <div className="relative h-64">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-navy-700 shadow-lg flex items-center justify-center text-white hover:scale-110 transition-transform"
              >
                ×
              </button>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold mb-4 text-white">
                {selectedProject.title}
              </h3>
              <p className="text-white mb-6 leading-relaxed opacity-90">
                {selectedProject.longDescription}
              </p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-white">
                  Tecnologias
                </h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech) => {
                    const Icon = tech.icon
                    return (
                      <span
                        key={tech.name}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-navy-700 text-sm font-medium text-white"
                      >
                        <Icon className={`w-4 h-4 ${tech.color}`} />
                        {tech.name}
                      </span>
                    )
                  })}
                </div>
              </div>
              <div className="flex gap-4">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-navy-800 rounded-xl font-semibold hover:bg-opacity-90 transition-colors"
                >
                  <FiGithub className="w-5 h-5" />
                  GitHub
                </a>
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent-light text-white rounded-xl font-semibold hover:bg-accent-dark transition-colors"
                  >
                    <FiExternalLink className="w-5 h-5" />
                    Ver Projeto
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}

