'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github, MapPin, Send, Copy, Check } from 'lucide-react'
import { personal } from '@/lib/data'
import SectionHeader from './SectionHeader'

const contactLinks = [
  {
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    hoverClass: 'hover:border-purple-500/50 hover:text-purple-300',
    iconClass: 'text-purple-400',
    Icon: Mail,
  },
  {
    label: 'Phone',
    value: personal.phone,
    href: `tel:${personal.phone}`,
    hoverClass: 'hover:border-green-500/50 hover:text-green-300',
    iconClass: 'text-green-400',
    Icon: Phone,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/sumanhp07',
    href: personal.linkedin,
    hoverClass: 'hover:border-blue-500/50 hover:text-blue-300',
    iconClass: 'text-blue-400',
    Icon: Linkedin,
  },
  {
    label: 'GitHub',
    value: 'github.com/sumanhp07',
    href: personal.github,
    hoverClass: 'hover:border-slate-400/50 hover:text-slate-200',
    iconClass: 'text-slate-400',
    Icon: Github,
  },
  {
    label: 'Location',
    value: 'Bengaluru, India',
    href: null,
    hoverClass: '',
    iconClass: 'text-red-400',
    Icon: MapPin,
  },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(personal.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-800/10 rounded-full blur-3xl pointer-events-none" />

      <SectionHeader
        label="Get In Touch"
        title="Let's Connect"
        subtitle="I'm actively looking for opportunities. Whether you have a question, a project idea, or just want to say hi — my inbox is open."
      />

      {/* CTA card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass rounded-2xl p-8 mb-8 max-w-2xl"
      >
        <p className="text-slate-300 mb-6 leading-relaxed">
          I'm a final-year CSE student at BMSITM, Bengaluru, open to internships, full-time roles,
          and freelance projects in software development, Java, or blockchain.
        </p>

        {/* Email display + copy */}
        <div className="flex items-center gap-3 mb-6 p-4 rounded-xl bg-white/[0.04] border border-white/[0.08]">
          <Mail size={16} className="text-brand-400 flex-shrink-0" />
          <span className="text-white font-medium text-sm flex-1">{personal.email}</span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-600/20 border border-brand-600/40 text-brand-300 hover:bg-brand-600/30 text-xs font-semibold transition-all"
          >
            {copied ? <><Check size={12} /> Copied!</> : <><Copy size={12} /> Copy</>}
          </button>
        </div>

        {/* Two buttons */}
        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:sumanhp0317@gmail.com?subject=Opportunity%20for%20Suman%20H%20P`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold transition-all duration-200 hover:shadow-xl hover:shadow-brand-600/40 hover:-translate-y-0.5"
          >
            <Send size={16} />
            Send Me an Email
          </a>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=sumanhp0317@gmail.com&su=Opportunity%20for%20Suman%20H%20P`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-brand-600/50 text-brand-300 hover:bg-brand-600/10 font-semibold transition-all duration-200 hover:-translate-y-0.5"
          >
            <Mail size={16} />
            Open in Gmail
          </a>
        </div>
      </motion.div>

      {/* Contact grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {contactLinks.map(({ label, value, href, hoverClass, iconClass, Icon }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
          >
            {href ? (
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 glass rounded-xl text-slate-400 transition-all duration-200 hover:-translate-y-0.5 ${hoverClass}`}
              >
                <span className={`flex-shrink-0 ${iconClass}`}>
                  <Icon size={20} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-slate-500 mb-0.5">{label}</p>
                  <p className="text-sm font-medium truncate">{value}</p>
                </div>
              </a>
            ) : (
              <div className="flex items-center gap-4 p-4 glass rounded-xl text-slate-400">
                <span className={`flex-shrink-0 ${iconClass}`}>
                  <Icon size={20} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-slate-500 mb-0.5">{label}</p>
                  <p className="text-sm font-medium truncate">{value}</p>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
