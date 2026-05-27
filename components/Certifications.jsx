'use client'

import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'
import { certifications } from '@/lib/data'
import SectionHeader from './SectionHeader'

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding">
      <SectionHeader
        label="Credentials"
        title="Certifications"
        subtitle="Industry-recognized certifications and challenges I've completed."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {certifications.map((cert, i) => (
          <motion.div key={cert.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            className="glass rounded-2xl p-6 hover:border-brand-600/40 transition-all duration-300 hover:-translate-y-1 group flex flex-col"
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              {cert.icon}
            </div>
            <h3 className="font-bold text-white text-sm leading-snug mb-2 flex-1">{cert.title}</h3>
            <p className="text-brand-400 text-xs font-semibold mb-1">{cert.issuer}</p>
            <p className="text-slate-500 text-xs mb-4">{cert.date}</p>
            <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4">
              <Award size={12} className="text-brand-400" />
              Verified Certificate
            </div>
            {cert.file ? (
              <a href={cert.file} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-brand-600/15 border border-brand-600/30 text-brand-300 hover:bg-brand-600/30 hover:border-brand-500/60 hover:text-white text-xs font-semibold transition-all duration-200 hover:-translate-y-0.5">
                <ExternalLink size={13} /> View Certificate
              </a>
            ) : (
              <div className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-dashed border-white/10 text-slate-600 text-xs font-semibold cursor-default">
                Coming Soon
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
