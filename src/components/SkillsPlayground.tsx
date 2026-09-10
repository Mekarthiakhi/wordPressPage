import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SKILLS } from '../data/site'
import { EASE_LUX } from '../lib/motion'
import Reveal from './ui/Reveal'

export default function SkillsPlayground() {
  const [active, setActive] = useState(0)
  const item = SKILLS[active]

  return (
    <section id="skills" className="relative overflow-hidden bg-ivory py-24 sm:py-32">
      <div className="container-lux">
        <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="eyebrow mb-6">Skills &amp; the Playground</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-serif text-[9vw] font-light leading-[0.98] tracking-[-0.02em] text-midnight sm:text-6xl lg:text-[4.2vw]">
                Where talent finds its <span className="italic text-champagne-dark">playground.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-4">
            <Reveal delay={0.1}>
              <p className="leading-relaxed text-charcoal/75">
                Real growth happens beyond the desk — on the field, the stage and in
                the lab. Explore how students build skills for life.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-6">
          {/* Tabs */}
          <div className="lg:col-span-5">
            <ul className="flex flex-col">
              {SKILLS.map((s, i) => {
                const on = active === i
                return (
                  <li key={s.id}>
                    <button
                      onClick={() => setActive(i)}
                      onMouseEnter={() => setActive(i)}
                      data-cursor="hover"
                      className={`group flex w-full items-center justify-between gap-4 border-t border-midnight/15 py-6 text-left transition-colors duration-500 ${
                        on ? '' : 'opacity-55 hover:opacity-100'
                      }`}
                    >
                      <span className="flex items-baseline gap-4">
                        <span
                          className={`font-serif text-lg transition-colors duration-500 ${
                            on ? 'text-champagne-dark' : 'text-mist'
                          }`}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="font-serif text-2xl font-light tracking-tight text-midnight sm:text-[1.8rem]">
                          {s.tab}
                        </span>
                      </span>
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                          on
                            ? 'border-champagne bg-champagne text-midnight'
                            : 'border-midnight/20 text-midnight group-hover:border-champagne'
                        }`}
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </button>
                  </li>
                )
              })}
              <li className="border-t border-midnight/15" />
            </ul>
          </div>

          {/* Showcase panel */}
          <div className="lg:col-span-7">
            <div className="relative h-full min-h-[440px] overflow-hidden rounded-sm bg-midnight">
              <AnimatePresence mode="wait">
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: EASE_LUX }}
                  className="absolute inset-0"
                >
                  <img src={item.image} alt={item.tab} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/60 to-midnight/10" />
                </motion.div>
              </AnimatePresence>

              <div className="relative flex h-full flex-col justify-between p-8 sm:p-10">
                <div className="flex items-start gap-4">
                  <span className="font-serif text-6xl font-light leading-none text-champagne sm:text-7xl">
                    {item.stat}
                  </span>
                  <span className="mt-2 max-w-[8rem] text-[11px] font-medium uppercase tracking-[0.18em] text-ivory-light/70">
                    {item.statLabel}
                  </span>
                </div>

                <div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease: EASE_LUX }}
                    >
                      <h3 className="max-w-md font-serif text-3xl font-light leading-tight text-ivory-light">
                        {item.title}
                      </h3>
                      <p className="mt-4 max-w-lg leading-relaxed text-ivory-light/75">
                        {item.desc}
                      </p>
                      <ul className="mt-6 flex flex-wrap gap-2">
                        {item.tags.map((t) => (
                          <li
                            key={t}
                            className="rounded-full border border-white/20 px-4 py-1.5 text-[12px] font-medium text-ivory-light/85"
                          >
                            {t}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
