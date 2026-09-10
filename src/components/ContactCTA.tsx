import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { IMAGES } from '../data/site'

export default function ContactCTA() {
  return (
    <section id="contact" className="relative w-full py-24 overflow-hidden">
      {/* Background Image: Classroom Blackboard */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.chalkboardBanner}
          alt="Classroom blackboard with mathematical formulas"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark contrast overlay so text and chalk formulas shine */}
        <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[1.5px]" />
      </div>

      {/* Decorative Chalk Mathematical Doodles overlay matching PDF equations */}
      <div className="absolute inset-0 pointer-events-none z-[1] select-none opacity-25">
        <span className="absolute top-8 left-12 font-mono text-xl sm:text-2xl text-white font-light transform -rotate-6">
          A = 4 + w
        </span>
        <span className="absolute top-12 right-16 font-mono text-lg sm:text-xl text-white font-light transform rotate-12">
          f(x) = ax² + bx + c
        </span>
        <span className="absolute bottom-10 left-20 font-mono text-base sm:text-lg text-white font-light">
          E = mc²
        </span>
        <span className="absolute bottom-12 right-24 font-mono text-lg text-white font-light transform -rotate-3">
          ∫ 2x dx = x² + C
        </span>
      </div>

      <div className="container-page relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-xs font-semibold uppercase tracking-widest text-[#82C9C7] bg-[#82C9C7]/15 px-3.5 py-1 rounded-full border border-[#82C9C7]/30 mb-3"
        >
          We Are Here To Guide You
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight max-w-2xl mx-auto"
        >
          Have questions or need assistance?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-normal leading-relaxed"
        >
          Together let’s embark on an exciting journey of education and exploration! Reach out to our academic advisors and admissions counsellors today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          <a
            href="#inquire"
            className="btn-coral shadow-2xl hover:shadow-red-600/40 group font-bold tracking-widest"
          >
            <span>CONTACT US</span>
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
