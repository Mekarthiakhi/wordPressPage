import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FlaskConical, Lightbulb, Compass, Globe2 } from 'lucide-react'
import { IMAGES } from '../data/site'
import Reveal from './ui/Reveal'

const pillars = [
  { icon: FlaskConical, label: 'Research' },
  { icon: Lightbulb, label: 'Innovation' },
  { icon: Compass, label: 'Experiential Learning' },
  { icon: Globe2, label: 'Global Exposure' },
]

export default function EducationHighlight() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])

  return (
    <section id="education" ref={ref} className="relative overflow-hidden bg-ivory py-24 sm:py-32">
      <div className="container-lux">
        <div className="relative">
          {/* Large image */}
          <div className="relative aspect-[16/10] overflow-hidden rounded-sm sm:aspect-[16/8]">
            <motion.img
              src={IMAGES.lab}
              alt="Students at work in a research laboratory"
              style={{ y: imgY, scale: 1.2 }}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-midnight/10 to-transparent" />
          </div>

          {/* Floating content panel */}
          <Reveal delay={0.1}>
            <div className="relative z-10 mx-auto -mt-24 w-full max-w-3xl bg-ivory-light p-8 shadow-[0_30px_80px_-30px_rgba(11,27,51,0.4)] sm:-mt-32 sm:p-12 lg:-mt-40">
              <p className="eyebrow mb-6">Beyond the Classroom</p>
              <h2 className="font-serif text-3xl font-light leading-tight tracking-tight text-midnight sm:text-[2.9rem]">
                Education that goes beyond the classroom.
              </h2>
              <p className="mt-6 max-w-xl leading-relaxed text-charcoal/75">
                Learning here extends far past the lecture hall — into laboratories,
                field research, industry partnerships and campuses across the world.
                We prepare students for problems that don’t yet have answers.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
                {pillars.map((p, i) => (
                  <Reveal key={p.label} delay={0.15 + i * 0.06}>
                    <div className="group flex flex-col gap-3 border-t border-midnight/15 pt-4">
                      <p.icon className="h-6 w-6 text-champagne-dark transition-transform duration-500 group-hover:-translate-y-0.5" />
                      <span className="text-[13px] font-medium text-midnight">{p.label}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
