import { motion } from 'framer-motion'
import { Image, Newspaper, BookOpen, Compass, ArrowRight } from 'lucide-react'
import { DISCOVER_ITEMS } from '../data/site'

export default function Discover() {
  const getIcon = (idx: number) => {
    if (idx === 0) return <Image size={18} className="text-white" />
    if (idx === 1) return <Newspaper size={18} className="text-white" />
    return <BookOpen size={18} className="text-white" />
  }

  return (
    <section id="discover" className="relative w-full py-20 bg-doodle-pattern border-t border-b border-[#C7EEF0]/60 overflow-hidden">
      {/* Hand-drawn School Doodles floating in background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 select-none">
        {/* Pencil doodle */}
        <svg className="absolute top-10 left-10 w-12 h-12 text-[#82C9C7] animate-doodle" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M18 2l4 4L7 21H3v-4L18 2z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {/* Book doodle */}
        <svg className="absolute bottom-12 right-12 w-14 h-14 text-[#82C9C7] animate-doodle-delayed" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {/* Lightbulb doodle */}
        <svg className="absolute top-16 right-20 w-10 h-10 text-[#82C9C7] animate-doodle" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-7 7c0 2.5 1.5 4.5 3 5.5v1.5h8v-1.5c1.5-1 3-3 3-5.5a7 7 0 0 0-7-7z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="container-page relative z-10">
        {/* Section Header with Compass Icon */}
        <div className="text-center mb-14">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-white shadow-md flex items-center justify-center text-[#82C9C7] border border-[#82C9C7]/30 transform -rotate-3 hover:rotate-0 transition-transform">
            <Compass size={24} />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-slate-800 mt-3.5 tracking-tight">
            Discover Further
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1.5 font-normal">
            Explore more of The Yenepoya School Offerings
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {DISCOVER_ITEMS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-400 flex flex-col hover:-translate-y-1.5 border border-slate-100"
            >
              {/* Card Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[10px] font-bold uppercase tracking-wider text-slate-700 px-2.5 py-0.5 rounded-full shadow-xs">
                  {item.tag}
                </span>
                {/* Floating Cyan Icon Badge */}
                <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-gradient-to-br from-[#82C9C7] to-[#5AA3A1] flex items-center justify-center shadow-md group-hover:rotate-6 transition-transform">
                  {getIcon(idx)}
                </div>
              </div>

              {/* Card Text Content */}
              <div className="p-6 text-center flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-slate-800 font-semibold group-hover:text-[#5AA3A1] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-500 font-normal">
                    {item.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center gap-1.5 text-xs font-semibold text-[#82C9C7] group-hover:text-[#5AA3A1]">
                  <span>Explore Section</span>
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Centered LEARN MORE Button */}
        <div className="mt-12 text-center">
          <a
            href="#about"
            className="btn-learn-more px-9 py-2.5 shadow-sm hover:shadow-md"
          >
            <span>LEARN MORE</span>
            <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </section>
  )
}
