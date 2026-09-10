import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import Logo from './ui/Logo'
import { NAV_LINKS } from '../data/site'
import { EASE_LUX } from '../lib/motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active-section tracking
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace('#', ''))
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive('#' + e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  // Dark (solid bg + dark text) only when scrolled AND the mobile menu is closed.
  // While the menu is open, keep the header transparent with light content so the
  // logo and the close (X) button stay legible over the dark overlay.
  const dark = scrolled && !open

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE_LUX, delay: 0.2 }}
        className={`fixed inset-x-0 top-0 z-[90] transition-all duration-500 ${
          dark
            ? 'border-b border-midnight/10 bg-ivory-light/85 backdrop-blur-xl'
            : 'border-b border-white/10 bg-transparent'
        }`}
      >
        <nav
          className={`container-lux flex items-center justify-between transition-all duration-500 ${
            scrolled ? 'py-3.5' : 'py-5'
          }`}
        >
          <Logo tone={dark ? 'dark' : 'light'} compact />

          <div className="hidden items-center gap-5 lg:flex xl:gap-8">
            <ul className="flex items-center gap-4 xl:gap-7">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={`link-underline whitespace-nowrap text-[13px] font-medium tracking-wide transition-colors duration-300 ${
                      dark ? 'text-charcoal' : 'text-white/90'
                    } ${active === l.href ? 'after:w-full' : ''}`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#enquiry"
              className={`btn-primary group whitespace-nowrap px-5 py-3 text-[12px] xl:px-8 xl:py-3.5 xl:text-[13px] hover:bg-champagne-dark ${
                !dark ? 'shadow-lg shadow-black/20' : ''
              }`}
            >
              Apply Now
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            className={`relative z-[80] flex h-11 w-11 items-center justify-center rounded-full border transition-colors lg:hidden ${
              dark ? 'border-midnight/20 text-midnight' : 'border-white/40 text-white'
            }`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[70] flex flex-col bg-midnight text-ivory-light lg:hidden"
          >
            <div className="grain absolute inset-0" />
            <div className="container-lux flex flex-1 flex-col justify-center pt-24">
              <p className="eyebrow mb-8 text-champagne">Menu</p>
              <ul className="space-y-1">
                {NAV_LINKS.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, ease: EASE_LUX, duration: 0.6 }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-white/10 py-4 font-serif text-4xl font-light tracking-tight transition-colors hover:text-champagne"
                    >
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href="#enquiry"
                onClick={() => setOpen(false)}
                className="btn-primary mt-10 w-full hover:bg-champagne-dark"
              >
                Apply Now <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
