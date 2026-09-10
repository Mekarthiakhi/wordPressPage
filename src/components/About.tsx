import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { IMAGES } from '../data/site'
import Reveal from './ui/Reveal'

const facts = [
  { k: 'Founded', v: '1954' },
  { k: 'Campus', v: '80 Acres' },
  { k: 'Faculty', v: '934' },
  { k: 'Accreditation', v: 'Global' },
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section id="about" className="relative bg-ivory py-24 sm:py-32 lg:py-40">
      <div className="container-lux grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
        {/* Left — heading */}
        <div className="lg:col-span-6 lg:pr-10">
          <Reveal>
            <p className="eyebrow mb-8">The Institution</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-serif text-[9vw] font-light leading-[0.98] tracking-[-0.02em] text-midnight sm:text-6xl lg:text-[4.4vw]">
              An Education<br />
              Beyond <span className="italic text-champagne-dark">Boundaries.</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 sm:max-w-md">
            {facts.map((f, i) => (
              <Reveal key={f.k} delay={0.1 + i * 0.06}>
                <div className="border-t border-midnight/15 pt-4">
                  <p className="font-serif text-3xl text-midnight">{f.v}</p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-mist">
                    {f.k}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Right — copy + image */}
        <div className="lg:col-span-6 lg:pl-6">
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-charcoal/85">
              For seven decades, The Yenepoya World has cultivated an environment
              where rigorous scholarship meets genuine human character. Our
              students learn not only to excel, but to lead — with curiosity,
              integrity and a global perspective.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 leading-relaxed text-charcoal/70">
              From research laboratories to the library’s quiet corners, every
              space is designed to nurture the next generation of thinkers,
              makers and changemakers.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <a
              href="#education"
              className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-midnight"
            >
              <span className="link-underline">Discover Our Story</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-midnight/20 transition-all duration-500 group-hover:border-champagne group-hover:bg-champagne">
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5" />
              </span>
            </a>
          </Reveal>

          <div ref={ref} className="relative mt-14 aspect-[4/3] overflow-hidden rounded-sm">
            <motion.img
              src={IMAGES.collaboration}
              alt="Students collaborating in a modern learning space"
              style={{ y, scale: 1.12 }}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-midnight/10" />
          </div>
        </div>
      </div>
    </section>
  )
}
