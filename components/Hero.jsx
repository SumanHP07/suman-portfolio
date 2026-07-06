'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDown, FileDown } from 'lucide-react'
import Image from 'next/image'
import { personal } from '@/lib/data'

const roles = ['CSE Student', 'Java Developer', 'Blockchain Enthusiast', 'Problem Solver']

function TypeWriter() {
  const [idx, setIdx]   = useState(0)
  const [chars, setChars] = useState(0)
  const [del, setDel]   = useState(false)

  useEffect(() => {
    const word = roles[idx]
    let t
    if (!del && chars < word.length)       t = setTimeout(() => setChars(c => c + 1), 75)
    else if (!del && chars === word.length) t = setTimeout(() => setDel(true), 2000)
    else if (del && chars > 0)             t = setTimeout(() => setChars(c => c - 1), 40)
    else { setDel(false); setIdx(i => (i + 1) % roles.length) }
    return () => clearTimeout(t)
  }, [chars, del, idx])

  return (
    <span className="gradient-text font-bold">
      {roles[idx].slice(0, chars)}
      <span className="animate-pulse text-brand-400">|</span>
    </span>
  )
}

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'linear-gradient(rgba(139,92,246,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.6) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-[500px] md:h-[500px] bg-brand-700/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 md:w-[400px] md:h-[400px] bg-blue-700/15 rounded-full blur-[60px] md:blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="w-full px-5 sm:px-8 md:px-10 lg:px-16 pt-24 pb-16">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16">

          {/* ── Left: Text ── */}
          <div className="flex-1 text-center md:text-left w-full">
            <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-brand-300 font-medium mb-5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </motion.div>

            <motion.h1 variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-3 tracking-tight leading-tight">
              Hi, I'm <span className="gradient-text">{personal.name}</span>
            </motion.h1>

            <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-slate-400 mb-5 h-8">
              <TypeWriter />
            </motion.div>

            <motion.p variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.5, delay: 0.3 }}
              className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed mb-8 mx-auto md:mx-0 max-w-lg">
              {personal.bio}
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-4">
              <a href={personal.github} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 transition-all">
                <Github size={16} /> GitHub
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm transition-all hover:shadow-lg hover:shadow-brand-600/40">
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-brand-600/50 text-brand-300 hover:bg-brand-600/10 font-semibold text-sm transition-all">
                <Mail size={16} /> Email Me
              </a>
            </motion.div>

            {/* Resume */}
            <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.5, delay: 0.5 }}
              className="flex justify-center md:justify-start">
              <a href="/resume.pdf" download="Suman_HP_Resume.pdf"
                onClick={() => {
                  try {
                    const visitorId = localStorage.getItem('_vid')
                    fetch('/api/track-resume', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ visitorId, referrer: document.referrer }),
                    }).catch(() => {})
                  } catch {}
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-violet-600 hover:from-brand-500 hover:to-violet-500 text-white font-semibold text-sm transition-all hover:shadow-lg hover:shadow-brand-600/40 group">
                <FileDown size={16} className="group-hover:animate-bounce" />
                Download Resume
                <span className="px-1.5 py-0.5 rounded bg-white/20 text-xs font-bold">PDF</span>
              </a>
            </motion.div>
          </div>

          {/* ── Right: Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-brand-500 via-violet-500 to-blue-500 blur-md opacity-60 animate-pulse-slow" />
              {/* Responsive size: smaller on mobile */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full p-[3px] bg-gradient-to-br from-brand-500 via-violet-500 to-blue-500">
                <div className="w-full h-full rounded-full p-[3px] bg-[#080810]">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <Image src="/profile.jpg" alt="Suman H P" width={320} height={320}
                      className="w-full h-full object-cover object-top" priority />
                  </div>
                </div>
              </div>

              {/* College badge — hidden on very small screens */}
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
                className="hidden sm:block absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1.5 rounded-full glass border border-brand-600/40 text-brand-300 text-xs font-semibold shadow-xl">
                🎓 BMSITM, Bengaluru
              </motion.div>

              {/* CGPA badge */}
              <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }}
                className="absolute top-3 -right-4 sm:-right-6 px-2.5 py-1 rounded-xl glass border border-green-500/40 text-green-300 text-xs font-semibold shadow-xl">
                ⭐ CGPA 8.40
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="flex justify-center mt-14">
          <a href="#about" className="inline-flex flex-col items-center gap-2 text-slate-600 hover:text-slate-400 transition-colors">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
