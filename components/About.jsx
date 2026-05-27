'use client'

import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Linkedin, Github, Briefcase, Wifi } from 'lucide-react'
import { personal } from '@/lib/data'
import SectionHeader from './SectionHeader'

const stats = [
  { value: '8.40', label: 'CGPA' },
  { value: '3',    label: 'Projects' },
  { value: '4',    label: 'Certifications' },
  { value: '2026', label: 'Graduating' },
]

export default function About() {
  return (
    <section id="about" className="section-padding">
      <SectionHeader
        label="Who I Am"
        title="About Me"
        subtitle="A passionate developer building at the intersection of software, AI, and blockchain."
      />

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Left — bio + contact */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="space-y-5"
        >
          <div className="glass rounded-2xl p-6">
            <p className="text-slate-300 leading-relaxed text-base">{personal.bio}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { icon: <Mail size={13} />,    text: personal.email,   href: `mailto:${personal.email}` },
              { icon: <Phone size={13} />,   text: personal.phone,   href: `tel:${personal.phone}` },
              { icon: <MapPin size={13} />,  text: personal.college, href: null },
              { icon: <Linkedin size={13} />,text: 'LinkedIn',       href: personal.linkedin },
              { icon: <Github size={13} />,  text: 'GitHub',         href: personal.github },
            ].map(({ icon, text, href }) =>
              href ? (
                <a key={text} href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass text-slate-300 hover:text-brand-300 hover:border-brand-600/40 text-xs font-medium transition-all">
                  <span className="text-brand-400">{icon}</span>{text}
                </a>
              ) : (
                <span key={text} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass text-slate-400 text-xs font-medium">
                  <span className="text-brand-400">{icon}</span>{text}
                </span>
              )
            )}
          </div>
        </motion.div>

        {/* Right — stats */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map(({ value, label }, i) => (
            <motion.div key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass rounded-2xl p-5 text-center hover:border-brand-600/40 transition-all duration-300 hover:-translate-y-1"
            >
              <p className="text-3xl font-extrabold gradient-text mb-1">{value}</p>
              <p className="text-slate-400 text-sm">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Experience */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mt-10"
      >
        <div className="flex items-center gap-3 mb-5">
          <span className="text-xl">💼</span>
          <h3 className="text-lg font-bold text-white">Experience</h3>
          <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
        </div>

        <div className="relative pl-6 border-l border-brand-700/50">
          <div className="absolute -left-[9px] top-5 w-4 h-4 rounded-full bg-brand-600 border-2 border-[#080810] shadow-lg shadow-brand-600/40" />
          <div className="glass rounded-2xl p-6 hover:border-brand-600/40 transition-all duration-300">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <span className="px-2.5 py-0.5 rounded-full bg-brand-600/20 border border-brand-600/40 text-brand-300 text-xs font-semibold">Internship</span>
                <h4 className="text-white font-bold text-base mt-2">Full Stack Development Intern</h4>
                <div className="mt-1">
                  <span className="text-brand-400 font-semibold text-sm">Madhwa Infotech</span>
                  <span className="text-slate-500 text-xs ml-2">under SS Inphinite LLP</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2 flex-shrink-0">
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-400 text-xs">
                  <Briefcase size={11} className="text-brand-400" />
                  Feb 2026 – Apr 2026 · 3 months
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
                  <Wifi size={11} /> Remote
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mt-4 pt-4 border-t border-white/[0.06]">
              Contributed to full stack development initiatives at Madhwa Infotech, a venture under SS Inphinite LLP,
              gaining hands-on exposure to real-world development workflows under the supervision of the technical team.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
