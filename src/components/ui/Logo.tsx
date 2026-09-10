type Props = { className?: string; tone?: 'light' | 'dark'; compact?: boolean }

export default function Logo({ className = '', tone = 'dark', compact = false }: Props) {
  const primary = tone === 'light' ? '#FBF9F4' : '#0B1B33'
  return (
    <a href="#top" className={`group flex items-center gap-3 ${className}`} aria-label="The Yenepoya World — home">
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
        <path d="M17 4l6 9-6 4-6-4z" fill="#C6A96B" />
        <path d="M17 17v13" stroke="#C6A96B" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M11 24l6 4 6-4" stroke={primary} strokeWidth="1.6" strokeLinecap="round" opacity="0.55" />
      </svg>
      <span className="leading-none">
        <span
          className="block font-serif text-[15px] font-medium tracking-tight"
          style={{ color: primary }}
        >
          The Yenepoya World
        </span>
        <span
          className={`text-[9px] font-medium uppercase tracking-[0.34em] ${
            compact ? 'hidden xl:block' : 'block'
          }`}
          style={{ color: '#C6A96B', marginTop: '5px'   }}
        >
          Institution of Excellence
        </span>
      </span>
    </a>
  )
}
