import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { IMAGES } from '../data/site'

// Hand-drawn double speech bubbles doodle matching the PDF
function SpeechBubbleDoodle() {
  return (
    <svg className="w-10 h-10 text-[#82C9C7]" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M6 18H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 28V24H27a3 3 0 0 0 3-3V13a3 3 0 0 0-3-3H13a3 3 0 0 0-3 3v11l-3 4z" fill="#EBF7F8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Testimonials() {
  return (
    <section className="relative w-full py-20 bg-white overflow-hidden">
      <div className="container-page">
        {/* Header with speech bubble icon */}
        <div className="mb-12 text-center sm:text-left flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#EBF7F8] flex items-center justify-center text-[#82C9C7] border border-[#82C9C7]/30 shadow-xs">
            <SpeechBubbleDoodle />
          </div>
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-800 tracking-tight">
              Testimonials
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 font-normal">
              Contact Us for More Information
            </p>
          </div>
        </div>

        {/* Testimonial Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-br from-[#FAFEFE] via-[#F3FAFA] to-white border border-slate-200/80 rounded-3xl p-7 sm:p-12 shadow-md relative overflow-hidden">
          {/* Subtle watermark quote icon in background */}
          <span className="absolute -top-10 -right-5 font-serif text-[180px] leading-none text-[#82C9C7]/5 select-none pointer-events-none">
            “
          </span>

          {/* Left: Parent Quote */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-center relative z-10"
          >
            {/* 5 Stars Rating */}
            <div className="flex items-center gap-1 text-amber-400 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
              <span className="text-[11px] font-bold text-slate-500 ml-2">5.0 Star Parent Review</span>
            </div>

            {/* Large Cyan Quote mark */}
            <span className="font-serif text-6xl sm:text-7xl leading-none text-[#82C9C7] select-none">
              “
            </span>

            <p className="font-serif italic text-base sm:text-lg text-slate-700 leading-relaxed -mt-3">
              "My child's physical and mental fitness has improved in the last few years! His grades have improved and his concentration power has increased. He also looks happier and more confident now. I thank Yenepoya World for focusing on a holistic development of children."
            </p>

            <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  Anonymous Parent
                </p>
                <p className="text-xs text-[#5AA3A1] font-medium">
                  Parent of Middle School Student
                </p>
              </div>

              <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#82C9C7]/15 text-teal-800 border border-[#82C9C7]/30">
                Verified Parent
              </span>
            </div>
          </motion.div>

          {/* Right: Smiling children photos */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 grid grid-cols-2 gap-4 relative z-10"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-md bg-slate-100 transform -rotate-1 hover:rotate-0 transition-transform duration-300 border-2 border-white">
              <img
                src={IMAGES.testimonialKids}
                alt="Happy students smiling together"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-md bg-slate-100 transform rotate-1 hover:rotate-0 transition-transform duration-300 border-2 border-white">
              <img
                src={IMAGES.testimonialGirl}
                alt="Smiling student laughing in class"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
