import { useState, useEffect } from 'react'
import { Zap, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/50 backdrop-blur-xl border-b border-white/10 shadow-xl shadow-black/30'
          : 'bg-black/20 backdrop-blur-xl border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-[0_0_16px_rgba(99,102,241,0.4)] group-hover:shadow-[0_0_24px_rgba(99,102,241,0.6)] transition-all duration-200">
              <Zap size={15} className="text-white fill-white" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white">
              Fluxly
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-slate-400 hover:text-white transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-blue-400 to-violet-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
              Sign In
            </a>
            <a
              href="#"
              className="text-sm font-semibold px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white transition-all duration-200 shadow-[0_0_20px_rgba(99,102,241,0.35)] hover:shadow-[0_0_32px_rgba(99,102,241,0.55)] hover:-translate-y-0.5"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-slate-400 hover:text-white transition-colors p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-white/8 bg-black/70 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 py-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-slate-400 hover:text-white py-2.5 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-white/8 flex flex-col gap-2">
                <a href="#" className="text-sm text-slate-400 hover:text-white py-2 transition-colors">
                  Sign In
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white text-center shadow-[0_0_20px_rgba(99,102,241,0.35)]"
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
