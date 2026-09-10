import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { IMAGES } from '../data/site'
import MagneticButton from './ui/MagneticButton'
import Reveal from './ui/Reveal'

export default function ContactCTA() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])

  return (
    <section ref={ref} className="relative flex min-h-[70vh] items-center overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y, scale: 1.2 }}>
        <img
          src={IMAGES.graduation}
          alt="Graduates celebrating on campus"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-midnight/70" />
      <div className="grain absolute inset-0" />

      <div className="container-lux relative py-28 text-center">
        <Reveal>
          <p className="eyebrow mx-auto mb-8 justify-center !text-champagne-light before:hidden">
            Your Future Starts Here
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mx-auto max-w-4xl text-balance font-serif text-[11vw] font-light leading-[0.98] tracking-[-0.02em] text-ivory-light sm:text-6xl lg:text-[5vw]">
            The next chapter of your story <span className="italic text-champagne">begins on our campus.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MagneticButton href="#enquiry" className="btn-primary group hover:bg-champagne-light">
              Talk to Admissions
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </MagneticButton>
            <MagneticButton href="#enquiry" className="btn-ghost" strength={0.25}>
              Send an Enquiry
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
