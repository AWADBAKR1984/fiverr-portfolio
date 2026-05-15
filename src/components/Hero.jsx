import { ArrowRight, Play, TrendingUp, Users, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] },
})

function MockDashboard() {
  const bars = [35, 52, 40, 68, 55, 75, 60, 85, 70, 90, 78, 95]

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Ambient glow */}
      <div className="absolute -inset-8 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.18) 0%, rgba(139,92,246,0.12) 50%, transparent 70%)',
      }} />

      {/* Gradient border wrapper */}
      <div className="relative p-[1px] rounded-2xl" style={{
        background: 'linear-gradient(to bottom, rgba(255,255,255,0.22), rgba(255,255,255,0.06) 50%, rgba(255,255,255,0))',
      }}>
        <div className="relative bg-[#07080f] rounded-2xl overflow-hidden shadow-2xl">

          {/* Inner top glow */}
          <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none" style={{
            background: 'linear-gradient(to bottom, rgba(59,130,246,0.1), transparent)',
          }} />

          {/* Top bar — window dots */}
          <div className="relative flex items-center gap-2 px-4 py-3 border-b border-white/8" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <span className="w-3 h-3 rounded-full bg-rose-500/90" />
              <span className="w-3 h-3 rounded-full bg-amber-400/90" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/90" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-white/5 border border-white/8 rounded-md px-3 py-1 flex items-center gap-2 max-w-[180px] w-full">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                <span className="text-[10px] text-slate-400 font-mono truncate">app.fluxly.io/dashboard</span>
              </div>
            </div>
            <div className="w-14 flex-shrink-0" />
          </div>

          {/* Dashboard content */}
          <div className="relative p-5">
            {/* Header row */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-widest">Overview</p>
                <p className="text-white font-bold text-base mt-0.5">Analytics Dashboard</p>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] text-emerald-400 font-semibold">Live</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {[
                { label: 'Revenue', value: '$48.2K', icon: TrendingUp, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
                { label: 'Active Users', value: '12.4K', icon: Users, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
                { label: 'Uptime', value: '99.9%', icon: Zap, color: 'text-violet-400', bg: 'bg-violet-500/10', border: 'border-violet-500/20' },
              ].map((stat) => (
                <div key={stat.label} className={`rounded-xl p-3 border ${stat.border}`} style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <div className={`w-7 h-7 rounded-lg ${stat.bg} flex items-center justify-center mb-2`}>
                    <stat.icon size={13} className={stat.color} />
                  </div>
                  <p className="text-white text-sm font-bold leading-none">{stat.value}</p>
                  <p className="text-slate-500 text-[10px] mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="rounded-xl p-4 border border-white/6 mb-3" style={{ background: 'rgba(255,255,255,0.03)' }}>
              <div className="flex items-end gap-1.5 h-[72px]">
                {bars.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + i * 0.05, ease: 'easeOut' }}
                    style={{ height: `${h}%`, transformOrigin: 'bottom' }}
                    className={`flex-1 rounded-t ${
                      i === bars.length - 1
                        ? 'bg-gradient-to-t from-violet-600 to-blue-400'
                        : i >= bars.length - 4
                          ? 'bg-gradient-to-t from-blue-700/80 to-violet-500/70'
                          : 'bg-gradient-to-t from-blue-800/55 to-violet-600/45'
                    }`}
                  />
                ))}
              </div>
              <p className="text-[10px] text-slate-500 mt-2.5 font-medium">Revenue — last 12 months</p>
            </div>

            {/* Activity feed */}
            <div className="space-y-px">
              {[
                { label: 'Deployment #482 succeeded', time: '2m ago', dot: 'bg-blue-400' },
                { label: 'Reached 10K active users', time: '1h ago', dot: 'bg-emerald-400' },
                { label: 'API latency normalized', time: '3h ago', dot: 'bg-violet-400' },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between py-1.5 px-1">
                  <div className="flex items-center gap-2.5">
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${item.dot}`} />
                    <span className="text-[11px] text-slate-400">{item.label}</span>
                  </div>
                  <span className="text-[10px] text-slate-600 flex-shrink-0 ml-2">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge: deploy time */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.3 }}
        className="absolute -bottom-5 -right-6 backdrop-blur-xl border border-white/15 rounded-xl px-3.5 py-2.5 shadow-2xl shadow-black/60"
        style={{ background: 'rgba(8,9,20,0.92)' }}
      >
        <p className="text-[10px] text-slate-400 mb-0.5">Deploy time</p>
        <p className="text-white font-bold text-lg leading-none">
          4.2s <span className="text-emerald-400 text-xs font-semibold">↓ 94%</span>
        </p>
      </motion.div>

      {/* Floating badge: growth */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="absolute -top-5 -left-6 backdrop-blur-xl border border-white/15 rounded-xl px-3 py-2.5 shadow-2xl shadow-black/60"
        style={{ background: 'rgba(8,9,20,0.92)' }}
      >
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center border border-blue-400/20" style={{ background: 'rgba(59,130,246,0.15)' }}>
            <TrendingUp size={12} className="text-blue-400" />
          </div>
          <div>
            <p className="text-white text-sm font-bold leading-none">+127%</p>
            <p className="text-slate-500 text-[10px] mt-0.5">This month</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Radial glow — hero only */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ height: '100vh' }}>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px]" style={{
          background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.13) 0%, rgba(139,92,246,0.09) 40%, transparent 70%)',
        }} />
      </div>
      <div className="absolute top-1/4 -left-24 sm:-left-32 w-72 sm:w-[400px] h-72 sm:h-[400px] bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-16 sm:right-0 w-64 sm:w-[350px] h-64 sm:h-[350px] bg-violet-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left: copy */}
          <div className="relative">
            {/* Badge with animated glow */}
            <motion.div {...fadeUp(0.1)}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold mb-6 badge-glow">
                <motion.span
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1.5 h-1.5 rounded-full bg-blue-400"
                />
                Fluxly 2.0 — Now in public beta
                <ArrowRight size={11} />
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.2)}
              className="text-[2.5rem] sm:text-[3.5rem] lg:text-[4.25rem] font-extrabold leading-[1.07] tracking-tight text-white mb-6"
            >
              Build & Launch Your{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                  SaaS Faster
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-px" style={{
                  background: 'linear-gradient(to right, transparent, rgba(139,92,246,0.5), transparent)',
                }} />
              </span>{' '}
              Than Ever
            </motion.h1>

            {/* Subtext */}
            <motion.p
              {...fadeUp(0.3)}
              className="text-base sm:text-lg text-slate-400 leading-relaxed mb-10 max-w-lg"
            >
              Fluxly gives your team a complete platform to deploy, monitor, and
              scale your SaaS — from your first commit to your millionth user.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.4)} className="flex flex-col sm:flex-row gap-3">
              <a
                href="#"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
                style={{ boxShadow: '0 0 24px rgba(99,102,241,0.4)' }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 40px rgba(99,102,241,0.65)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 24px rgba(99,102,241,0.4)'}
              >
                Get Started Free
                <ArrowRight size={15} />
              </a>
              <a
                href="#"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/5 hover:bg-white/8 border border-white/10 hover:border-white/20 text-white font-semibold text-sm transition-all duration-200"
              >
                <div className="w-6 h-6 rounded-full bg-white/10 border border-white/15 flex items-center justify-center">
                  <Play size={11} className="fill-white text-white ml-0.5" />
                </div>
                Watch Demo
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div {...fadeUp(0.5)} className="mt-10 flex flex-wrap items-center gap-4">
              <div className="flex -space-x-2.5">
                {[
                  { bg: 'from-blue-500 to-cyan-500', initials: 'AC' },
                  { bg: 'from-violet-500 to-purple-500', initials: 'MR' },
                  { bg: 'from-emerald-500 to-teal-500', initials: 'PS' },
                  { bg: 'from-rose-500 to-pink-500', initials: 'JK' },
                ].map((user, i) => (
                  <div
                    key={i}
                    className={`w-9 h-9 rounded-full bg-gradient-to-br ${user.bg} border-[2.5px] border-[#080810] flex items-center justify-center text-[10px] font-bold text-white shadow-lg`}
                  >
                    {user.initials}
                  </div>
                ))}
                <div className="w-9 h-9 rounded-full bg-white/8 border-[2.5px] border-[#080810] flex items-center justify-center text-[10px] font-semibold text-slate-300">
                  +2k
                </div>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <div className="flex items-center gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="13" height="13" viewBox="0 0 20 20" fill="#f59e0b">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-slate-400">
                  Loved by <span className="text-white font-semibold">2,400+</span> teams
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: floating dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="hidden lg:block"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <MockDashboard />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
