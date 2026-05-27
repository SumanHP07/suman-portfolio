import { Github, Linkedin, Mail } from 'lucide-react'
import { personal } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#060610]">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-lg font-bold gradient-text">{personal.name}</p>
          <p className="text-slate-600 text-xs mt-0.5 tracking-widest uppercase">
            Code · Build · Innovate
          </p>
        </div>

        <div className="flex items-center gap-3">
          {[
            { href: personal.github,   icon: <Github size={16} />,   label: 'GitHub' },
            { href: personal.linkedin, icon: <Linkedin size={16} />, label: 'LinkedIn' },
            { href: `mailto:${personal.email}`, icon: <Mail size={16} />, label: 'Email' },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-full glass flex items-center justify-center text-slate-400 hover:text-brand-300 hover:border-brand-600/50 transition-all"
            >
              {icon}
            </a>
          ))}
        </div>

        <p className="text-slate-600 text-xs text-center sm:text-right">
          © {new Date().getFullYear()} {personal.name}
          <br />
          Built with Next.js 14 & TailwindCSS
        </p>
      </div>
    </footer>
  )
}
