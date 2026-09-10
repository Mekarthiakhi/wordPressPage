import { motion } from 'framer-motion'
import { MessageSquareQuote } from 'lucide-react'
import { IMAGES } from '../data/site'

export default function Testimonials() {
  return (
    <section className="relative w-full py-16 bg-white">
      <div className="container-page">
        {/* Header with speech bubble icon */}
        <div className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#EBF7F8] text-[#82C9C7] mb-2">
            <MessageSquareQuote size={20} />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-slate-800">
            Testimonials
          </h2>
          <p className="text-xs text-slate-400 mt-1 font-normal">
            Contact Us for More Information
          </p>
        </div>

        {/* Testimonial Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FAFDFD] border border-slate-100 rounded-2xl p-6 sm:p-10 shadow-sm">
          {/* Left: Quote */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Large Cyan Quote mark */}
            <span className="font-serif text-6xl sm:text-7xl leading-none text-[#82C9C7] select-none">
              “
            </span>

            <p className="font-serif italic text-sm sm:text-base text-slate-700 leading-relaxed -mt-4">
              "My child's physical and mental fitness has improved in the last few years! His grades have improved and his concentration power has increased. He also looks happier and more confident now. I thank Yenepoya World for focusing on a holistic development of children."
            </p>

            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#82C9C7]">
              - Anonymous Parent
            </p>
          </motion.div>

          {/* Right: Smiling children photos */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 grid grid-cols-2 gap-3.5"
          >
            <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm bg-slate-100">
              <img
                src={IMAGES.testimonialKids}
                alt="Happy students at school"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm bg-slate-100">
              <img
                src={IMAGES.testimonialGirl}
                alt="Smiling student"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
