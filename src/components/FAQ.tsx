import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { FAQS } from '../data/site'
import { EASE_LUX } from '../lib/motion'
import Reveal from './ui/Reveal'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-ivory-light py-24 sm:py-32">
      <div className="container-lux grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="eyebrow mb-6">Common Questions</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-serif text-4xl font-light leading-tight tracking-tight text-midnight sm:text-5xl">
              Answers, before you ask.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-sm leading-relaxed text-charcoal/70">
              Still curious? Our admissions team is always happy to talk things
              through in person.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <ul className="border-t border-midnight/15">
            {FAQS.map((f, i) => {
              const isOpen = open === i
              return (
                <li key={f.q} className="border-b border-midnight/15">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-xl font-light text-midnight sm:text-2xl">
                      {f.q}
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                        isOpen ? 'rotate-45 border-champagne bg-champagne text-midnight' : 'border-midnight/25 text-midnight'
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: EASE_LUX }}
                      >
                        <p className="max-w-2xl pb-7 leading-relaxed text-charcoal/75">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
