import { ArrowUpRight } from 'lucide-react'
import { IMAGES } from '../data/site'
import Reveal from './ui/Reveal'

const tags = ['Clubs & Societies', 'Cultural Activities', 'Sport', 'Leadership', 'Events', 'Volunteering']

export default function Community() {
  return (
    <section id="community" className="relative bg-ivory-light py-24 sm:py-32 lg:py-40">
      <div className="container-lux">
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow mb-6">Student Life</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-serif text-[9vw] font-light leading-[0.98] tracking-[-0.02em] text-midnight sm:text-6xl lg:text-[4.2vw]">
                Enriching <span className="italic text-champagne-dark">communities.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <p className="leading-relaxed text-charcoal/75">
                Beyond academics, life at The Yenepoya World is defined by the people
                you meet and the things you build together — a culture of belonging
                that shapes character as much as intellect.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Asymmetric editorial grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-12 sm:gap-5">
          <Reveal className="sm:col-span-7">
            <figure className="group relative aspect-[16/11] overflow-hidden rounded-sm">
              <img
                src={IMAGES.studentsWalking}
                alt="Students walking together across campus"
                className="h-full w-full object-cover transition-transform duration-[1.2s] ease-lux group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/10 to-transparent" />
              <figcaption className="absolute bottom-0 left-0 p-7">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-champagne-light">
                  Belonging
                </p>
                <h3 className="mt-2 font-serif text-2xl font-light text-ivory-light sm:text-3xl">
                  A community without borders
                </h3>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.08} className="sm:col-span-5">
            <figure className="group relative aspect-[16/11] overflow-hidden rounded-sm">
              <img
                src={IMAGES.studioWork}
                alt="Students in a creative studio session"
                className="h-full w-full object-cover transition-transform duration-[1.2s] ease-lux group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/10 to-transparent" />
              <figcaption className="absolute bottom-0 left-0 p-7">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-champagne-light">
                  Creativity
                </p>
                <h3 className="mt-2 font-serif text-2xl font-light text-ivory-light sm:text-3xl">
                  Where ideas take shape
                </h3>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.06} className="sm:col-span-5">
            <div className="flex h-full flex-col justify-between rounded-sm bg-midnight p-8">
              <p className="font-serif text-2xl font-light leading-snug text-ivory-light">
                Six pillars of a life well lived on campus.
              </p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-white/15 px-4 py-2 text-[12px] font-medium text-ivory-light/80"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="sm:col-span-7">
            <figure className="group relative aspect-[16/9] overflow-hidden rounded-sm sm:aspect-auto sm:h-full">
              <img
                src={IMAGES.quad}
                alt="A large gathering during a campus event"
                className="h-full w-full object-cover transition-transform duration-[1.2s] ease-lux group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 to-transparent" />
              <a
                href="#discover"
                className="absolute bottom-0 left-0 flex items-center gap-3 p-7 text-ivory-light"
              >
                <span className="text-sm font-semibold uppercase tracking-[0.14em]">
                  Explore campus events
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-champagne text-midnight transition-transform duration-500 group-hover:translate-x-1">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
