import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, GraduationCap, Users, Building2 } from 'lucide-react'
import { MISSIONS } from '../data/site'

// Paper plane doodle SVG icon
function PaperPlaneIcon() {
  return (
    <svg className="w-8 h-8 mx-auto text-[#82C9C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9L22 2Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function MissionVision() {
  const [expanded, setExpanded] = useState<string>('mission')

  return (
    <section id="our-space" className="relative w-full bg-white py-12">
      <div className="container-page">
        {/* Section Header with Paper Plane Icon */}
        <div className="text-center mb-10">
          <PaperPlaneIcon />
          <h2 className="font-serif text-2xl sm:text-3xl text-slate-800 mt-2">
            Inquire Today
          </h2>
          <p className="text-xs text-slate-400 mt-1 font-normal">
            Contact Us for More Information
          </p>
        </div>

        {/* 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Card: Soft Pastel Cyan "Enriching Communities" */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 rounded-2xl bg-[#C7EEF0] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-sm"
          >
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-slate-800 font-semibold tracking-tight">
                Enriching Communities
              </h3>
              <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our mission at The Yenepoya World is to inspire and empower every student to achieve their full potential, become lifelong learners, and make positive contributions to society. We are dedicated to creating a nurturing environment where curiosity thrives.
              </p>

              <div className="mt-6">
                <a
                  href="#about"
                  className="btn-learn-more"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Isometric Notebook illustration at bottom right */}
            <div className="self-end mt-8 w-24 h-24 sm:w-28 sm:h-28 opacity-90 transform rotate-6">
              <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                {/* Book base */}
                <rect x="15" y="25" width="70" height="50" rx="4" fill="#FFFFFF" stroke="#82C9C7" strokeWidth="2.5" />
                <rect x="22" y="32" width="56" height="4" rx="2" fill="#E2E8F0" />
                <rect x="22" y="42" width="45" height="4" rx="2" fill="#E2E8F0" />
                <rect x="22" y="52" width="35" height="4" rx="2" fill="#E2E8F0" />
                {/* Spiral rings */}
                <circle cx="15" cy="35" r="3" fill="#82C9C7" />
                <circle cx="15" cy="45" r="3" fill="#82C9C7" />
                <circle cx="15" cy="55" r="3" fill="#82C9C7" />
                <circle cx="15" cy="65" r="3" fill="#82C9C7" />
              </svg>
            </div>
          </motion.div>

          {/* Right Column: 4 Expandable Cards */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-3">
            {MISSIONS.map((item, idx) => {
              const isOpen = expanded === item.id
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`border border-slate-200 rounded-xl transition-all duration-300 ${
                    isOpen ? 'bg-slate-50/70 shadow-sm' : 'bg-white hover:bg-slate-50/40'
                  }`}
                >
                  <button
                    onClick={() => setExpanded(isOpen ? '' : item.id)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div>
                      <h4 className="font-serif text-lg font-medium text-slate-800">
                        {item.title}
                      </h4>
                      {!isOpen && (
                        <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                          {item.text}
                        </p>
                      )}
                    </div>

                    <div className={`w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center flex-shrink-0 ml-4 transition-transform duration-300 ${
                      isOpen ? 'rotate-90 bg-[#82C9C7] text-white border-[#82C9C7]' : 'text-slate-500 hover:border-[#82C9C7]'
                    }`}>
                      <ArrowRight size={14} />
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

        {/* 3 Quick-Access Feature Pills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {/* Academics */}
          <motion.a
            href="#curriculum"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group flex items-center justify-center gap-3 py-5 px-6 rounded-2xl bg-[#B8EAEB] hover:bg-[#A5E3E4] transition-all duration-300 shadow-sm"
          >
            <GraduationCap className="w-6 h-6 text-white" />
            <span className="font-bold text-sm tracking-wider text-white uppercase">
              ACADEMICS
            </span>
          </motion.a>

          {/* Students */}
          <motion.a
            href="#community"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="group flex items-center justify-center gap-3 py-5 px-6 rounded-2xl bg-[#B8EAEB] hover:bg-[#A5E3E4] transition-all duration-300 shadow-sm"
          >
            <Users className="w-6 h-6 text-white" />
            <span className="font-bold text-sm tracking-wider text-white uppercase">
              STUDENTS
            </span>
          </motion.a>

          {/* Admissions */}
          <motion.a
            href="#inquire"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.16 }}
            className="group flex items-center justify-center gap-3 py-5 px-6 rounded-2xl bg-[#B8EAEB] hover:bg-[#A5E3E4] transition-all duration-300 shadow-sm"
          >
            <Building2 className="w-6 h-6 text-white" />
            <span className="font-bold text-sm tracking-wider text-white uppercase">
              ADMISSIONS
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
