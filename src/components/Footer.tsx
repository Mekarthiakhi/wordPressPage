import { ArrowRight } from 'lucide-react'
import Logo from './ui/Logo'
import { FOOTER_COLUMNS } from '../data/site'

function FacebookIcon() {
  return (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

function YoutubeIcon() {
  return (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="relative w-full bg-white">
      {/* 1. Centered School Logo Emblem */}
      <div className="py-10 flex flex-col items-center justify-center border-t border-slate-100">
        <Logo tone="dark" compact={false} centered={true} />
      </div>

      {/* 2. Soft Cyan Banner with CONTACT US pill button */}
      <div className="w-full bg-gradient-to-r from-[#7DC8C6] via-[#8FD5D3] to-[#71C1BF] py-14 px-6 text-center text-white relative overflow-hidden shadow-inner">
        {/* Background ambient lighting */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-white/15 blur-3xl pointer-events-none" />

        <div className="max-w-xl mx-auto relative z-10">
          <h3 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight">
            The Yenepoya World
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-white/95 font-light leading-relaxed">
            Where academic excellence meets holistic values and global futures.
          </p>

          <div className="mt-8">
            <a
              href="#contact"
              className="btn-white-pill group shadow-lg"
            >
              <span>CONTACT US</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      {/* 3. Link Columns & Socials */}
      <div className="container-page py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* 3 Link Columns */}
          <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#82C9C7]" />
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-xs text-slate-500 hover:text-[#5AA3A1] transition-colors flex items-center gap-1.5 group"
                      >
                        <span className="text-slate-300 group-hover:text-[#82C9C7] transition-colors">›</span>
                        <span>{link.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social Media Icons */}
          <div className="md:col-span-3 flex flex-col md:items-end gap-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#82C9C7]" />
              Connect With Us
            </h4>

            <div className="flex items-center gap-3 text-slate-600">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center hover:text-white hover:bg-[#82C9C7] hover:border-[#82C9C7] shadow-xs transition-all duration-300 hover:scale-105"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center hover:text-white hover:bg-[#82C9C7] hover:border-[#82C9C7] shadow-xs transition-all duration-300 hover:scale-105"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center hover:text-white hover:bg-[#82C9C7] hover:border-[#82C9C7] shadow-xs transition-all duration-300 hover:scale-105"
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>
        </div>

        {/* 4. Bottom Copyright */}
        <div className="mt-12 pt-6 border-t border-slate-100 text-center">
          <p className="text-[11px] text-slate-400">
            Copyright © 2024 The Yenepoya World. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
