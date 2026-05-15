import { Star, Quote } from 'lucide-react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'Luminary',
    initials: 'SC',
    gradient: 'from-blue-500 to-cyan-500',
    stars: 5,
    text: 'Fluxly cut our deployment time from 3 days to under 5 minutes. The developer experience is genuinely unmatched — our engineers actually look forward to deploy days now.',
  },
  {
    name: 'Marcus Rivera',
    role: 'Founder & CEO',
    company: 'Stackbloom',
    initials: 'MR',
    gradient: 'from-violet-500 to-purple-500',
    stars: 5,
    text: "We migrated our entire infrastructure in a single weekend. The documentation is outstanding and the support team responded within minutes every time. An absolute game-changer.",
  },
  {
    name: 'Priya Sharma',
    role: 'Lead Engineer',
    company: 'Nexvault',
    initials: 'PS',
    gradient: 'from-emerald-500 to-teal-500',
    stars: 5,
    text: "The analytics dashboard alone justifies the price. We finally have real visibility into our product performance without needing a dedicated data team. Fluxly just works.",
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} className="text-amber-400 fill-amber-400" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.06) 0%, transparent 65%)',
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <div className="text-center mb-14 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-4"
          >
            Customer Stories
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight"
          >
            Loved by engineering{' '}
            <span className="bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent">
              teams worldwide
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto"
          >
            Join thousands of teams that ship faster and scale smarter with Fluxly.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="border border-white/8 hover:border-white/15 rounded-2xl p-7 backdrop-blur-md transition-all duration-300 flex flex-col"
              style={{ background: 'rgba(255,255,255,0.04)' }}
            >
              {/* Quote + stars */}
              <div className="flex items-start justify-between mb-5">
                <Quote size={22} className="text-white/10 fill-white/10 -scale-x-100" />
                <Stars count={t.stars} />
              </div>

              {/* Text */}
              <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-6">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/8">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-xs font-bold flex-shrink-0 shadow-lg`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-slate-500 text-xs mt-0.5">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 lg:mt-20 grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-8 sm:gap-14 text-center"
        >
          {[
            { value: '2,400+', label: 'Teams worldwide' },
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '4.9/5', label: 'Average rating' },
            { value: '< 5min', label: 'Avg. deploy time' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-extrabold text-white">{stat.value}</p>
              <p className="text-slate-500 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
