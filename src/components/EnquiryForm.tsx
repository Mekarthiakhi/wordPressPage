import { useState } from 'react'
import { motion } from 'framer-motion'
import { PenTool, CheckCircle2 } from 'lucide-react'
import { IMAGES } from '../data/site'

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
    <section id="inquire" className="relative w-full">
      {/* Header with pen doodle icon */}
      <div className="py-12 bg-white text-center">
        <div className="w-10 h-10 mx-auto rounded-full bg-[#EBF7F8] flex items-center justify-center text-[#82C9C7]">
          <PenTool size={20} />
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl text-slate-800 mt-2">
          Inquire Today
        </h2>
        <p className="text-xs text-slate-400 mt-1 font-normal">
          Contact Us for More Information
        </p>
      </div>

      {/* Background Photo with Form Overlay */}
      <div className="relative w-full py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.formBackground}
            alt="Child writing in notebook with colored pencils"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle warm overlay to match the reference */}
          <div className="absolute inset-0 bg-amber-950/20 backdrop-blur-[1px]" />
        </div>

        <div className="container-page relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl p-8 sm:p-10 shadow-2xl border border-white/60"
          >
            {submitted ? (
              <div className="py-12 text-center">
                <CheckCircle2 className="w-12 h-12 text-[#82C9C7] mx-auto mb-3" />
                <h3 className="font-serif text-2xl text-slate-800">
                  Thank You for Your Inquiry!
                </h3>
                <p className="text-xs text-slate-500 mt-2">
                  Our admissions office will reach out to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full rounded-md border border-slate-300 bg-white/80 px-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 shadow-sm focus:border-[#82C9C7] focus:outline-none focus:ring-1 focus:ring-[#82C9C7]"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-md border border-slate-300 bg-white/80 px-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 shadow-sm focus:border-[#82C9C7] focus:outline-none focus:ring-1 focus:ring-[#82C9C7]"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Mobile Number"
                    value={formData.mobileNumber}
                    onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                    className="w-full rounded-md border border-slate-300 bg-white/80 px-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 shadow-sm focus:border-[#82C9C7] focus:outline-none focus:ring-1 focus:ring-[#82C9C7]"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    required
                    placeholder="Grade"
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    className="w-full rounded-md border border-slate-300 bg-white/80 px-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 shadow-sm focus:border-[#82C9C7] focus:outline-none focus:ring-1 focus:ring-[#82C9C7]"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    required
                    placeholder="Child's Year Of Birth"
                    value={formData.yearOfBirth}
                    onChange={(e) => setFormData({ ...formData, yearOfBirth: e.target.value })}
                    className="w-full rounded-md border border-slate-300 bg-white/80 px-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 shadow-sm focus:border-[#82C9C7] focus:outline-none focus:ring-1 focus:ring-[#82C9C7]"
                  />
                </div>

                <div>
                  <textarea
                    rows={3}
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-md border border-slate-300 bg-white/80 px-4 py-2 text-xs text-slate-800 placeholder-slate-400 shadow-sm focus:border-[#82C9C7] focus:outline-none focus:ring-1 focus:ring-[#82C9C7] resize-none"
                  />
                </div>

                <div className="pt-2 text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-md border border-slate-400 bg-white px-10 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-700 shadow-sm hover:bg-slate-50 hover:border-slate-600 transition-all duration-200"
                  >
                    SUBMIT
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
