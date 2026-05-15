import { Zap, Shield, Globe, Code2, BarChart3, Layers } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: Zap,
    title: 'Instant Deployment',
    description: 'Push to production in seconds. Automated CI/CD pipelines handle testing, building, and rollout with zero downtime.',
    color: 'text-amber-400',
    gradient: 'from-amber-500/20 to-orange-500/5',
    border: 'border-amber-500/25',
    hoverBorder: 'rgba(251,191,36,0.3)',
    hoverShadow: '0 0 40px rgba(251,191,36,0.1), 0 0 0 1px rgba(251,191,36,0.25)',
    iconGlow: '0 0 20px rgba(251,191,36,0.3)',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC 2 Type II certified. End-to-end encryption, SSO, and granular RBAC keep your data and team safe at every layer.',
    color: 'text-emerald-400',
    gradient: 'from-emerald-500/20 to-teal-500/5',
    border: 'border-emerald-500/25',
    hoverBorder: 'rgba(52,211,153,0.3)',
    hoverShadow: '0 0 40px rgba(52,211,153,0.1), 0 0 0 1px rgba(52,211,153,0.25)',
    iconGlow: '0 0 20px rgba(52,211,153,0.3)',
  },
  {
    icon: Globe,
    title: 'Global Edge Network',
    description: 'Deploy to 200+ edge locations worldwide. Sub-50ms response times regardless of where your users are.',
    color: 'text-blue-400',
    gradient: 'from-blue-500/20 to-cyan-500/5',
    border: 'border-blue-500/25',
    hoverBorder: 'rgba(96,165,250,0.3)',
    hoverShadow: '0 0 40px rgba(96,165,250,0.1), 0 0 0 1px rgba(96,165,250,0.25)',
    iconGlow: '0 0 20px rgba(96,165,250,0.3)',
  },
  {
    icon: Code2,
    title: 'API-First Platform',
    description: 'Fully documented REST and GraphQL APIs. Native SDKs for TypeScript, Python, Go, and Ruby included.',
    color: 'text-violet-400',
    gradient: 'from-violet-500/20 to-purple-500/5',
    border: 'border-violet-500/25',
    hoverBorder: 'rgba(167,139,250,0.3)',
    hoverShadow: '0 0 40px rgba(167,139,250,0.1), 0 0 0 1px rgba(167,139,250,0.25)',
    iconGlow: '0 0 20px rgba(167,139,250,0.3)',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Understand your product deeply. Custom dashboards, funnel analysis, and automated anomaly detection out of the box.',
    color: 'text-rose-400',
    gradient: 'from-rose-500/20 to-pink-500/5',
    border: 'border-rose-500/25',
    hoverBorder: 'rgba(251,113,133,0.3)',
    hoverShadow: '0 0 40px rgba(251,113,133,0.1), 0 0 0 1px rgba(251,113,133,0.25)',
    iconGlow: '0 0 20px rgba(251,113,133,0.3)',
  },
  {
    icon: Layers,
    title: 'Infinite Scalability',
    description: 'Auto-scaling infrastructure that adjusts in real-time. Pay for what you use — no pre-provisioning required.',
    color: 'text-cyan-400',
    gradient: 'from-cyan-500/20 to-sky-500/5',
    border: 'border-cyan-500/25',
    hoverBorder: 'rgba(34,211,238,0.3)',
    hoverShadow: '0 0 40px rgba(34,211,238,0.1), 0 0 0 1px rgba(34,211,238,0.25)',
    iconGlow: '0 0 20px rgba(34,211,238,0.3)',
  },
]

function FeatureCard({ feature, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{
        y: -6,
        boxShadow: feature.hoverShadow,
        transition: { duration: 0.2 },
      }}
      className="group relative p-6 rounded-2xl border border-white/8 backdrop-blur-md cursor-default transition-colors duration-300"
      style={{ background: 'rgba(255,255,255,0.04)' }}
    >
      {/* Subtle inner gradient */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 60%)',
      }} />

      {/* Icon */}
      <div
        className={`relative inline-flex w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} border ${feature.border} items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}
        style={{ boxShadow: feature.iconGlow }}
      >
        <feature.icon size={20} className={feature.color} />
      </div>

      <h3 className="text-white font-semibold text-base mb-2.5 tracking-tight">{feature.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
    </motion.div>
  )
}

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold mb-4"
          >
            Platform Features
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight"
          >
            Everything you need to ship{' '}
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              with confidence
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto"
          >
            A complete platform that handles the infrastructure so your team can
            focus on building product, not fighting tooling.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
