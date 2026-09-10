import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { MISSION } from '../data/site'
import { EASE_LUX } from '../lib/motion'
import Reveal from './ui/Reveal'

export default function MissionVision() {
  const [active, setActive] = useState(0)

  return (
    <section className="relative bg-midnight py-24 text-ivory-light sm:py-32">
      <div className="grain absolute inset-0" />
      <div className="container-lux relative">
        <div className="mb-14 max-w-2xl">
          <Reveal>
            <p className="eyebrow mb-6 !text-champagne">What Guides Us</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-serif text-4xl font-light leading-tight tracking-tight sm:text-5xl">
              Purpose, made <span className="italic text-champagne">deliberate.</span>
            </h2>
          </Reveal>
        </div>

        {/* Horizontal accordion (desktop) */}
        <div className="hidden gap-3 lg:flex lg:h-[460px]">
          {MISSION.map((m, i) => {
            const isActive = active === i
            return (
              <motion.button
                key={m.n}
                onClick={() => setActive(i)}
                animate={{ flex: isActive ? 6 : 1 }}
                transition={{ duration: 0.8, ease: EASE_LUX }}
                className={`group relative overflow-hidden rounded-sm border text-left transition-colors duration-500 ${
                  isActive ? 'border-champagne/40' : 'border-white/10 hover:border-white/25'
                }`}
              >
                {/* Background image only when active */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.9, ease: EASE_LUX }}
                      className="absolute inset-0"
                    >
                      <img src={m.image} alt="" className="h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/85 to-midnight/50" />
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="relative flex h-full flex-col justify-between p-6">
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-serif text-5xl font-light transition-colors duration-500 ${
                        isActive ? 'text-champagne' : 'text-white/25'
                      }`}
                    >
                      {m.n}
                    </span>
                    {!isActive && (
                      <Plus className="h-5 w-5 text-white/40 transition-colors group-hover:text-champagne" />
                    )}
                  </div>

                  <div>
                    <h3
                      className={`font-serif font-light tracking-tight transition-all duration-500 ${
                        isActive ? 'text-3xl' : 'text-xl [writing-mode:vertical-rl] rotate-180'
                      }`}
                    >
                      {m.title}
                    </h3>
                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, y: 14 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.6, delay: 0.15, ease: EASE_LUX }}
                          className="mt-4 max-w-md leading-relaxed text-ivory-light/85"
                        >
                          {m.text}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.button>
            )
          })}
        </div>

        {/* Vertical accordion (mobile) */}
        <div className="space-y-3 lg:hidden">
          {MISSION.map((m, i) => {
            const isActive = active === i
            return (
              <div key={m.n} className="overflow-hidden rounded-sm border border-white/10">
                <button
                  onClick={() => setActive(isActive ? -1 : i)}
                  className="flex w-full items-center justify-between p-5 text-left"
                >
                  <span className="flex items-center gap-4">
                    <span className={`font-serif text-2xl ${isActive ? 'text-champagne' : 'text-white/30'}`}>
                      {m.n}
                    </span>
                    <span className="font-serif text-xl font-light">{m.title}</span>
                  </span>
                  <Plus
                    className={`h-5 w-5 shrink-0 text-champagne transition-transform duration-500 ${
                      isActive ? 'rotate-45' : ''
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: EASE_LUX }}
                    >
                      <div className="px-5 pb-6">
                        <div className="mb-4 aspect-[16/9] overflow-hidden rounded-sm">
                          <img src={m.image} alt="" className="h-full w-full object-cover" />
                        </div>
                        <p className="leading-relaxed text-ivory-light/80">{m.text}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
