import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import Reveal from './ui/Reveal'
import { EASE_LUX } from '../lib/motion'

type FieldProps = {
  id: string
  label: string
  type?: string
  required?: boolean
  as?: 'input' | 'textarea' | 'select'
  options?: string[]
  maxLength?: number
  numeric?: boolean
  inputMode?: 'text' | 'tel' | 'email' | 'numeric'
}

function Field({
  id,
  label,
  type = 'text',
  required,
  as = 'input',
  options,
  maxLength,
  numeric,
  inputMode,
}: FieldProps) {
  const [value, setValue] = useState('')
  const filled = value.length > 0
  const base =
    'peer w-full border-0 border-b border-midnight/25 bg-transparent pb-2.5 pt-6 text-midnight outline-none transition-colors duration-300 focus:border-champagne'

  const handleChange = (v: string) => {
    // For phone/mobile: allow a leading + plus digits and spaces, and cap length.
    if (numeric) v = v.replace(/(?!^\+)[^\d\s]/g, '')
    if (maxLength) v = v.slice(0, maxLength)
    setValue(v)
  }

  return (
    <div className="relative">
      {as === 'textarea' ? (
        <textarea
          id={id}
          rows={2}
          required={required}
          value={value}
          maxLength={maxLength}
          onChange={(e) => handleChange(e.target.value)}
          className={`${base} resize-none`}
        />
      ) : as === 'select' ? (
        <select
          id={id}
          required={required}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={`${base} ${filled ? 'text-midnight' : 'text-transparent'}`}
        >
          <option value="" />
          {options?.map((o) => (
            <option key={o} value={o} className="text-midnight">
              {o}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          type={type}
          required={required}
          value={value}
          maxLength={maxLength}
          inputMode={inputMode}
          onChange={(e) => handleChange(e.target.value)}
          className={base}
        />
      )}
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-0 text-mist transition-all duration-300 ${
          filled ? 'top-0 text-[11px] font-medium uppercase tracking-[0.16em] text-champagne-dark' : 'top-6 text-base'
        } peer-focus:top-0 peer-focus:text-[11px] peer-focus:font-medium peer-focus:uppercase peer-focus:tracking-[0.16em] peer-focus:text-champagne-dark`}
      >
        {label}
        {required && ' *'}
      </label>
    </div>
  )
}

export default function EnquiryForm() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="enquiry" className="bg-ivory py-24 sm:py-32">
      <div className="container-lux grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
        {/* Left — invitation */}
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow mb-6">Inquire Today</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-serif text-[10vw] font-light leading-[0.98] tracking-[-0.02em] text-midnight sm:text-6xl lg:text-[4.4vw]">
              Begin your <span className="italic text-champagne-dark">journey.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-md leading-relaxed text-charcoal/75">
              Tell us a little about yourself and our admissions team will be in
              touch — thoughtfully, and without the pressure. Every great
              education starts with a conversation.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <dl className="mt-10 space-y-4 text-sm">
              <div className="flex gap-4 border-t border-midnight/15 pt-4">
                <dt className="w-28 shrink-0 uppercase tracking-[0.14em] text-mist">Email</dt>
                <dd>
                  <a
                    href="mailto:admissions@yenepoyaworld.edu"
                    className="link-underline text-midnight"
                  >
                    admissions@yenepoyaworld.edu
                  </a>
                </dd>
              </div>
              <div className="flex gap-4 border-t border-midnight/15 pt-4">
                <dt className="w-28 shrink-0 uppercase tracking-[0.14em] text-mist">Phone</dt>
                <dd>
                  <a href="tel:+918240000000" className="link-underline text-midnight">
                    +91 824 000 0000
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>

        {/* Right — form */}
        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <div className="relative bg-ivory-light p-8 shadow-[0_30px_80px_-40px_rgba(11,27,51,0.3)] sm:p-10">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: EASE_LUX }}
                  className="flex min-h-[420px] flex-col items-center justify-center text-center"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-champagne text-midnight">
                    <Check className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 font-serif text-3xl font-light text-midnight">Thank you.</h3>
                  <p className="mt-3 max-w-sm text-charcoal/70">
                    Your enquiry has been received. A member of our admissions team
                    will reach out to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={onSubmit} className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
                  <Field id="name" label="Full Name" required />
                  <Field id="email" label="Email" type="email" required />
                  <Field
                    id="phone"
                    label="Mobile Number"
                    type="tel"
                    numeric
                    inputMode="tel"
                    maxLength={15}
                  />
                  <Field
                    id="program"
                    label="Program of Interest"
                    as="select"
                    options={['Undergraduate', 'Postgraduate', 'Research', 'Foundation', 'Not sure yet']}
                  />
                  <div className="sm:col-span-2">
                    <Field id="message" label="Message" as="textarea" />
                  </div>
                  <div className="mt-6 sm:col-span-2">
                    <button
                      type="submit"
                      className="btn-primary group w-full hover:bg-champagne-dark sm:w-auto"
                    >
                      Submit Enquiry
                      <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
