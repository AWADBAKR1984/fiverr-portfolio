import { UserPlus, Sliders, Rocket } from 'lucide-react'
import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    icon: UserPlus,
    title: 'Create Your Account',
    description: 'Sign up in under 60 seconds. No credit card required. Connect your GitHub or GitLab repository and your workspace is ready instantly.',
    color: 'text-blue-400',
    gradient: 'from-blue-500/20 to-cyan-500/5',
    border: 'border-blue-500/25',
    glow: '0 0 24px rgba(59,130,246,0.2)',
    lineColor: 'from-blue-500/40 to-violet-500/40',
  },
  {
    number: '02',
    icon: Sliders,
    title: 'Customize & Configure',
    description: 'Use our visual editor to configure your stack, set environment variables, define scaling rules, and wire up your CI/CD pipeline — no YAML required.',
    color: 'text-violet-400',
    gradient: 'from-violet-500/20 to-purple-500/5',
    border: 'border-violet-500/25',
    glow: '0 0 24px rgba(139,92,246,0.2)',
    lineColor: 'from-violet-500/40 to-emerald-500/40',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Launch & Scale',
    description: 'Go live with one click. Monitor performance with real-time dashboards and let Fluxly auto-scale your infrastructure as your user base grows.',
    color: 'text-emerald-400',
    gradient: 'from-emerald-500/20 to-teal-500/5',
    border: 'border-emerald-500/25',
    glow: '0 0 24px rgba(52,211,153,0.2)',
    lineColor: '',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(to bottom, transparent, rgba(10,12,28,0.6), transparent)',
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <div className="text-center mb-14 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-4"
          >
            How It Works
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight"
          >
            Up and running in{' '}
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              three steps
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto"
          >
            From idea to production-ready SaaS in minutes, not months.
          </motion.p>
        </div>

        {/* Desktop: horizontal 3-col grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 relative">
          {/* Horizontal connector */}
          <div
            className="absolute h-px top-10 bg-gradient-to-r from-blue-500/30 via-violet-500/40 to-emerald-500/30"
            style={{ left: 'calc(100% / 6 + 44px)', right: 'calc(100% / 6 + 44px)' }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative mb-7">
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} border ${step.border} flex items-center justify-center backdrop-blur-md`}
                  style={{ boxShadow: step.glow }}
                >
                  <step.icon size={26} className={step.color} />
                </div>
                <div className={`absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full border ${step.border} flex items-center justify-center`} style={{ background: '#080810' }}>
                  <span className={`text-[10px] font-bold ${step.color}`}>{i + 1}</span>
                </div>
              </div>
              <span className={`text-xs font-bold tracking-widest uppercase ${step.color} mb-2 opacity-60`}>
                Step {step.number}
              </span>
              <h3 className="text-white font-bold text-lg mb-3 tracking-tight">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-[260px]">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical stacked */}
        <div className="md:hidden flex flex-col">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className="flex gap-5">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.gradient} border ${step.border} flex items-center justify-center relative`}
                    style={{ boxShadow: step.glow }}
                  >
                    <step.icon size={22} className={step.color} />
                    <div className={`absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full border ${step.border} flex items-center justify-center`} style={{ background: '#080810' }}>
                      <span className={`text-[9px] font-bold ${step.color}`}>{i + 1}</span>
                    </div>
                  </div>
                  {i < steps.length - 1 && (
                    <div className={`w-px flex-1 mt-3 mb-1 bg-gradient-to-b ${step.lineColor} min-h-[2.5rem]`} />
                  )}
                </div>
                <div className={i < steps.length - 1 ? 'pb-8' : ''}>
                  <span className={`text-[10px] font-bold tracking-widest uppercase ${step.color} opacity-60`}>
                    Step {step.number}
                  </span>
                  <h3 className="text-white font-bold text-base mt-1 mb-2 tracking-tight">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
