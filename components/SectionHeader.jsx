'use client'

import { motion } from 'framer-motion'

export default function SectionHeader({ label, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="text-center mb-10"
    >
      {label && (
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-brand-600/15 text-brand-400 border border-brand-600/30 mb-4">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
        {title}
      </h2>
      <div className="w-14 h-1 bg-gradient-to-r from-brand-500 to-blue-500 mx-auto rounded-full mb-4" />
      {subtitle && (
        <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">{subtitle}</p>
      )}
    </motion.div>
  )
}
