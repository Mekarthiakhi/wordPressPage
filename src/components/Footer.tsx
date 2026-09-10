import { Facebook, Instagram, Youtube, Linkedin, ArrowUpRight } from 'lucide-react'
import { FOOTER_LINKS, SOCIALS, CONTACT } from '../data/site'
import Logo from './ui/Logo'
import Reveal from './ui/Reveal'

const socialIcons: Record<string, typeof Instagram> = {
  Instagram,
  Facebook,
  LinkedIn: Linkedin,
  YouTube: Youtube,
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-midnight-950 text-ivory-light">
      <div className="grain absolute inset-0" />

      {/* Oversized brand statement */}
      <div className="container-lux relative border-b border-white/10 py-20 sm:py-28">
        <Reveal>
          <p className="eyebrow mb-8 !text-champagne">The Yenepoya World</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-serif text-[11vw] font-light leading-[0.92] tracking-[-0.02em] text-ivory-light/95 lg:text-[7vw]">
            Shaping minds,<br />
            <span className="italic text-champagne">shaping the world.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <a
            href="#enquiry"
            className="group mt-12 inline-flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.14em] text-ivory-light"
          >
            <span className="link-underline">Get in touch</span>
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 transition-all duration-500 group-hover:border-champagne group-hover:bg-champagne group-hover:text-midnight">
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </a>
        </Reveal>
      </div>

      {/* Link columns */}
      <div className="container-lux relative grid grid-cols-2 gap-10 py-16 sm:grid-cols-3 lg:grid-cols-6">
        <div className="col-span-2 lg:col-span-2">
          <Logo tone="light" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-ivory-light/60">
            A dedicated community of educators committed to a supportive,
            stimulating environment where every learner can flourish.
          </p>
          <div className="mt-8 flex gap-3">
            {SOCIALS.map(({ href, label }) => {
              const Icon = socialIcons[label]
              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-ivory-light/70 transition-all duration-500 hover:border-champagne hover:bg-champagne hover:text-midnight"
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>
        </div>

        {Object.entries(FOOTER_LINKS).map(([title, links]) => (
          <div key={title}>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-champagne">
              {title}
            </h3>
            <ul className="mt-5 space-y-3">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="link-underline text-sm text-ivory-light/65 transition-colors duration-300 hover:text-ivory-light"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Contact strip */}
      <div className="container-lux relative grid grid-cols-1 gap-6 border-t border-white/10 py-10 text-sm text-ivory-light/60 sm:grid-cols-3">
        <p>{CONTACT.address}</p>
        <p className="sm:text-center">
          <a href={CONTACT.phoneHref} className="link-underline transition-colors hover:text-ivory-light">
            {CONTACT.phone}
          </a>
        </p>
        <p className="sm:text-right">
          <a href={CONTACT.emailHref} className="link-underline transition-colors hover:text-ivory-light">
            {CONTACT.email}
          </a>
        </p>
      </div>

      {/* Bottom bar */}
      <div className="container-lux relative flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-xs text-ivory-light/45 sm:flex-row">
        <p>© 2026 The Yenepoya World. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#enquiry" className="transition-colors hover:text-ivory-light">Privacy Policy</a>
          <a href="#enquiry" className="transition-colors hover:text-ivory-light">Terms of Use</a>
          <a href="#top" className="transition-colors hover:text-ivory-light">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}
