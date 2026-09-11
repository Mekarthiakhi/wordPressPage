import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Bell, Mail } from 'lucide-react'
import Logo from './ui/Logo'

const NAV_ITEMS = [
  { label: 'About Us', href: '#about' },
  { label: 'Our Space', href: '#our-space' },
  { label: 'Curriculum', href: '#curriculum' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Contact Us', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140
      for (const item of NAV_ITEMS) {
        const el = document.querySelector(item.href) as HTMLElement | null
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.href.replace('#', ''))
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      window.history.pushState(null, '', href)
    }
  }

  return (
    <header className="sticky top-0 z-[90] w-full bg-white shadow-sm transition-all duration-300">
      {/* Top soft teal bar matching the reference template */}
      <div className="w-full bg-[#82C9C7] py-2 px-4 text-center">
        <div className="container-page flex items-center justify-center sm:justify-between text-white text-[12px] font-medium">
          <span className="hidden sm:inline-flex items-center gap-1.5 opacity-90">
            <Mail size={13} />
            yenopoyaworld@gmail.com
          </span>
          <a
            href="https://yenepoyaworldschool.com"
            target="_blank"
            rel="noreferrer"
            className="tracking-wide transition-opacity hover:opacity-90 underline underline-offset-2 font-semibold"
          >
            yenepoyaworldschool.com
          </a>
          <span className="hidden sm:inline-block text-[11px] font-semibold bg-white/20 px-2 py-0.5 rounded-full">
            Admissions 2025–26 Open
          </span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="container-page flex h-16 items-center justify-between">
        <Logo tone="dark" compact={false} />

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-7">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace('#', '')
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`relative text-[13.5px] font-medium transition-all duration-200 py-1 ${
                  isActive
                    ? 'text-[#4A9C9A] font-semibold'
                    : 'text-slate-700 hover:text-[#5AA3A1]'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#82C9C7] rounded-full"
                  />
                )}
              </a>
            )
          })}

          {/* Quick Notification Message Pill Button */}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0f766e] bg-[#D2F2F4] hover:bg-[#bbf0f2] px-3.5 py-1.5 rounded-full border border-[#82C9C7]/40 transition-all shadow-xs hover:shadow-sm"
          >
            <Bell size={13} className="text-[#0f766e]" />
            <span>Inquire &amp; Message</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-slate-700 hover:text-[#82C9C7] rounded-lg focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-slate-100 bg-white md:hidden overflow-hidden shadow-lg"
          >
            <div className="px-6 py-4 space-y-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="block text-sm font-medium text-slate-700 py-2 border-b border-slate-50 hover:text-[#5AA3A1] active:text-[#4A9C9A]"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="w-full text-center block rounded-xl bg-gradient-to-r from-[#82C9C7] to-[#5AA3A1] text-white py-2.5 text-xs font-bold uppercase tracking-wider shadow-sm"
                >
                  Send Inquiry / Notification
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
