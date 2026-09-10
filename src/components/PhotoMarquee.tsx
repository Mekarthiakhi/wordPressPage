import { MARQUEE_TOP, MARQUEE_BOTTOM } from '../data/site'
import Reveal from './ui/Reveal'

function Row({ images, reverse }: { images: string[]; reverse?: boolean }) {
  // Duplicate the set so the -50% translate loops seamlessly.
  const loop = [...images, ...images]
  return (
    <div className="marquee-group relative overflow-hidden">
      <div className={`marquee-track gap-4 sm:gap-5 ${reverse ? 'reverse' : ''}`}>
        {loop.map((src, i) => (
          <figure
            key={i}
            className="group relative h-52 w-72 shrink-0 overflow-hidden rounded-sm sm:h-64 sm:w-96"
          >
            <img
              src={src}
              alt="Student life at The Yenepoya World"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1.2s] ease-lux group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-midnight/10 transition-colors duration-500 group-hover:bg-transparent" />
          </figure>
        ))}
      </div>
    </div>
  )
}

export default function PhotoMarquee() {
  return (
    <section className="relative overflow-hidden bg-midnight py-24 text-ivory-light sm:py-28">
      <div className="grain absolute inset-0" />
      <div className="container-lux relative mb-12">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <p className="eyebrow mb-5 !text-champagne">Life in Motion</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="max-w-xl font-serif text-4xl font-light leading-tight tracking-tight sm:text-5xl">
                A campus that never <span className="italic text-champagne">stands still.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-xs text-sm leading-relaxed text-ivory-light/60">
              Every day brings something new — hover to pause and take a closer look
              at life across our campus.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="relative space-y-4 sm:space-y-5">
        <Row images={MARQUEE_TOP} />
        <Row images={MARQUEE_BOTTOM} reverse />

        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-midnight to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-midnight to-transparent sm:w-32" />
      </div>
    </section>
  )
}
