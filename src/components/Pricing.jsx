import { useState } from 'react'
import { Check, Zap, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const plans = [
  {
    name: 'Starter',
    monthly: 0,
    annual: 0,
    description: 'Perfect for side projects and early-stage ideas.',
    cta: 'Start for Free',
    ctaSecondary: true,
    popular: false,
    features: [
      '3 active projects',
      '5 GB storage',
      'Shared compute',
      'Basic analytics',
      'Community support',
      'SSL certificates',
    ],
  },
  {
    name: 'Pro',
    monthly: 49,
    annual: 39,
    description: 'For growing teams that need power and flexibility.',
    cta: 'Get Started',
    ctaSecondary: false,
    popular: true,
    features: [
      'Unlimited projects',
      '100 GB storage',
      'Dedicated compute',
      'Advanced analytics',
      'Priority email support',
      'Custom domains',
      'Team collaboration',
      'Full API access',
    ],
  },
  {
    name: 'Enterprise',
    monthly: 129,
    annual: 99,
    description: 'For large teams with advanced compliance needs.',
    cta: 'Contact Sales',
    ctaSecondary: true,
    popular: false,
    features: [
      'Unlimited everything',
      '1 TB storage',
      'Dedicated infrastructure',
      'Custom analytics',
      '24/7 dedicated support',
      'SSO & SAML',
      '99.99% SLA',
      'Audit logs',
      'Custom integrations',
    ],
  },
]

function PricingCard({ plan, annual, index }) {
  const price = annual ? plan.annual : plan.monthly

  const inner = (
    <motion.div
      key={plan.name}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative rounded-2xl p-7 h-full ${
        plan.popular
          ? 'bg-gradient-to-b from-[#0d1525]/95 to-[#080c18]/95 backdrop-blur-xl'
          : 'border border-white/8 backdrop-blur-md'
      }`}
      style={plan.popular ? {} : { background: 'rgba(255,255,255,0.04)' }}
    >
      {plan.popular && (
        <>
          {/* Inner top glow */}
          <div className="absolute top-0 left-0 right-0 h-px rounded-t-2xl" style={{
            background: 'linear-gradient(to right, transparent, rgba(96,165,250,0.6), rgba(139,92,246,0.6), transparent)',
          }} />
          <div className="absolute top-0 left-0 right-0 h-28 rounded-t-2xl pointer-events-none" style={{
            background: 'linear-gradient(to bottom, rgba(59,130,246,0.1), transparent)',
          }} />
        </>
      )}

      {/* Popular badge */}
      {plan.popular && (
        <div className="absolute -top-[18px] left-1/2 -translate-x-1/2 z-10">
          <motion.div
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white text-xs font-bold"
            style={{ boxShadow: '0 0 22px rgba(99,102,241,0.55)' }}
          >
            <Zap size={11} className="fill-white" />
            Most Popular
          </motion.div>
        </div>
      )}

      {/* Plan header */}
      <div className="mb-5 pt-2">
        <h3 className="text-white font-bold text-lg tracking-tight">{plan.name}</h3>
        <p className="text-slate-400 text-sm mt-1">{plan.description}</p>
      </div>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-end gap-1.5">
          <AnimatePresence mode="wait">
            <motion.span
              key={annual ? 'annual' : 'monthly'}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.2 }}
              className="text-4xl font-extrabold text-white"
            >
              ${price}
            </motion.span>
          </AnimatePresence>
          {price > 0 && <span className="text-slate-500 text-sm pb-1.5">/mo</span>}
        </div>
        {annual && plan.annual > 0 && (
          <p className="text-emerald-400 text-xs mt-1 font-medium">
            Billed annually · Save ${(plan.monthly - plan.annual) * 12}/yr
          </p>
        )}
      </div>

      {/* CTA */}
      <a
        href="#"
        className={`flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-200 mb-6 ${
          plan.popular
            ? 'bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white hover:-translate-y-0.5'
            : 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white'
        }`}
        style={plan.popular ? { boxShadow: '0 0 20px rgba(99,102,241,0.35)' } : {}}
      >
        {plan.cta}
        <ArrowRight size={14} />
      </a>

      {/* Divider */}
      <div className="border-t border-white/8 mb-5" />

      {/* Feature list */}
      <ul className="space-y-3.5">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <div
              className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
              style={plan.popular
                ? { background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(96,165,250,0.25)', boxShadow: '0 0 8px rgba(96,165,250,0.15)' }
                : { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }
              }
            >
              <Check size={10} className={plan.popular ? 'text-blue-300' : 'text-slate-400'} strokeWidth={3} />
            </div>
            <span className="text-slate-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )

  if (plan.popular) {
    return (
      <div className="relative pt-5">
        {/* Gradient border wrapper */}
        <div
          className="p-[1px] rounded-2xl h-full"
          style={{
            background: 'linear-gradient(to bottom, rgba(96,165,250,0.5), rgba(139,92,246,0.35) 50%, rgba(139,92,246,0.1))',
            boxShadow: '0 0 60px rgba(99,102,241,0.2)',
          }}
        >
          {inner}
        </div>
      </div>
    )
  }

  return <div className="relative">{inner}</div>
}

export default function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-4"
          >
            Simple Pricing
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight"
          >
            Transparent pricing,{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              no surprises
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto mb-8"
          >
            Start free, upgrade when you need to. Cancel anytime.
          </motion.p>

          {/* Billing toggle */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-1 p-1 rounded-full border border-white/10"
            style={{ background: 'rgba(255,255,255,0.04)' }}
          >
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                !annual
                  ? 'bg-white text-[#080810] shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                annual
                  ? 'bg-white text-[#080810] shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Annual
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded-full font-bold">
                SAVE 20%
              </span>
            </button>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 items-start">
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} annual={annual} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-500 text-sm mt-12"
        >
          All plans include a 14-day free trial. No credit card required to start.
        </motion.p>
      </div>
    </section>
  )
}
