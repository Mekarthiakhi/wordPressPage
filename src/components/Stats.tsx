import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { STATS } from '../data/site'

// Hand-drawn cloud doodle matching the PDF top right
function CloudDoodle() {
  return (
    <svg className="w-12 h-8 text-[#82C9C7]/50" viewBox="0 0 40 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path
        d="M10 20C5.58 20 2 16.42 2 12C2 7.86 5.14 4.46 9.24 4.04C10.74 1.58 13.43 0 16.5 0C20.67 0 24.16 2.92 24.9 6.84C25.75 6.3 26.83 6 28 6C31.31 6 34 8.69 34 12C34 12.35 33.97 12.69 33.91 13.02C36.26 13.88 38 16.24 38 19C38 22.31 35.31 25 32 25L10 25"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="2 2"
      />
    </svg>
  )
}

export default function Stats() {
  return (
    <section className="relative w-full bg-white pt-8 pb-16">
      <div className="container-page">
        {/* Section Header with Cloud Doodle */}
        <div className="relative flex flex-col sm:flex-row sm:items-end justify-between mb-8">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate-800">
              At A Glance
            </h2>
            <p className="text-xs text-slate-400 mt-1 font-normal">
              Character development, and a love for learning.
            </p>
          </div>

          {/* Floating cloud sketch doodle from the PDF */}
          <div className="hidden sm:block absolute -top-4 right-1/3 animate-doodle pointer-events-none">
            <CloudDoodle />
          </div>
        </div>

        {/* Stats Grid + Right Italic Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* 4 Stats in clean bordered box with hover highlights */}
          <div className="lg:col-span-8 border border-slate-200/90 rounded-2xl divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80 grid grid-cols-2 sm:grid-cols-4 bg-white shadow-sm overflow-hidden">
            {STATS.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-5 sm:p-6 text-center transition-all duration-300 hover:bg-[#F2FAFA]"
              >
                <p className="font-serif text-3xl sm:text-4xl font-medium text-[#82C9C7] tracking-tight group-hover:scale-105 transition-transform">
                  {stat.formatted}
                </p>
                <p className="mt-2 text-xs text-slate-700 font-semibold leading-tight">
                  {stat.label}
                </p>
                <span className="mt-1 inline-block text-[10px] text-slate-400 font-normal">
                  {stat.highlight}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Right Quote */}
          <div className="lg:col-span-4 text-center lg:text-right px-4">
            <p className="font-serif italic text-lg sm:text-xl text-slate-600 tracking-wide leading-snug">
              “Strive for Excellence, Inspire for Life”
            </p>
            <span className="block text-[11px] text-[#82C9C7] font-medium mt-1">
              — School Motto
            </span>
          </div>
        </div>

        {/* Curved Pastel Cyan Enrollment Banner (Organic Wave) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#AEE4E6] via-[#BFEAEB] to-[#99DFDC] p-6 sm:p-10 shadow-md border border-white/60"
        >
          {/* Top fluid wave background decoration */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/25 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full bg-teal-400/10 blur-xl pointer-events-none" />

          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6 z-10">
            {/* Left: Realistic Notebook illustration & Heading */}
            <div className="flex items-center gap-5 sm:gap-7">
              {/* Detailed 3D Spiral Notebook with Colorful Sticky Tabs */}
              <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-2xl p-3 shadow-lg border border-white flex items-center justify-center transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                <svg viewBox="0 0 80 80" fill="none" className="w-full h-full" aria-hidden="true">
                  {/* Sticky Tabs */}
                  <rect x="58" y="14" width="12" height="6" rx="2" fill="#F472B6" />
                  <rect x="58" y="24" width="12" height="6" rx="2" fill="#FBBF24" />
                  <rect x="58" y="34" width="12" height="6" rx="2" fill="#34D399" />
                  {/* Notebook Base */}
                  <rect x="12" y="10" width="50" height="60" rx="5" fill="#FFFFFF" stroke="#82C9C7" strokeWidth="2.5" />
                  {/* Spiral bindings */}
                  <circle cx="12" cy="18" r="2.5" fill="#334155" />
                  <circle cx="12" cy="28" r="2.5" fill="#334155" />
                  <circle cx="12" cy="38" r="2.5" fill="#334155" />
                  <circle cx="12" cy="48" r="2.5" fill="#334155" />
                  <circle cx="12" cy="58" r="2.5" fill="#334155" />
                  {/* Page Lines */}
                  <line x1="22" y1="22" x2="52" y2="22" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
                  <line x1="22" y1="32" x2="52" y2="32" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
                  <line x1="22" y1="42" x2="44" y2="42" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
                  {/* Pen / Pencil overlay */}
                  <path d="M46 62L60 48L64 52L50 66L44 68L46 62Z" fill="#F87171" stroke="#DC2626" strokeWidth="1" />
                </svg>
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#047857] bg-white/70 px-2.5 py-0.5 rounded-full shadow-xs">
                  Admissions Open 2024–25
                </span>
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-slate-800 tracking-tight mt-1.5">
                  Our Education like no other
                </h3>
              </div>
            </div>

            {/* Right: White pill ENROLL button with subtle pulse */}
            <a
              href="#admissions"
              className="btn-enroll shadow-lg hover:shadow-xl group"
            >
              <span>ENROLL</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
