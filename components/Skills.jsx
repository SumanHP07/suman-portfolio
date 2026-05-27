'use client'

import { motion } from 'framer-motion'
import { skills } from '@/lib/data'
import SectionHeader from './SectionHeader'

const categoryMeta = {
  Languages:          { icon: '💻', color: 'from-orange-500 to-red-500' },
  'Web Development':  { icon: '🌐', color: 'from-blue-500 to-cyan-500' },
  Database:           { icon: '🗄️', color: 'from-green-500 to-emerald-500' },
  'Tools & IDEs':     { icon: '🛠️', color: 'from-slate-400 to-slate-600' },
  'CS Fundamentals':  { icon: '📐', color: 'from-yellow-500 to-amber-500' },
  Blockchain:         { icon: '⛓️', color: 'from-purple-500 to-violet-600' },
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <SectionHeader label="Tech Stack" title="Skills" subtitle="Technologies and concepts I work with." />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {Object.entries(skills).map(([category, items], ci) => {
          const meta = categoryMeta[category] ?? { icon: '⚡', color: 'from-brand-500 to-blue-500' }
          return (
            <motion.div key={category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: ci * 0.07 }}
              className="glass rounded-2xl p-6 hover:border-brand-600/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${meta.color} flex items-center justify-center text-lg shadow-lg`}>
                  {meta.icon}
                </div>
                <h3 className="font-bold text-white text-sm">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, si) => (
                  <motion.span key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: ci * 0.07 + si * 0.04 }}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.08] text-slate-300 text-xs font-medium hover:border-brand-500/50 hover:text-brand-300 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
