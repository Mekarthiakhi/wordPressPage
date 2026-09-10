import { ArrowRight } from 'lucide-react'
import { PANELS } from '../data/site'
import Reveal from './ui/Reveal'

export default function AcademicCards() {
  return (
    <section id="academics" className="bg-ivory py-24 sm:py-32">
      <div className="container-lux">
        <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <h2 className="font-serif text-4xl font-light leading-tight tracking-tight text-midnight sm:text-5xl">
              Three ways to <span className="italic text-champagne-dark">begin.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-sm text-sm leading-relaxed text-charcoal/70">
              Whichever path brings you here, it starts with a single step toward a
              community built for ambition.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
          {PANELS.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <a
                href={`#${p.id === 'academics' ? 'skills' : p.id === 'students' ? 'community' : 'enquiry'}`}
                id={p.id === 'admissions' ? 'admissions' : undefined}
                data-cursor="hover"
                className="group relative block aspect-[3/4] overflow-hidden rounded-sm"
              >
                <img
                  src={p.image}
                  alt={p.kicker}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.3s] ease-lux group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/30 to-midnight/10 transition-opacity duration-500 group-hover:from-midnight/95" />

                <div className="relative flex h-full flex-col justify-between p-7">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-champagne-light">
                    {p.kicker}
                  </span>
                  <div>
                    <h3 className="font-serif text-3xl font-light text-ivory-light">{p.title}</h3>
                    <p className="mt-3 max-w-[24ch] text-sm leading-relaxed text-ivory-light/70">
                      {p.desc}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.12em] text-ivory-light">
                      Explore
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 transition-all duration-500 group-hover:border-champagne group-hover:bg-champagne group-hover:text-midnight">
                        <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5" />
                      </span>
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
