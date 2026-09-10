import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight, User, Mail, Phone, BookOpen, Calendar, MessageSquare } from 'lucide-react'
import { IMAGES } from '../data/site'

// Pen writing doodle icon matching the PDF
function PenDoodle() {
  return (
    <svg className="w-9 h-9 text-[#82C9C7]" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M18 4l8 8L10 28H2v-8L18 4z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 8l8 8" strokeLinecap="round" strokeLinejoin="round" />
      {/* Ink sparkle */}
      <circle cx="27" cy="5" r="1.5" fill="#82C9C7" />
    </svg>
  )
}

export default function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    grade: '',
    yearOfBirth: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        mobileNumber: '',
        grade: '',
        yearOfBirth: '',
        message: '',
      })
      setSubmitted(false)
    }, 4000)
  }

  return (
    <section id="inquire" className="relative w-full overflow-hidden">
      {/* Header with pen doodle icon */}
      <div className="py-14 bg-white text-center">
        <div className="w-12 h-12 mx-auto rounded-2xl bg-[#EBF7F8] flex items-center justify-center text-[#82C9C7] border border-[#82C9C7]/30 shadow-xs transform -rotate-6 hover:rotate-0 transition-transform">
          <PenDoodle />
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-slate-800 mt-3 tracking-tight">
          Inquire Today
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1 font-normal">
          Contact Us for More Information
        </p>
      </div>

      {/* Background Photo with Glassmorphism Form Card Overlay */}
      <div className="relative w-full py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.formBackground}
            alt="Child writing in notebook with colorful pencils"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle warm overlay matching the PDF photography */}
          <div className="absolute inset-0 bg-slate-950/25 backdrop-blur-[1px]" />
        </div>

        <div className="container-page relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mx-auto bg-white/95 backdrop-blur-xl rounded-3xl p-8 sm:p-11 shadow-2xl border border-white/80"
          >
            <div className="text-center mb-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#047857] bg-emerald-50 border border-emerald-200/60 px-3 py-1 rounded-full">
                Admissions Desk · 2024–25
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-slate-800 mt-2 font-medium">
                Submit an Online Inquiry
              </h3>
            </div>

            {submitted ? (
              <div className="py-12 text-center">
                <CheckCircle2 className="w-14 h-14 text-[#82C9C7] mx-auto mb-3 animate-bounce" />
                <h3 className="font-serif text-2xl text-slate-800">
                  Thank You for Your Inquiry!
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-2">
                  Our admissions office has received your details and will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User size={15} />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-10 pr-4 py-3 text-xs text-slate-800 placeholder-slate-400 shadow-xs focus:bg-white focus:border-[#82C9C7] focus:outline-none focus:ring-2 focus:ring-[#82C9C7]/20 transition-all"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail size={15} />
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-10 pr-4 py-3 text-xs text-slate-800 placeholder-slate-400 shadow-xs focus:bg-white focus:border-[#82C9C7] focus:outline-none focus:ring-2 focus:ring-[#82C9C7]/20 transition-all"
                  />
                </div>

                {/* Mobile Number */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Phone size={15} />
                  </div>
                  <input
                    type="tel"
                    required
                    placeholder="Mobile Number"
                    value={formData.mobileNumber}
                    onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-10 pr-4 py-3 text-xs text-slate-800 placeholder-slate-400 shadow-xs focus:bg-white focus:border-[#82C9C7] focus:outline-none focus:ring-2 focus:ring-[#82C9C7]/20 transition-all"
                  />
                </div>

                {/* Grade and Child Year of Birth */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <BookOpen size={15} />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="Grade Applying For"
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-10 pr-4 py-3 text-xs text-slate-800 placeholder-slate-400 shadow-xs focus:bg-white focus:border-[#82C9C7] focus:outline-none focus:ring-2 focus:ring-[#82C9C7]/20 transition-all"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Calendar size={15} />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="Child's Year Of Birth"
                      value={formData.yearOfBirth}
                      onChange={(e) => setFormData({ ...formData, yearOfBirth: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-10 pr-4 py-3 text-xs text-slate-800 placeholder-slate-400 shadow-xs focus:bg-white focus:border-[#82C9C7] focus:outline-none focus:ring-2 focus:ring-[#82C9C7]/20 transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <div className="absolute top-3 left-3.5 pointer-events-none text-slate-400">
                    <MessageSquare size={15} />
                  </div>
                  <textarea
                    rows={3}
                    placeholder="Message / Queries for the Principal & Admissions Team"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-10 pr-4 py-3 text-xs text-slate-800 placeholder-slate-400 shadow-xs focus:bg-white focus:border-[#82C9C7] focus:outline-none focus:ring-2 focus:ring-[#82C9C7]/20 transition-all resize-none"
                  />
                </div>

                <div className="pt-3 text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-800 hover:bg-slate-900 px-12 py-3 text-xs font-bold uppercase tracking-widest text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
                  >
                    <span>SUBMIT</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
