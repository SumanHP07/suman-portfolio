'use client'

import { motion } from 'framer-motion'
import { education } from '@/lib/data'
import SectionHeader from './SectionHeader'

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <SectionHeader label="Academic" title="Education" />

      <div className="relative max-w-3xl">
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-brand-600 via-brand-700/50 to-transparent" />
        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div key={edu.degree}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-16"
            >
              <div className="absolute left-0 top-4 w-12 h-12 rounded-xl bg-brand-600/20 border border-brand-600/40 flex items-center justify-center text-xl">
                {edu.icon}
              </div>
              <div className="glass rounded-2xl p-5 hover:border-brand-600/40 transition-all duration-300 hover:-translate-y-0.5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-bold text-white text-base">{edu.degree}</h3>
                    <p className="text-brand-400 text-sm font-medium">{edu.institution}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="inline-block px-3 py-1 rounded-full bg-brand-600/15 text-brand-300 text-xs font-semibold border border-brand-600/30">
                      {edu.score}
                    </span>
                    <p className="text-slate-500 text-xs mt-1">{edu.period}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
