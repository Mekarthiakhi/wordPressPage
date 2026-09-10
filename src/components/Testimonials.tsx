import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'
import { TESTIMONIALS } from '../data/site'
import { EASE_LUX } from '../lib/motion'
import Reveal from './ui/Reveal'

export default function Testimonials() {
  const [[index, dir], setIndex] = useState<[number, number]>([0, 0])
  const t = TESTIMONIALS[index]

  const paginate = (d: number) =>
    setIndex(([i]) => {
      const next = (i + d + TESTIMONIALS.length) % TESTIMONIALS.length
      return [next, d]
    })

  return (
    <section id="testimonials" className="overflow-hidden bg-ivory-light py-24 sm:py-32">
      <div className="container-lux">
        <Reveal>
          <p className="eyebrow mb-12">In Their Words</p>
        </Reveal>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Photo */}
          <div className="lg:col-span-4">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-sm lg:max-w-none">
              <AnimatePresence mode="wait">
                <motion.img
                  key={t.image}
                  src={t.image}
                  alt={t.name}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: EASE_LUX }}
                  className="h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 ring-1 ring-inset ring-midnight/10" />
            </div>
          </div>

          {/* Quote */}
          <div className="lg:col-span-8">
            <Quote className="h-12 w-12 text-champagne" fill="currentColor" />
            <div className="relative grid min-h-[180px]">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.blockquote
                  key={index}
                  custom={dir}
                  initial={{ opacity: 0, x: dir >= 0 ? 40 : -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: dir >= 0 ? -40 : 40 }}
                  transition={{ duration: 0.6, ease: EASE_LUX }}
                  className="col-start-1 row-start-1"
                >
                  <p className="font-serif text-2xl font-light leading-snug tracking-tight text-midnight sm:text-[2rem]">
                    “{t.quote}”
                  </p>
                  <footer className="mt-8">
                    <p className="text-lg font-medium text-midnight">{t.name}</p>
                    <p className="text-sm uppercase tracking-[0.14em] text-mist">{t.role}</p>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <button
                onClick={() => paginate(-1)}
                aria-label="Previous testimonial"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-midnight/20 text-midnight transition-all duration-500 hover:border-champagne hover:bg-champagne"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => paginate(1)}
                aria-label="Next testimonial"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-midnight/20 text-midnight transition-all duration-500 hover:border-champagne hover:bg-champagne"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
              <div className="ml-2 flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      i === index ? 'w-8 bg-champagne' : 'w-1.5 bg-midnight/20'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
