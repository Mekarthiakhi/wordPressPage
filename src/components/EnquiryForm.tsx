import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  CheckCircle2,
  ArrowRight,
  User,
  Mail,
  Phone,
  BookOpen,
  Calendar,
  MessageSquare,
  Send,
  Bell,
  MapPin,
  Clock,
  ShieldCheck,
  AlertCircle,
  Loader2,
  Settings2,
} from 'lucide-react'
import { IMAGES } from '../data/site'
import { sendEmail, getEmailStatus, EmailStatus } from '../lib/emailService'

// Pen writing doodle icon matching the PDF
function PenDoodle() {
  return (
    <svg className="w-9 h-9 text-[#82C9C7]" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M18 4l8 8L10 28H2v-8L18 4z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 8l8 8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="27" cy="5" r="1.5" fill="#82C9C7" />
    </svg>
  )
}

export default function EnquiryForm() {
  const [activeTab, setActiveTab] = useState<'inquiry' | 'notification'>('inquiry')
  const [submitting, setSubmitting] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string; simulated?: boolean; recipient?: string } | null>(null)
  const [emailStatus, setEmailStatus] = useState<EmailStatus | null>(null)
  const [showConfigHelp, setShowConfigHelp] = useState(false)

  // Form State for Inquiry
  const [inquiryData, setInquiryData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    grade: '',
    yearOfBirth: '',
    message: '',
  })

  // Form State for Notification Message
  const [notifyData, setNotifyData] = useState({
    senderName: '',
    senderEmail: '',
    recipientEmail: '',
    subject: '',
    category: 'Admission Alert',
    priority: 'Normal' as 'Normal' | 'Urgent' | 'Admission Alert',
    message: '',
  })

  useEffect(() => {
    getEmailStatus().then((status) => {
      setEmailStatus(status)
      if (status.recipient) {
        setNotifyData((prev) => ({ ...prev, recipientEmail: status.recipient }))
      }
    })
  }, [])

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setResult(null)

    const res = await sendEmail({
      type: 'inquiry',
      fullName: inquiryData.fullName,
      email: inquiryData.email,
      mobileNumber: inquiryData.mobileNumber,
      grade: inquiryData.grade,
      yearOfBirth: inquiryData.yearOfBirth,
      subject: `New Admission Inquiry from ${inquiryData.fullName}`,
      message: inquiryData.message,
    })

    setSubmitting(false)
    setResult({
      success: res.success || Boolean(res.simulated),
      message: res.message,
      simulated: res.simulated,
      recipient: res.recipient || emailStatus?.recipient || 'School Admissions',
    })

    if (res.success || res.simulated) {
      setInquiryData({
        fullName: '',
        email: '',
        mobileNumber: '',
        grade: '',
        yearOfBirth: '',
        message: '',
      })
    }
  }

  const handleNotificationSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setResult(null)

    const res = await sendEmail({
      type: 'notification',
      fullName: notifyData.senderName,
      email: notifyData.senderEmail,
      to: notifyData.recipientEmail,
      subject: notifyData.subject,
      priority: notifyData.priority,
      message: `[Category: ${notifyData.category} | Priority: ${notifyData.priority}]\n\n${notifyData.message}`,
    })

    setSubmitting(false)
    setResult({
      success: res.success || Boolean(res.simulated),
      message: res.message,
      simulated: res.simulated,
      recipient: notifyData.recipientEmail || emailStatus?.recipient,
    })

    if (res.success || res.simulated) {
      setNotifyData((prev) => ({
        ...prev,
        subject: '',
        message: '',
      }))
    }
  }

  return (
    <section id="contact" className="relative w-full overflow-hidden border-t border-slate-100">
      {/* Invisible admissions anchor */}
      <div id="admissions" className="absolute -top-24 left-0" />
      <div id="inquire" className="absolute -top-24 left-0" />

      {/* Header with pen doodle icon */}
      <div className="py-14 bg-white text-center">
        <div className="container-page">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-[#EBF7F8] flex items-center justify-center text-[#82C9C7] border border-[#82C9C7]/30 shadow-xs transform -rotate-6 hover:rotate-0 transition-transform">
            <PenDoodle />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-slate-800 mt-3 tracking-tight">
            Contact &amp; Inquire Today
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 font-normal">
            Reach out to our academic advisors or send a direct notification message
          </p>

          {/* Quick Contact Information Badges */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto text-left">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3 overflow-hidden shadow-2xs">
              <div className="w-9 h-9 rounded-xl bg-[#82C9C7]/20 flex items-center justify-center text-[#4A9C9A] flex-shrink-0">
                <Phone size={16} />
              </div>
              <div className="min-w-0 flex-1 overflow-hidden">
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Helpline &amp; Desk</p>
                <a href="tel:+918242204668" className="text-xs font-semibold text-slate-800 hover:text-[#5AA3A1] block truncate">
                  +91 824 220 4668
                </a>
                <p className="text-[11px] text-slate-500 truncate">+91 99800 12345</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3 overflow-hidden shadow-2xs">
              <div className="w-9 h-9 rounded-xl bg-[#82C9C7]/20 flex items-center justify-center text-[#4A9C9A] flex-shrink-0">
                <Mail size={16} />
              </div>
              <div className="min-w-0 flex-1 overflow-hidden">
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Email Admissions</p>
                <a
                  href="mailto:yenopoyaworld@gmail.com"
                  className="text-xs font-semibold text-slate-800 hover:text-[#5AA3A1] block truncate"
                  title="yenopoyaworld@gmail.com"
                >
                  yenopoyaworld@gmail.com
                </a>
                <a
                  href="mailto:admissions@yenepoyaworld.com"
                  className="text-[11px] text-slate-500 hover:text-[#5AA3A1] block truncate mt-0.5"
                  title="admissions@yenepoyaworld.com"
                >
                  admissions@yenepoyaworld.com
                </a>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3 overflow-hidden">
              <div className="w-9 h-9 rounded-xl bg-[#82C9C7]/20 flex items-center justify-center text-[#4A9C9A] flex-shrink-0">
                <MapPin size={16} />
              </div>
              <div className="min-w-0 flex-1 overflow-hidden">
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Campus Location</p>
                <p className="text-xs font-semibold text-slate-800 truncate">The Yenepoya World</p>
                <p className="text-[11px] text-slate-500 truncate">Mangalore, Karnataka 575018</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3 overflow-hidden">
              <div className="w-9 h-9 rounded-xl bg-[#82C9C7]/20 flex items-center justify-center text-[#4A9C9A] flex-shrink-0">
                <Clock size={16} />
              </div>
              <div className="min-w-0 flex-1 overflow-hidden">
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Visiting Hours</p>
                <p className="text-xs font-semibold text-slate-800 truncate">Mon – Sat</p>
                <p className="text-[11px] text-slate-500 truncate">8:30 AM – 4:30 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Photo with Interactive Form Overlay */}
      <div className="relative w-full py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.formBackground}
            alt="Child writing in notebook with colorful pencils"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-slate-950/35 backdrop-blur-[1.5px]" />
        </div>

        <div className="container-page relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/80"
          >
            {/* Mode Switcher Tabs */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-5 mb-6">
              <div className="flex items-center gap-2 bg-slate-100/90 p-1 rounded-2xl">
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('inquiry')
                    setResult(null)
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                    activeTab === 'inquiry'
                      ? 'bg-white text-slate-800 shadow-sm'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <BookOpen size={14} className={activeTab === 'inquiry' ? 'text-[#82C9C7]' : ''} />
                  <span>Admission Inquiry</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('notification')
                    setResult(null)
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                    activeTab === 'notification'
                      ? 'bg-white text-slate-800 shadow-sm'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <Bell size={14} className={activeTab === 'notification' ? 'text-[#82C9C7]' : ''} />
                  <span>Send Notification</span>
                </button>
              </div>

              {/* Status Pill & Settings trigger */}
              <div className="hidden sm:flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowConfigHelp(!showConfigHelp)}
                  className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                  title="Email credentials info"
                >
                  <Settings2 size={16} />
                </button>

                {emailStatus?.configured ? (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                    <ShieldCheck size={12} />
                    SMTP Ready
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">
                    <AlertCircle size={12} />
                    Ready for Credentials
                  </span>
                )}
              </div>
            </div>

            {/* Email Config Helper Card */}
            {showConfigHelp && (
              <div className="mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                <div className="flex items-start justify-between">
                  <h4 className="font-bold text-slate-800 flex items-center gap-1.5">
                    <Settings2 size={14} className="text-[#82C9C7]" />
                    Email Notification Dispatch Setup
                  </h4>
                  <button onClick={() => setShowConfigHelp(false)} className="text-slate-400 hover:text-slate-700">
                    ✕
                  </button>
                </div>
                <p className="mt-1.5">
                  The backend email handler is active on <code>/api/send-email</code> using Nodemailer.
                </p>
                <div className="mt-2 bg-white p-2.5 rounded-lg border font-mono text-[11px] text-slate-700">
                  Current Status: {emailStatus?.configured ? `Connected via ${emailStatus.host}` : 'Awaiting SMTP_USER & SMTP_PASS in .env'}
                  <br />
                  Target Recipient: {emailStatus?.recipient || 'yenopoyaworld@gmail.com'}
                </div>
                <p className="mt-2 text-[11px] text-slate-500">
                  Tip: To send real emails via Gmail, set <code>SMTP_USER=your-email@gmail.com</code> and <code>SMTP_PASS=your-16-char-app-password</code> in the project's <code>.env</code> file.
                </p>
              </div>
            )}

            {/* Response Banner */}
            <AnimatePresence>
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`mb-6 p-4 rounded-2xl border text-xs sm:text-sm flex items-start gap-3 ${
                    result.success
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                      : 'bg-rose-50 border-rose-200 text-rose-800'
                  }`}
                >
                  <CheckCircle2 size={20} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-bold text-sm">
                      {result.simulated ? 'Notification Queued (Preview Mode)' : 'Application Received!'}
                    </p>
                    <p className="mt-1 leading-relaxed">{result.message}</p>
                    <p className="mt-1.5 text-[11px] text-emerald-800 font-medium">
                      Our admissions team will review your application and get in touch with you shortly.
                    </p>
                  </div>
                  <button onClick={() => setResult(null)} className="text-slate-400 hover:text-slate-700 font-bold ml-2">
                    ✕
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* TAB 1: ADMISSION INQUIRY FORM */}
            {activeTab === 'inquiry' ? (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div className="text-left mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#047857] bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-full">
                    Admissions Desk · 2024–25
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-slate-800 mt-1 font-medium">
                    Submit an Online Admission Inquiry
                  </h3>
                </div>

                {/* Full Name */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User size={15} />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Parent / Guardian Full Name"
                    value={inquiryData.fullName}
                    onChange={(e) => setInquiryData({ ...inquiryData, fullName: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/80 pl-10 pr-4 py-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 shadow-xs focus:bg-white focus:border-[#82C9C7] focus:outline-none focus:ring-2 focus:ring-[#82C9C7]/20 transition-all"
                  />
                </div>

                {/* Email & Phone in 2 Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Mail size={15} />
                    </div>
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={inquiryData.email}
                      onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/80 pl-10 pr-4 py-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 shadow-xs focus:bg-white focus:border-[#82C9C7] focus:outline-none focus:ring-2 focus:ring-[#82C9C7]/20 transition-all"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Phone size={15} />
                    </div>
                    <input
                      type="tel"
                      required
                      placeholder="Mobile Contact Number"
                      value={inquiryData.mobileNumber}
                      onChange={(e) => setInquiryData({ ...inquiryData, mobileNumber: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/80 pl-10 pr-4 py-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 shadow-xs focus:bg-white focus:border-[#82C9C7] focus:outline-none focus:ring-2 focus:ring-[#82C9C7]/20 transition-all"
                    />
                  </div>
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
                      placeholder="Grade Applying For (e.g. Grade 1 / Grade 8)"
                      value={inquiryData.grade}
                      onChange={(e) => setInquiryData({ ...inquiryData, grade: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/80 pl-10 pr-4 py-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 shadow-xs focus:bg-white focus:border-[#82C9C7] focus:outline-none focus:ring-2 focus:ring-[#82C9C7]/20 transition-all"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Calendar size={15} />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="Child's Year of Birth (e.g. 2018)"
                      value={inquiryData.yearOfBirth}
                      onChange={(e) => setInquiryData({ ...inquiryData, yearOfBirth: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/80 pl-10 pr-4 py-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 shadow-xs focus:bg-white focus:border-[#82C9C7] focus:outline-none focus:ring-2 focus:ring-[#82C9C7]/20 transition-all"
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
                    placeholder="Specific questions or requirements for Admissions & Principal..."
                    value={inquiryData.message}
                    onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/80 pl-10 pr-4 py-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 shadow-xs focus:bg-white focus:border-[#82C9C7] focus:outline-none focus:ring-2 focus:ring-[#82C9C7]/20 transition-all resize-none"
                  />
                </div>

                <div className="pt-2 text-center">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-800 hover:bg-slate-900 disabled:opacity-60 px-12 py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                  >
                    {submitting ? (
                      <>
                        <Loader2 size={14} className="animate-spin" />
                        <span>Sending Notification...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Admission Inquiry</span>
                        <ArrowRight size={14} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              /* TAB 2: INSTANT NOTIFICATION MESSAGE FORM */
              <form onSubmit={handleNotificationSubmit} className="space-y-4">
                <div className="text-left mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-teal-800 bg-teal-50 border border-teal-200/60 px-2.5 py-0.5 rounded-full">
                    Direct Portal Dispatch
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-slate-800 mt-1 font-medium">
                    Send Instant Notification Message
                  </h3>
                </div>

                {/* Priority & Category Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Notification Category
                    </label>
                    <select
                      value={notifyData.category}
                      onChange={(e) => setNotifyData({ ...notifyData, category: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 text-xs text-slate-800 shadow-xs focus:bg-white focus:border-[#82C9C7] focus:outline-none transition-all"
                    >
                      <option value="Admission Alert">Admission Alert</option>
                      <option value="Parent Feedback">Parent Feedback / Inquiry</option>
                      <option value="Campus Visit Request">Campus Visit Request</option>
                      <option value="General Notice">General Notice</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Priority Level
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['Normal', 'Urgent', 'Admission Alert'] as const).map((lvl) => (
                        <button
                          key={lvl}
                          type="button"
                          onClick={() => setNotifyData({ ...notifyData, priority: lvl })}
                          className={`py-2 rounded-xl text-[11px] font-bold transition-all border ${
                            notifyData.priority === lvl
                              ? lvl === 'Urgent'
                                ? 'bg-rose-50 border-rose-300 text-rose-700'
                                : 'bg-[#EBF7F8] border-[#82C9C7] text-teal-800'
                              : 'bg-slate-50 border-slate-200 text-slate-500'
                          }`}
                        >
                          {lvl}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sender Name & Sender Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User size={15} />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={notifyData.senderName}
                      onChange={(e) => setNotifyData({ ...notifyData, senderName: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/80 pl-10 pr-4 py-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 shadow-xs focus:bg-white focus:border-[#82C9C7] focus:outline-none focus:ring-2 focus:ring-[#82C9C7]/20 transition-all"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Mail size={15} />
                    </div>
                    <input
                      type="email"
                      required
                      placeholder="Your Email"
                      value={notifyData.senderEmail}
                      onChange={(e) => setNotifyData({ ...notifyData, senderEmail: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/80 pl-10 pr-4 py-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 shadow-xs focus:bg-white focus:border-[#82C9C7] focus:outline-none focus:ring-2 focus:ring-[#82C9C7]/20 transition-all"
                    />
                  </div>
                </div>

                {/* Recipient Email & Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Mail size={15} />
                    </div>
                    <input
                      type="email"
                      required
                      placeholder="Recipient Email"
                      value={notifyData.recipientEmail}
                      onChange={(e) => setNotifyData({ ...notifyData, recipientEmail: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/80 pl-10 pr-4 py-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 shadow-xs focus:bg-white focus:border-[#82C9C7] focus:outline-none focus:ring-2 focus:ring-[#82C9C7]/20 transition-all"
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="Notification Subject"
                      value={notifyData.subject}
                      onChange={(e) => setNotifyData({ ...notifyData, subject: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 shadow-xs focus:bg-white focus:border-[#82C9C7] focus:outline-none focus:ring-2 focus:ring-[#82C9C7]/20 transition-all"
                    />
                  </div>
                </div>

                {/* Message Body */}
                <div className="relative">
                  <div className="absolute top-3 left-3.5 pointer-events-none text-slate-400">
                    <Send size={15} />
                  </div>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your notification message here..."
                    value={notifyData.message}
                    onChange={(e) => setNotifyData({ ...notifyData, message: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/80 pl-10 pr-4 py-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 shadow-xs focus:bg-white focus:border-[#82C9C7] focus:outline-none focus:ring-2 focus:ring-[#82C9C7]/20 transition-all resize-none"
                  />
                </div>

                <div className="pt-2 text-center">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-teal-700 bg-teal-800 hover:bg-teal-900 disabled:opacity-60 px-12 py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                  >
                    {submitting ? (
                      <>
                        <Loader2 size={14} className="animate-spin" />
                        <span>Dispatching Email...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Email Notification</span>
                        <Send size={14} />
                      </>
                    )}
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
