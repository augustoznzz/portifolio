'use client'

import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef, useState, useCallback, useMemo } from 'react'
import { FiExternalLink, FiGithub, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { SiTypescript, SiHtml5, SiReact } from 'react-icons/si'
import Image from 'next/image'

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  images: string[]
  technologies: { name: string; icon: any; color: string }[]
  githubUrl: string
  liveUrl?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'SaaS Janete',
    description: 'Sistema SaaS desenvolvido para a plataforma Janete',
    longDescription: 'Sistema SaaS completo desenvolvido com TypeScript, React e HTML, oferecendo uma solução moderna e eficiente.',
    images: ['/janete1.png', '/janete2.png', '/janete3.png'],
    technologies: [
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
      { name: 'React', icon: SiReact, color: 'text-cyan-500' },
      { name: 'HTML', icon: SiHtml5, color: 'text-orange-500' },
    ],
    githubUrl: 'https://github.com/augustoznzz',
  },
  {
    id: 2,
    title: 'Calculadora de Juros Compostos',
    description: 'Calculadora completa de juros compostos',
    longDescription: 'Aplicação web completa para cálculo de juros compostos, incluindo visualizações gráficas, tabelas de evolução, cálculo de inflação e análise de rentabilidade. Desenvolvida com TypeScript e React.',
    images: ['/calcc.png', '/calcc2.png', '/calcc3.png'],
    technologies: [
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
      { name: 'React', icon: SiReact, color: 'text-cyan-500' },
    ],
    githubUrl: 'https://github.com/augustoznzz',
  },
]

export function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = useCallback(() => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length)
    }
  }, [selectedProject])

  const prevImage = useCallback(() => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length)
    }
  }, [selectedProject])

  const handleProjectSelect = useCallback((project: Project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
  }, [])

  // Pré-carrega as imagens adjacentes para melhor performance
  const preloadImages = useMemo(() => {
    if (!selectedProject) return []
    const imagesToPreload: string[] = []
    const prevIndex = (currentImageIndex - 1 + selectedProject.images.length) % selectedProject.images.length
    const nextIndex = (currentImageIndex + 1) % selectedProject.images.length
    imagesToPreload.push(selectedProject.images[prevIndex])
    imagesToPreload.push(selectedProject.images[nextIndex])
    return imagesToPreload
  }, [selectedProject, currentImageIndex])

  const handlePrevClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    prevImage()
  }, [prevImage])

  const handleNextClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    nextImage()
  }, [nextImage])

  const handleIndicatorClick = useCallback((index: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImageIndex(index)
  }, [])

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
  }, [])

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
                  onClick={() => handleProjectSelect(project)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
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
                      {project.technologies.map((tech) => {
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
            className="bg-navy-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            <div className="relative">
              {/* Pré-carregamento de imagens adjacentes */}
              <div className="hidden">
                {preloadImages.map((img, idx) => (
                  <Image
                    key={`preload-${idx}`}
                    src={img}
                    alt=""
                    width={768}
                    height={384}
                    priority
                    loading="eager"
                  />
                ))}
              </div>

              {/* Carrossel de Imagens */}
              <div className="relative h-96 overflow-hidden rounded-t-2xl">
                <AnimatePresence>
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className="relative w-full h-full bg-navy-900 will-change-transform"
                  >
                    <Image
                      src={selectedProject.images[currentImageIndex]}
                      alt={`${selectedProject.title} - Imagem ${currentImageIndex + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 768px"
                      className="object-contain"
                      priority
                      loading="eager"
                    />
                  </motion.div>
                </AnimatePresence>
                
                {/* Botões de Navegação */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevClick}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-navy-700/80 hover:bg-navy-700 shadow-lg flex items-center justify-center text-white transition-all hover:scale-110 z-10"
                      aria-label="Imagem anterior"
                    >
                      <FiChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNextClick}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-navy-700/80 hover:bg-navy-700 shadow-lg flex items-center justify-center text-white transition-all hover:scale-110 z-10"
                      aria-label="Próxima imagem"
                    >
                      <FiChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Indicadores de Slide */}
                {selectedProject.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {selectedProject.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => handleIndicatorClick(index, e)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex
                            ? 'bg-white w-8'
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                        aria-label={`Ir para imagem ${index + 1}`}
                      />
                    ))}
                  </div>
                )}

                {/* Botão Fechar */}
                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-navy-700/80 hover:bg-navy-700 shadow-lg flex items-center justify-center text-white hover:scale-110 transition-transform z-10"
                  aria-label="Fechar modal"
                >
                  ×
                </button>
              </div>
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

