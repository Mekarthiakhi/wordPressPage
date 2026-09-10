import { STATS } from '../data/site'
import AnimatedCounter from './ui/AnimatedCounter'
import Reveal from './ui/Reveal'

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-midnight py-24 text-ivory-light sm:py-28">
      <div className="grain absolute inset-0" />
      <div className="container-lux relative">
        <div className="mb-16 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <p className="eyebrow mb-5 !text-champagne">At a Glance</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="max-w-xl font-serif text-4xl font-light leading-tight tracking-tight sm:text-5xl">
                A legacy measured in <span className="italic text-champagne">people.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-xs text-sm leading-relaxed text-ivory-light/60">
              Numbers only tell part of the story — but they hint at the scale of
              the community you’re about to join.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="bg-midnight">
              <div className="group flex h-full flex-col justify-between p-8 transition-colors duration-500 hover:bg-white/[0.03] sm:p-10">
                <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-champagne/70">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="mt-16">
                  <p className="font-serif text-[13vw] font-light leading-none tracking-tight sm:text-6xl lg:text-[4vw]">
                    <AnimatedCounter to={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-3 text-sm text-ivory-light/70">{s.label}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
