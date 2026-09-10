import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronRight, GraduationCap, Users, Landmark, Sparkles } from 'lucide-react'
import { MISSIONS } from '../data/site'

// Paper plane with graceful wind trail doodle
function PaperPlaneDoodle() {
  return (
    <div className="relative inline-block">
      <svg className="w-20 h-10 mx-auto text-[#82C9C7]" viewBox="0 0 100 40" fill="none">
        {/* Looping dashed flight trail */}
        <path
          d="M5 25 Q 30 5, 50 25 T 80 18"
          stroke="#82C9C7"
          strokeWidth="1.5"
          strokeDasharray="3 3"
          strokeLinecap="round"
        />
        {/* Plane */}
        <g transform="translate(75, 5) scale(0.7) rotate(15)">
          <path d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9L22 2Z" fill="#82C9C7" stroke="#5AA3A1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  )
}

export default function MissionVision() {
  const [expanded, setExpanded] = useState<string>('mission')

  return (
    <section id="our-space" className="relative w-full bg-white py-14 overflow-hidden">
      <div className="container-page">
        {/* Section Header with Paper Plane and Wind Trail */}
        <div className="text-center mb-12">
          <PaperPlaneDoodle />
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-slate-800 mt-1">
            Inquire Today
          </h2>
          <p className="text-xs text-slate-400 mt-1.5 font-normal">
            Contact Us for More Information
          </p>
        </div>

        {/* 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Card: Enriching Communities Pastel Teal Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-[#D2F2F4] via-[#C3EFF1] to-[#AEE8EC] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-sm border border-white/80"
          >
            {/* Background subtle glow circle */}
            <div className="absolute top-0 right-0 w-44 h-44 rounded-full bg-white/30 blur-xl pointer-events-none" />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 text-[10px] font-bold tracking-wider uppercase text-teal-800 mb-3 shadow-xs">
                <Sparkles size={12} className="text-[#82C9C7]" />
                Our Philosophy
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl text-slate-800 font-semibold tracking-tight">
                Enriching Communities
              </h3>
              <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Our mission at The Yenepoya World is to inspire and empower every student to achieve their full potential, become lifelong learners, and make positive contributions to society. We create a nurturing ecosystem where character and scholarship blossom hand-in-hand.
              </p>

              <div className="mt-8">
                <a
                  href="#about"
                  className="btn-learn-more group"
                >
                  <span>Learn More</span>
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* 3D Stacked Notebooks Graphic at bottom right */}
            <div className="relative z-10 self-end mt-8 w-28 h-28 sm:w-32 sm:h-32 opacity-95 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-md">
                {/* Lower Book */}
                <rect x="18" y="40" width="70" height="42" rx="4" fill="#5AA3A1" />
                <rect x="22" y="44" width="62" height="34" rx="2" fill="#FFFFFF" />
                {/* Upper Book */}
                <rect x="12" y="24" width="70" height="46" rx="4" fill="#FFFFFF" stroke="#82C9C7" strokeWidth="2.5" />
                <line x1="22" y1="36" x2="68" y2="36" stroke="#E2E8F0" strokeWidth="3" strokeLinecap="round" />
                <line x1="22" y1="46" x2="58" y2="46" stroke="#E2E8F0" strokeWidth="3" strokeLinecap="round" />
                <line x1="22" y1="56" x2="48" y2="56" stroke="#E2E8F0" strokeWidth="3" strokeLinecap="round" />
                {/* Spiral binder */}
                <circle cx="12" cy="32" r="3" fill="#82C9C7" />
                <circle cx="12" cy="44" r="3" fill="#82C9C7" />
                <circle cx="12" cy="56" r="3" fill="#82C9C7" />
              </svg>
            </div>
          </motion.div>

          {/* Right Column: 4 Expandable Accordion Rows */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-3.5">
            {MISSIONS.map((item, idx) => {
              const isOpen = expanded === item.id
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`border rounded-2xl transition-all duration-300 ${
                    isOpen
                      ? 'border-[#82C9C7] bg-white shadow-md'
                      : 'border-slate-200/90 bg-white hover:border-slate-300 hover:shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => setExpanded(isOpen ? '' : item.id)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3.5">
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${
                        isOpen ? 'bg-[#82C9C7] text-white' : 'bg-slate-100 text-slate-500'
                      }`}>
                        {item.tag}
                      </span>
                      <h4 className="font-serif text-base sm:text-lg font-medium text-slate-800">
                        {item.title}
                      </h4>
                    </div>

                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 ml-4 transition-all duration-300 ${
                      isOpen
                        ? 'rotate-90 bg-[#82C9C7] text-white border-[#82C9C7] shadow-sm'
                        : 'border-slate-300 text-slate-400 hover:border-[#82C9C7] hover:text-[#82C9C7]'
                    }`}>
                      <ChevronRight size={16} />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100"
                      >
                        {item.text}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* 3 Quick-Access Feature Pills with Glassy Glow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mt-10">
          {/* 1. Academics */}
          <motion.a
            href="#curriculum"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group flex items-center justify-center gap-4 py-6 px-6 rounded-2xl bg-gradient-to-r from-[#B0E5E7] via-[#C0EFF1] to-[#A5E1E3] hover:from-[#9EDFE2] hover:to-[#92D9DC] transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1 border border-white/80"
          >
            <div className="w-10 h-10 rounded-full bg-white/40 flex items-center justify-center shadow-xs">
              <GraduationCap className="w-6 h-6 text-teal-900" />
            </div>
            <span className="font-bold text-sm tracking-wider text-slate-800 uppercase group-hover:text-teal-950">
              ACADEMICS
            </span>
          </motion.a>

          {/* 2. Students */}
          <motion.a
            href="#community"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="group flex items-center justify-center gap-4 py-6 px-6 rounded-2xl bg-gradient-to-r from-[#B0E5E7] via-[#C0EFF1] to-[#A5E1E3] hover:from-[#9EDFE2] hover:to-[#92D9DC] transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1 border border-white/80"
          >
            <div className="w-10 h-10 rounded-full bg-white/40 flex items-center justify-center shadow-xs">
              <Users className="w-6 h-6 text-teal-900" />
            </div>
            <span className="font-bold text-sm tracking-wider text-slate-800 uppercase group-hover:text-teal-950">
              STUDENTS
            </span>
          </motion.a>

          {/* 3. Admissions */}
          <motion.a
            href="#inquire"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.16 }}
            className="group flex items-center justify-center gap-4 py-6 px-6 rounded-2xl bg-gradient-to-r from-[#B0E5E7] via-[#C0EFF1] to-[#A5E1E3] hover:from-[#9EDFE2] hover:to-[#92D9DC] transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1 border border-white/80"
          >
            <div className="w-10 h-10 rounded-full bg-white/40 flex items-center justify-center shadow-xs">
              <Landmark className="w-6 h-6 text-teal-900" />
            </div>
            <span className="font-bold text-sm tracking-wider text-slate-800 uppercase group-hover:text-teal-950">
              ADMISSIONS
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
