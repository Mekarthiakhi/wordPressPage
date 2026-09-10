import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Logo from './ui/Logo'

const NAV_ITEMS = [
  { label: 'About Us', href: '#about' },
  { label: 'Our Space', href: '#our-space' },
  { label: 'Curriculum', href: '#curriculum' },
  { label: 'Admissions', href: '#inquire' },
  { label: 'Contact Us', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-[90] w-full bg-white shadow-sm">
      {/* Top soft teal bar matching the PDF */}
      <div className="w-full bg-[#82C9C7] py-1.5 text-center">
        <a
          href="https://yenepoyaworldschool.com"
          target="_blank"
          rel="noreferrer"
          className="text-[12px] font-medium tracking-wide text-white transition-opacity hover:opacity-90"
        >
          yenepoyaworldschool.com
        </a>
      </div>

      {/* Main Navigation Bar */}
      <nav className="container-page flex h-16 items-center justify-between">
        <Logo tone="dark" compact={false} />

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[13.5px] font-medium text-slate-700 transition-colors duration-200 hover:text-[#5AA3A1]"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="p-2 text-slate-700 md:hidden hover:text-[#82C9C7]"
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-slate-100 bg-white md:hidden"
          >
            <div className="px-6 py-4 space-y-3">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-medium text-slate-700 py-1.5 hover:text-[#5AA3A1]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
