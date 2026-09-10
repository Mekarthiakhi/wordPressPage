import { motion } from 'framer-motion'
import { IMAGES } from '../data/site'

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

export default function Hero() {
  const thumbnails = [
    IMAGES.thumb1,
    IMAGES.thumb2,
    IMAGES.thumb3,
    IMAGES.thumb4,
    IMAGES.thumb5,
    IMAGES.thumb6,
    IMAGES.thumb7,
    IMAGES.thumb8,
  ]

  return (
    <section className="relative w-full bg-white pt-6 pb-12 overflow-hidden">
      <div className="container-page">
        {/* 1. Top 3-Photo Collage with subtle elevation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-xl shadow-md aspect-[4/3] bg-slate-100 border border-slate-100"
          >
            <img
              src={IMAGES.heroMaskBoy}
              alt="Student focused on study materials"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />
            <span className="absolute bottom-3 left-3 text-[11px] font-semibold text-white/90 bg-black/40 backdrop-blur-sm px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Student Focus
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative overflow-hidden rounded-xl shadow-md aspect-[4/3] bg-slate-100 border border-slate-100"
          >
            <img
              src={IMAGES.heroClassroom}
              alt="Bright modern classroom"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />
            <span className="absolute bottom-3 left-3 text-[11px] font-semibold text-white/90 bg-black/40 backdrop-blur-sm px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Inspiring Spaces
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative overflow-hidden rounded-xl shadow-md aspect-[4/3] bg-slate-100 border border-slate-100"
          >
            <img
              src={IMAGES.heroWoodenDesks}
              alt="Wooden study desks and reading zone"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />
            <span className="absolute bottom-3 left-3 text-[11px] font-semibold text-white/90 bg-black/40 backdrop-blur-sm px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Knowledge Hub
            </span>
          </motion.div>
        </div>

        {/* 2. Centered Headline + Subtitle + Socials */}
        <div className="relative border-t border-b border-slate-200/80 py-10 px-4 my-8 text-center bg-gradient-to-b from-slate-50/50 via-white to-slate-50/30 rounded-lg">
          {/* Subtle floral/laurel accent */}
          <div className="flex justify-center items-center gap-3 mb-2 text-[#82C9C7]">
            <span className="h-px w-10 bg-[#82C9C7]/40" />
            <span className="text-xs uppercase tracking-[0.3em] font-semibold">Excellence in Learning</span>
            <span className="h-px w-10 bg-[#82C9C7]/40" />
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-slate-800 tracking-tight"
          >
            The Yenepoya World
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-3.5 max-w-2xl mx-auto text-xs sm:text-sm text-slate-500 leading-relaxed font-normal"
          >
            A supportive and stimulating environment that fosters academic excellence,
            character development, and a love for learning.
          </motion.p>

          {/* Social Icons with hover glow */}
          <div className="flex items-center justify-center sm:justify-end gap-3 mt-5 sm:mt-0 text-slate-500 sm:absolute sm:bottom-4 sm:right-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:text-white hover:bg-[#82C9C7] hover:border-[#82C9C7] transition-all"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:text-white hover:bg-[#82C9C7] hover:border-[#82C9C7] transition-all"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:text-white hover:bg-[#82C9C7] hover:border-[#82C9C7] transition-all"
            >
              <YoutubeIcon />
            </a>
          </div>
        </div>

        {/* 3. High-Energy Photo Strip (interactive continuous marquee) */}
        <div className="relative overflow-hidden rounded-xl bg-slate-50 py-1.5 border border-slate-100 shadow-inner">
          <div className="marquee-strip gap-3 sm:gap-4">
            {/* Double the array for seamless infinite looping */}
            {[...thumbnails, ...thumbnails].map((src, idx) => (
              <div
                key={idx}
                className="w-36 sm:w-48 aspect-[4/3] flex-shrink-0 overflow-hidden rounded-lg bg-slate-200 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer"
              >
                <img
                  src={src}
                  alt={`Student life snapshot ${(idx % thumbnails.length) + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
