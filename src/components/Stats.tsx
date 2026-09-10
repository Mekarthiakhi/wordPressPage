import { motion } from 'framer-motion'
import { STATS } from '../data/site'

export default function Stats() {
  return (
    <section className="relative w-full bg-white pt-8 pb-14">
      <div className="container-page">
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="font-serif text-2xl sm:text-3xl text-slate-800">
            At A Glance
          </h2>
          <p className="text-xs text-slate-400 mt-1 font-normal">
            Character development, and a love for learning.
          </p>
        </div>

        {/* Stats Grid + Right Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* 4 Stats in bordered box */}
          <div className="lg:col-span-8 border border-slate-200 rounded-sm divide-y sm:divide-y-0 sm:divide-x divide-slate-200 grid grid-cols-2 sm:grid-cols-4 bg-white">
            {STATS.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-5 sm:p-6 text-center"
              >
                <p className="font-serif text-2xl sm:text-3xl font-medium text-[#82C9C7] tracking-tight">
                  {stat.formatted}
                </p>
                <p className="mt-2 text-[11px] sm:text-xs text-slate-500 font-medium leading-tight">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Quote */}
          <div className="lg:col-span-4 text-center lg:text-right px-4">
            <p className="font-serif italic text-base sm:text-lg text-slate-600 tracking-wide">
              "Strive for Excellence, Inspire for Life"
            </p>
          </div>
        </div>

        {/* Wavy/Curved Pastel Cyan Enrollment Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#B5E6E8] via-[#C7EEF0] to-[#A2DDD8] px-6 sm:px-12 py-7 sm:py-8 shadow-sm"
        >
          {/* Subtle curved background overlay */}
          <div className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full bg-white/20 blur-xl pointer-events-none" />

          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Left: Notebook illustration & Heading */}
            <div className="flex items-center gap-5 sm:gap-6">
              {/* Spiral Notebook SVG Illustration */}
              <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-white/80 rounded-xl p-2.5 shadow-sm border border-white/60 flex items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform">
                <svg viewBox="0 0 64 64" fill="none" className="w-full h-full" aria-hidden="true">
                  <rect x="14" y="8" width="42" height="48" rx="4" fill="#FFFFFF" stroke="#82C9C7" strokeWidth="2" />
                  <path d="M12 16H18M12 24H18M12 32H18M12 40H18M12 48H18" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M24 20H48M24 28H48M24 36H40" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
                  {/* Pencil */}
                  <path d="M42 48L52 38L56 42L46 52L40 54L42 48Z" fill="#F87171" stroke="#DC2626" strokeWidth="1" />
                </svg>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-slate-800 tracking-tight text-center sm:text-left">
                Our Education like no other
              </h3>
            </div>

            {/* Right: White pill ENROLL button */}
            <a
              href="#inquire"
              className="btn-enroll shadow-md hover:shadow-lg"
            >
              ENROLL
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
