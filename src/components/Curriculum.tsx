import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Sparkles, CheckCircle2, ArrowRight, Download, Atom, Globe, Palette, Trophy } from 'lucide-react'
import { IMAGES } from '../data/site'

interface Stage {
  id: string
  title: string
  grades: string
  badge: string
  ageGroup: string
  description: string
  image: string
  highlights: string[]
  subjects: string[]
  features: { label: string; value: string }[]
}

const STAGES: Stage[] = [
  {
    id: 'early-years',
    title: 'Early Childhood Education',
    grades: 'Pre-KG • LKG • UKG',
    badge: 'Foundational Years',
    ageGroup: 'Ages 3 – 5',
    description:
      'A warm, wonder-filled introduction to learning. We blend the best of Reggio Emilia and Montessori philosophies with play-way methodology to foster joyful curiosity, phonics mastery, sensory exploration, and emotional resilience.',
    image: IMAGES.formBackground,
    highlights: [
      'Phonics & Joyful Early Literacy',
      'Sensory & Tactile Discovery Labs',
      'Mathematical Thinking through Play',
      'Music, Movement & Creative Arts',
    ],
    subjects: ['English Phonics', 'Number Magic', 'World & Nature Around Us', 'Music & Drama', 'Gross & Fine Motor Skills'],
    features: [
      { label: 'Student-Teacher Ratio', value: '10 : 1' },
      { label: 'Learning Style', value: 'Play-Way & Experiential' },
      { label: 'Daily Activity', value: 'Outdoor Nature & Sensory' },
    ],
  },
  {
    id: 'primary',
    title: 'Primary School Curriculum',
    grades: 'Grades 1 to 5',
    badge: 'Formative Years',
    ageGroup: 'Ages 6 – 10',
    description:
      'Nurturing confidence, literacy, and logical inquiry. Our primary program transitions young minds into structured inquiry with hands-on science experiments, bilingual fluency, creative writing, and collaborative teamwork.',
    image: IMAGES.thumb2,
    highlights: [
      'Integrated Science & Hands-On Math',
      'Multilingual Fluency & Creative Expression',
      'Digital Literacy & Visual Coding',
      'Social Studies & Community Awareness',
    ],
    subjects: ['Mathematics', 'Environmental Sciences', 'English Literature', 'Second Language', 'Art & Craft', 'Physical Education'],
    features: [
      { label: 'Student-Teacher Ratio', value: '15 : 1' },
      { label: 'Assessment Mode', value: 'Continuous & Comprehensive' },
      { label: 'Language Options', value: 'Hindi, Kannada, French' },
    ],
  },
  {
    id: 'middle',
    title: 'Middle School Curriculum',
    grades: 'Grades 6 to 8',
    badge: 'Exploration Years',
    ageGroup: 'Ages 11 – 13',
    description:
      'Bridging foundational concepts with critical inquiry. Middle schoolers delve deeper into specialized sciences, computational thinking, analytical mathematics, debate, and inter-school sports leagues.',
    image: IMAGES.thumb5,
    highlights: [
      'Dedicated Physics, Chemistry & Biology Labs',
      'Robotics, Python Coding & AI Fundamentals',
      'Model United Nations & Oratory Training',
      'Inter-House Sports & Performing Arts',
    ],
    subjects: ['Advanced Physics', 'Chemistry & Biology', 'Algebra & Geometry', 'Coding & Robotics', 'Global History & Civics'],
    features: [
      { label: 'Student-Teacher Ratio', value: '18 : 1' },
      { label: 'Lab Hours', value: '6+ Hours / Week' },
      { label: 'Co-Curriculars', value: '12 Active Clubs' },
    ],
  },
  {
    id: 'senior',
    title: 'Senior Secondary & High School',
    grades: 'Grades 9 to 12',
    badge: 'Mastery & Pathways',
    ageGroup: 'Ages 14 – 18',
    description:
      'Rigorous academic mastery aligned with global standards. Students pursue tailored streams in Science, Commerce, and Humanities with integrated competitive exam coaching (NEET, JEE, SAT, CUET) and international university prep.',
    image: IMAGES.thumb3,
    highlights: [
      'CBSE & Global International Curriculum Pathways',
      'Integrated NEET / JEE / SAT Coaching & Mentorship',
      'Dedicated Career Counseling & University Applications',
      'Leadership Conclaves & Research Projects',
    ],
    subjects: ['Science (PCM / PCB)', 'Commerce with Math / IP', 'Humanities & Economics', 'Computer Science', 'Applied Psychology'],
    features: [
      { label: 'Exam Excellence', value: '100% Board Pass Rate' },
      { label: 'Mentorship', value: '1-on-1 Career Guidance' },
      { label: 'College Placements', value: 'Top Global & Indian Univs' },
    ],
  },
]

const PILLARS = [
  {
    icon: Atom,
    title: 'STEM & Robotics Lab',
    desc: 'Cutting-edge physics, chemistry, biology, and robotics labs encouraging inquiry, experiments, and innovation.',
  },
  {
    icon: Globe,
    title: 'Global Perspectives',
    desc: 'International exchange partnerships, Model UN conclaves, and foreign language instruction for worldwide readiness.',
  },
  {
    icon: Palette,
    title: 'Creative Arts & Music',
    desc: 'State-of-the-art studios for classical and modern music, drama, ceramics, fine art, and stage performance.',
  },
  {
    icon: Trophy,
    title: 'Sports & Athletics',
    desc: 'Professional turf grounds, Olympic-sized swimming, badminton courts, and certified coaches across 8 disciplines.',
  },
]

