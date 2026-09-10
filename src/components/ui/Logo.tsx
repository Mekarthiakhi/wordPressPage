type Props = { className?: string; tone?: 'light' | 'dark' | 'teal'; compact?: boolean; centered?: boolean }

export default function Logo({ className = '', tone = 'dark', compact = false, centered = false }: Props) {
  const primary = tone === 'light' ? '#FFFFFF' : '#1E293B'
  const accent = tone === 'light' ? '#C7EEF0' : '#82C9C7'

  return (
    <a
      href="#top"
      className={`group flex ${centered ? 'flex-col items-center text-center' : 'items-center'} gap-2.5 ${className}`}
      aria-label="The Yenepoya World — home"
    >
      {/* Tree of Knowledge Emblem matching the Yenepoya crest in the PDF */}
      <svg
        width={centered ? '42' : '36'}
        height={centered ? '42' : '36'}
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:scale-105"
      >
        <circle cx="20" cy="20" r="19" stroke={accent} strokeWidth="1.5" strokeDasharray="2 2" opacity="0.6" />
        {/* Tree foliage dots */}
        <circle cx="20" cy="11" r="3.5" fill="#82C9C7" />
        <circle cx="14" cy="15" r="3" fill="#82C9C7" />
        <circle cx="26" cy="15" r="3" fill="#82C9C7" />
        <circle cx="11" cy="20" r="2.5" fill="#82C9C7" />
        <circle cx="29" cy="20" r="2.5" fill="#82C9C7" />
        <circle cx="16" cy="19" r="2.2" fill="#5AA3A1" />
        <circle cx="24" cy="19" r="2.2" fill="#5AA3A1" />
        <circle cx="20" cy="16" r="2.5" fill="#5AA3A1" />
        {/* Trunk and branches */}
        <path d="M20 28V18M20 22L15 16M20 22L25 16M20 25L13 20M20 25L27 20" stroke="#334155" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 30C18 29 22 29 24 30" stroke="#82C9C7" strokeWidth="1.5" strokeLinecap="round" />
      </svg>

      <span className="leading-tight">
        <span
          className="block font-serif text-[16px] font-semibold tracking-tight"
          style={{ color: primary }}
        >
          The Yenepoya World
        </span>
        <span
          className={`text-[8.5px] font-semibold uppercase tracking-[0.28em] text-[#82C9C7] ${
            compact ? 'hidden sm:block' : 'block'
          } mt-0.5`}
        >
          School of Excellence
        </span>
      </span>
    </a>
  )
}
