import { ArrowUpRight } from 'lucide-react'
import { DISCOVER } from '../data/site'
import Reveal from './ui/Reveal'

export default function Discover() {
  return (
    <section id="discover" className="bg-ivory py-24 sm:py-32">
      <div className="container-lux">
        <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <p className="eyebrow mb-6">Discover Further</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-serif text-4xl font-light leading-tight tracking-tight text-midnight sm:text-5xl">
                Gallery, news <span className="italic text-champagne-dark">&amp; stories.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <a
              href="#discover"
              className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-midnight"
            >
              <span className="link-underline">View all</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-12">
          {DISCOVER.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.06} className={d.span}>
              <a
                href="#discover"
                data-cursor="hover"
                className="group block overflow-hidden rounded-sm bg-ivory-light"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={d.image}
                    alt={d.title}
                    className="h-full w-full object-cover transition-transform duration-[1.3s] ease-lux group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-ivory-light/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-midnight backdrop-blur">
                    {d.tag}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-4 p-6">
                  <div>
                    <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-mist">
                      {d.date}
                    </p>
                    <h3 className="mt-2 font-serif text-xl font-light leading-snug text-midnight sm:text-2xl">
                      {d.title}
                    </h3>
                  </div>
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-midnight/15 text-midnight transition-all duration-500 group-hover:border-champagne group-hover:bg-champagne">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
