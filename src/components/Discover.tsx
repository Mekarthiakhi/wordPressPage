import { motion } from 'framer-motion'
import { Image, Newspaper, BookOpen, Compass } from 'lucide-react'
import { DISCOVER_ITEMS } from '../data/site'

export default function Discover() {
  const getIcon = (idx: number) => {
    if (idx === 0) return <Image size={18} className="text-white" />
    if (idx === 1) return <Newspaper size={18} className="text-white" />
    return <BookOpen size={18} className="text-white" />
  }

  return (
    <section id="discover" className="relative w-full py-16 bg-doodle-grid border-t border-b border-[#C7EEF0]/50">
      <div className="container-page">
        {/* Section Header with Compass Icon */}
        <div className="text-center mb-12">
          <div className="w-10 h-10 mx-auto rounded-full bg-white shadow-sm flex items-center justify-center text-[#82C9C7] border border-[#82C9C7]/30">
            <Compass size={22} />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-slate-800 mt-3">
            Discover Further
          </h2>
          <p className="text-xs text-slate-500 mt-1 font-normal">
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
              className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Card Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Floating Cyan Icon Badge */}
                <div className="absolute bottom-3 right-3 w-9 h-9 rounded-lg bg-[#82C9C7] flex items-center justify-center shadow-md">
                  {getIcon(idx)}
                </div>
              </div>

              {/* Card Text Content */}
              <div className="p-6 text-center flex-1 flex flex-col justify-center">
                <h3 className="font-serif text-xl text-slate-800 font-medium">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-slate-400">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Centered LEARN MORE Button */}
        <div className="mt-12 text-center">
          <a
            href="#about"
            className="btn-learn-more px-8 py-2.5 shadow-sm"
          >
            LEARN MORE
          </a>
        </div>
      </div>
    </section>
  )
}
