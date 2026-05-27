'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { projects, internshipProjects } from '@/lib/data'
import SectionHeader from './SectionHeader'

const typeColors = {
  'Backend / Java':         'bg-orange-500/15 text-orange-300 border-orange-500/30',
  'Full Stack / AI':        'bg-blue-500/15 text-blue-300 border-blue-500/30',
  'Blockchain / DApp':      'bg-purple-500/15 text-purple-300 border-purple-500/30',
  'Full Stack':             'bg-brand-600/20 text-brand-300 border-brand-600/40',
}

/* ════════════════════════════════════════
   FULL-SCREEN PROJECT DETAIL VIEW
════════════════════════════════════════ */
function ProjectDetail({ project, onClose }) {
  // Lock body scroll when open
  if (typeof window !== 'undefined') {
    document.body.style.overflow = 'hidden'
  }

  const handleClose = () => {
    if (typeof window !== 'undefined') {
      document.body.style.overflow = ''
    }
    onClose()
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-[#080810]"
      >
        {/* Slide-in panel */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 35 }}
          className="absolute inset-0 overflow-y-auto"
        >
          {/* Top bar */}
          <div className="sticky top-0 z-10 flex items-center justify-between px-4 sm:px-6 md:px-12 py-3 bg-[#080810]/95 backdrop-blur-xl border-b border-white/[0.06]">
            <button onClick={handleClose}
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="hidden sm:inline">Back to Portfolio</span>
              <span className="sm:hidden">Back</span>
            </button>
            <button onClick={handleClose}
              className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-sm font-semibold transition-all">
              Home
            </button>
          </div>

          {/* Hero image */}
          <div className="relative w-full h-52 sm:h-64 md:h-[380px] overflow-hidden bg-slate-900">
            {project.image && (
              <Image src={project.image} alt={project.title} fill
                className="object-cover object-center" sizes="100vw" priority />
            )}
            <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-[#080810] via-[#080810]/60 to-transparent" />
            <div className="absolute bottom-5 left-4 sm:left-8 md:left-16 right-4 sm:right-8 md:right-16">
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-brand-600/80 backdrop-blur-sm text-white text-xs font-bold">{project.type}</span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs font-bold">{project.year}</span>
                <span className="px-2.5 py-0.5 rounded-full bg-green-600/80 backdrop-blur-sm text-white text-xs font-bold">{project.status}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-1 leading-tight">{project.title}</h1>
              <p className="text-slate-300 text-sm md:text-base">{project.subtitle}</p>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {project.techBadges.map(t => (
                  <span key={t} className="px-2 py-0.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* All sections */}
          <div className="w-full px-4 sm:px-6 md:px-12 py-10 space-y-10">

            {/* Key Features */}
            <div>
              <DetailLabel icon="🎯" label="Key Features" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
                {project.keyFeatures.map(({ icon, title, desc }) => (
                  <div key={title} className="glass rounded-2xl p-5 hover:border-brand-600/40 transition-all hover:-translate-y-0.5">
                    <div className="text-2xl mb-3">{icon}</div>
                    <p className="text-white font-semibold text-sm mb-1.5">{title}</p>
                    <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Details */}
            <div>
              <DetailLabel icon="💻" label="Technical Details" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                {project.technicalDetails.map(({ title, desc, tags }) => (
                  <div key={title} className="glass rounded-2xl p-6">
                    <p className="text-brand-400 font-bold text-sm mb-2">{title}</p>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {tags.map(t => (
                        <span key={t} className="px-2.5 py-1 rounded-full bg-brand-600/10 border border-brand-600/30 text-brand-300 text-xs">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* System Architecture */}
            <div>
              <DetailLabel icon="🏗️" label="System Architecture" />
              <div className="mt-6 glass rounded-2xl p-7">
                <p className="text-slate-300 text-base leading-relaxed">{project.architecture}</p>
              </div>
            </div>

            {/* Key Learnings */}
            <div>
              <DetailLabel icon="💡" label="Key Learnings" />
              <div className="mt-6 glass rounded-2xl p-7">
                <ul className="space-y-3">
                  {project.keyLearnings.map((l, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 text-sm md:text-base">
                      <span className="mt-2 w-2 h-2 rounded-full bg-brand-500 flex-shrink-0" />
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* My Responsibilities */}
            {project.myResponsibilities && (
              <div>
                <DetailLabel icon="🙋" label="My Responsibilities" />
                <div className="mt-6 glass rounded-2xl p-7">
                  <p className="text-slate-300 text-base leading-relaxed">{project.myResponsibilities}</p>
                </div>
              </div>
            )}

            {/* Project Information */}
            <div>
              <DetailLabel icon="📅" label="Project Information" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5">
                {[
                  { label: 'Duration', value: project.duration,  color: 'text-brand-400' },
                  { label: 'Role',     value: project.role,      color: 'text-brand-400' },
                  { label: 'Team Size',value: project.teamSize,  color: 'text-white' },
                  { label: 'Status',   value: project.status,    color: 'text-green-400' },
                ].map(({ label, value, color }) => (
                  <div key={label} className="glass rounded-2xl p-6 text-center">
                    <p className="text-slate-500 text-xs mb-2">{label}</p>
                    <p className={`font-bold text-sm leading-snug ${color}`}>{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Links */}
            {(project.github || project.demo) && (
              <div className="flex gap-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-slate-300 hover:text-white text-sm font-semibold transition-all">
                    <Github size={16} /> GitHub
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-sm font-semibold transition-all">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function DetailLabel({ icon, label }) {
  return (
    <div className="flex items-center gap-3 border-b border-white/[0.06] pb-4">
      <span className="text-2xl">{icon}</span>
      <h2 className="text-xl md:text-2xl font-bold text-white">{label}</h2>
    </div>
  )
}

/* ════════════════════════════════════════
   INTERNSHIP SUMMARY CARD
════════════════════════════════════════ */
function InternshipCard({ project, index, onViewDetails }) {
  const summaryTech = project.techBadges.slice(0, 5)

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className="group glass rounded-2xl overflow-hidden flex flex-col hover:border-brand-600/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-900/30"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-slate-900">
        {project.image && (
          <Image src={project.image} alt={project.title} fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw" />
        )}
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0d0d1a] to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Title + type badge */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-xl font-extrabold text-white group-hover:text-brand-300 transition-colors">{project.title}</h3>
          <span className={`flex-shrink-0 px-2.5 py-1 rounded-full text-xs font-semibold border ${typeColors[project.type] ?? 'bg-brand-600/15 text-brand-300 border-brand-600/30'}`}>
            {project.type}
          </span>
        </div>

        {/* Short description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{project.subtitle}</p>

        {/* Tech tags (first 5 only) */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {summaryTech.map(t => (
            <span key={t} className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/[0.08] text-slate-300 text-xs font-medium">{t}</span>
          ))}
          {project.techBadges.length > 5 && (
            <span className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/[0.08] text-slate-500 text-xs">+{project.techBadges.length - 5} more</span>
          )}
        </div>

        {/* View Details button */}
        <button
          onClick={() => onViewDetails(project)}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-600 to-violet-600 hover:from-brand-500 hover:to-violet-500 text-white font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-brand-600/40 hover:-translate-y-0.5"
        >
          View Details
        </button>
      </div>
    </motion.article>
  )
}

/* ════════════════════════════════════════
   PERSONAL PROJECT CARD
════════════════════════════════════════ */
function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative glass rounded-2xl overflow-hidden flex flex-col hover:border-brand-600/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-900/30"
    >
      <div className="h-1 w-full bg-gradient-to-r from-brand-600 via-violet-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
        {project.image ? (
          <Image src={project.image} alt={project.title} fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-5xl">🖥️</div>
        )}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0d0d1a] to-transparent" />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <span className={`self-start px-2.5 py-1 rounded-full text-xs font-semibold border mb-3 ${typeColors[project.type] ?? 'bg-brand-600/15 text-brand-300 border-brand-600/30'}`}>
          {project.type}
        </span>
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-300 transition-colors">{project.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map(t => (
            <span key={t} className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/[0.08] text-slate-300 text-xs font-medium hover:border-brand-600/50 hover:text-brand-300 transition-colors cursor-default">{t}</span>
          ))}
        </div>
        <div className="flex gap-3 mt-auto">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass text-slate-300 hover:text-white hover:border-white/20 text-sm font-medium transition-all">
              <Github size={15} /> GitHub
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-600/20 border border-brand-600/40 text-brand-300 hover:bg-brand-600/30 text-sm font-medium transition-all">
              <ExternalLink size={15} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

/* ════════════════════════════════════════
   MAIN SECTION
════════════════════════════════════════ */
export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <section id="projects" className="section-padding">
      <SectionHeader
        label="What I've Built"
        title="Projects"
        subtitle="A selection of projects spanning Java, AI, Blockchain, and full-stack e-commerce."
      />

      {/* Internship Projects */}
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="text-2xl">💼</span>
          <h3 className="text-xl font-bold text-white">Internship Projects</h3>
          <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent ml-2" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {internshipProjects.map((p, i) => (
            <InternshipCard key={p.title} project={p} index={i} onViewDetails={setActiveProject} />
          ))}
        </div>
      </div>

      {/* Personal & Academic Projects */}
      <div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="text-2xl">🚀</span>
          <h3 className="text-xl font-bold text-white">Personal &amp; Academic Projects</h3>
          <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent ml-2" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>

      {/* Full-screen detail view */}
      {activeProject && (
        <ProjectDetail project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  )
}
