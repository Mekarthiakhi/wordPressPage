import { motion } from 'framer-motion'
import { IMAGES } from '../data/site'

export default function ContactCTA() {
  return (
    <section id="contact" className="relative w-full py-20 overflow-hidden">
      {/* Background Image: Classroom Blackboard */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.chalkboardBanner}
          alt="Classroom blackboard with equations"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay so text and coral button pop with high contrast */}
        <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-[1px]" />
      </div>

      <div className="container-page relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-2xl sm:text-3xl md:text-4xl text-white tracking-tight"
        >
          Have questions or need assistance?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-light"
        >
          Together let’s embark on an exciting journey of education and exploration!
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
            className="btn-coral shadow-lg hover:shadow-red-500/30 font-bold"
          >
            CONTACT US
          </a>
        </motion.div>
      </div>
    </section>
  )
}
