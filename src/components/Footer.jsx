import { Zap, ArrowRight } from 'lucide-react'

const footerLinks = {
  Product: ['Features', 'Pricing', 'Changelog', 'Roadmap', 'Status'],
  Company: ['About Us', 'Blog', 'Careers', 'Press Kit'],
  Resources: ['Docs', 'API Reference', 'Guides', 'Community'],
  Legal: ['Privacy', 'Terms', 'Security', 'Cookies'],
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const socials = [
  { Icon: XIcon, href: '#', label: 'X (Twitter)' },
  { Icon: GithubIcon, href: '#', label: 'GitHub' },
  { Icon: LinkedInIcon, href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/8 pt-16 sm:pt-20 pb-8 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-40 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.06) 0%, transparent 70%)',
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* CTA Banner */}
        <div
          className="mb-16 sm:mb-20 p-[1px] rounded-2xl"
          style={{ background: 'linear-gradient(to right, rgba(59,130,246,0.25), rgba(139,92,246,0.2), rgba(59,130,246,0.25))' }}
        >
          <div
            className="rounded-2xl p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 backdrop-blur-md"
            style={{ background: 'linear-gradient(to right, rgba(10,14,28,0.95), rgba(13,16,32,0.95), rgba(10,14,28,0.95))' }}
          >
            <div>
              <h3 className="text-white font-bold text-2xl sm:text-3xl tracking-tight mb-2">
                Ready to ship faster?
              </h3>
              <p className="text-slate-400 text-sm">
                Start your free trial today. No credit card required.
              </p>
            </div>
            <a
              href="#"
              className="w-full sm:w-auto flex-shrink-0 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
              style={{ boxShadow: '0 0 24px rgba(99,102,241,0.4)' }}
            >
              Get Started Free
              <ArrowRight size={15} />
            </a>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-6 gap-y-10 mb-14">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center" style={{ boxShadow: '0 0 16px rgba(99,102,241,0.35)' }}>
                <Zap size={15} className="text-white fill-white" />
              </div>
              <span className="text-lg font-bold text-white">Fluxly</span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-[220px] mb-5">
              The modern platform for teams who want to ship faster and scale with confidence.
            </p>
            <div className="flex items-center gap-2">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/8 hover:border-white/15 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="col-span-1 lg:col-span-1">
              <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
                {section}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-400 text-sm hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Fluxly, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <p className="text-slate-500 text-xs">All systems operational</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
