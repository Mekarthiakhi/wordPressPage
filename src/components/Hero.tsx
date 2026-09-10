import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { IMAGES } from '../data/site'
import { EASE_LUX } from '../lib/motion'
import MagneticButton from './ui/MagneticButton'

const words = ['Where', 'Learning', 'Shapes']
const words2 = ['Exceptional', 'Futures.']

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.22])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4])

  return (
    <section id="top" ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y: imgY, scale: imgScale }}>
        <img
          src={IMAGES.heroCampus}
          alt="Students crossing the campus quad at dusk"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-midnight/70 via-midnight/50 to-midnight/85"
        style={{ opacity: overlayOpacity }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-midnight/60 to-transparent" />
      <div className="grain absolute inset-0" />

      {/* Content */}
      <motion.div
        style={{ y: contentY }}
        className="container-lux relative flex h-full flex-col justify-center pt-20"
      >
        <motion.p
          className="eyebrow mb-6 !text-champagne-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: EASE_LUX }}
        >
          Established 1954 · A Global Institution
        </motion.p>

        <h1 className="max-w-[15ch] font-serif text-[13vw] font-light leading-[0.92] tracking-[-0.02em] text-ivory-light sm:text-[10vw] lg:text-[6.4vw]">
          <span className="block overflow-hidden">
            <span className="flex flex-wrap gap-x-[0.28em]">
              {words.map((w, i) => (
                <motion.span
                  key={w}
                  className="inline-block"
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.35 + i * 0.09, duration: 1, ease: EASE_LUX }}
                >
                  {w}
                </motion.span>
              ))}
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="flex flex-wrap gap-x-[0.28em] italic text-champagne">
              {words2.map((w, i) => (
                <motion.span
                  key={w}
                  className="inline-block"
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.6 + i * 0.09, duration: 1, ease: EASE_LUX }}
                >
                  {w}
                </motion.span>
              ))}
            </span>
          </span>
        </h1>

        <motion.p
          className="mt-8 max-w-xl text-balance text-base leading-relaxed text-ivory-light/80 sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.8, ease: EASE_LUX }}
        >
          A supportive, globally connected environment that fosters academic
          excellence, character and a lifelong love of learning.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.8, ease: EASE_LUX }}
        >
          <MagneticButton
            href="#about"
            className="btn-primary group hover:bg-champagne-light"
          >
            Explore Our World
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </MagneticButton>
          <MagneticButton href="#enquiry" className="btn-ghost" strength={0.25}>
            Apply Now
          </MagneticButton>
        </motion.div>

        {/* Location indicator — inside the parallax layer so it never collides */}
        <motion.div
          className="mt-12 flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.18em] text-ivory-light/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          <MapPin className="h-4 w-4 text-champagne" />
          Mangaluru · India
        </motion.div>
      </motion.div>

      {/* Scroll hint — bottom-right, clear of the left-aligned content */}
      <motion.div
        className="pointer-events-none absolute bottom-8 right-6 z-10 hidden flex-col items-center gap-2 sm:right-8 md:flex lg:right-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-ivory-light/60">Scroll</span>
        <span className="relative flex h-10 w-[1px] bg-white/20">
          <span className="animate-scroll-hint absolute left-0 top-0 h-3 w-full bg-champagne" />
        </span>
      </motion.div>
    </section>
  )
}