export default function Curriculum() {
  const [activeStage, setActiveStage] = useState<string>('primary')
  const [downloadNotice, setDownloadNotice] = useState(false)

  const currentStage = STAGES.find((s) => s.id === activeStage) || STAGES[0]

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault()
    setDownloadNotice(true)
    setTimeout(() => setDownloadNotice(false), 4000)
  }

  return (
    <section id="curriculum" className="relative w-full py-20 bg-white overflow-hidden border-t border-slate-100">
      <div className="container-page">
        {/* Section Header with Book Doodle Accent */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF7F8] border border-[#82C9C7]/30 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3.5">
            <BookOpen size={14} className="text-[#82C9C7]" />
            <span>Academic Continuum</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-slate-800 tracking-tight leading-tight">
            Curriculum &amp; Academic Pathways
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 max-w-xl mx-auto font-normal leading-relaxed">
            A comprehensive, values-centered academic framework engineered to unlock every child’s natural intellect, critical thinking, and character.
          </p>
        </div>

        {/* Stage Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {STAGES.map((stage) => {
            const isSelected = stage.id === activeStage
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStage(stage.id)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isSelected
                    ? 'bg-[#82C9C7] text-white shadow-md shadow-[#82C9C7]/30 scale-102'
                    : 'bg-slate-100/80 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
                }`}
              >
                <span>{stage.title}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${
                    isSelected ? 'bg-white/25 text-white' : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {stage.grades.split('•')[0].trim()}
                </span>
              </button>
            )
          })}
        </div>

        {/* Selected Stage Detail Showcase */}
        <div className="bg-gradient-to-br from-[#FAFEFE] via-[#F3FAFA] to-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStage.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Details */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-[11px] font-bold text-teal-800 bg-[#82C9C7]/20 border border-[#82C9C7]/40 px-3 py-0.5 rounded-full uppercase tracking-wider">
                      {currentStage.badge}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {currentStage.grades} ({currentStage.ageGroup})
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-slate-800 font-semibold">
                    {currentStage.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {currentStage.description}
                  </p>
                </div>

                {/* Key Highlights Checklist */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-1.5">
                    <Sparkles size={13} className="text-[#82C9C7]" />
                    Core Program Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentStage.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 size={15} className="text-[#82C9C7] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subject Pills */}
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Key Subject Areas:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentStage.subjects.map((sub) => (
                      <span
                        key={sub}
                        className="text-[11px] bg-white text-slate-700 px-2.5 py-1 rounded-md border border-slate-200/80 font-medium shadow-2xs"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quick Metric Tiles */}
                <div className="grid grid-cols-3 gap-3 pt-2 border-t border-slate-200/70">
                  {currentStage.features.map((feat) => (
                    <div key={feat.label} className="bg-white/80 rounded-xl p-2.5 sm:p-3 border border-slate-100 shadow-2xs text-center">
                      <p className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">
                        {feat.label}
                      </p>
                      <p className="mt-1 text-xs sm:text-sm font-semibold text-slate-800">
                        {feat.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full bg-[#82C9C7] hover:bg-[#5AA3A1] text-white px-7 py-2.5 text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <span>Enroll In {currentStage.title.split(' ')[0]}</span>
                    <ArrowRight size={14} />
                  </a>

                  <button
                    onClick={handleDownload}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 px-5 py-2.5 text-xs font-semibold tracking-wide transition-all shadow-xs"
                  >
                    <Download size={13} className="text-slate-500" />
                    <span>Download Syllabus Overview</span>
                  </button>
                </div>
              </div>

              {/* Right Image Showcase */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                  <img
                    src={currentStage.image}
                    alt={currentStage.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-black/40 backdrop-blur-xs px-2.5 py-0.5 rounded-full">
                      Authentic Campus Life
                    </span>
                    <p className="mt-1 text-xs font-medium opacity-90">
                      Experiential learning in interactive smart classrooms and laboratories.
                    </p>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="hidden sm:flex absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-lg border border-slate-100 items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#82C9C7]/20 flex items-center justify-center text-[#5AA3A1]">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-800">Holistic Excellence</p>
                    <p className="text-[10px] text-slate-500">Academic &amp; Character Focus</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Download Notice Banner */}
        <AnimatePresence>
          {downloadNotice && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center justify-between text-xs sm:text-sm max-w-xl mx-auto shadow-sm"
            >
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0" />
                <span>
                  <strong>Curriculum Syllabus Package:</strong> Complete academic prospectus for {currentStage.title} has been queued for your download.
                </span>
              </div>
              <button
                onClick={() => setDownloadNotice(false)}
                className="text-emerald-700 hover:text-emerald-900 font-bold ml-3 text-xs"
              >
                Dismiss
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 4 Core Pillars of Education */}
        <div className="mt-16 pt-12 border-t border-slate-100">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl text-slate-800">
              Four Pillars of Our Pedagogy
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Building complete, future-ready leaders with global empathy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((p, idx) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-slate-50/70 hover:bg-[#F2FAFA] border border-slate-200/70 hover:border-[#82C9C7]/50 transition-all duration-300 shadow-2xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-white shadow-xs border border-slate-100 flex items-center justify-center text-[#82C9C7] mb-4">
                    <p.icon size={22} />
                  </div>
                  <h4 className="font-serif text-lg text-slate-800 font-semibold mb-2">
                    {p.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1 text-[11px] font-bold text-[#82C9C7]">
                  <span>Explore Pedagogy</span>
                  <ArrowRight size={12} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
