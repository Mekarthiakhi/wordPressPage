import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// Subtle desktop-only cursor follower. Disabled for touch / reduced-motion.
export default function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 350, damping: 28, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 350, damping: 28, mass: 0.4 })

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return
    setEnabled(true)

    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const t = e.target as HTMLElement
      setHovering(!!t.closest('a, button, [data-cursor="hover"]'))
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden lg:block"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        className="rounded-full border border-champagne"
        animate={{
          width: hovering ? 40 : 9,
          height: hovering ? 40 : 9,
          x: hovering ? -20 : -4.5,
          y: hovering ? -20 : -4.5,
          borderWidth: hovering ? 1 : 0,
          backgroundColor: hovering ? 'rgba(198,169,107,0)' : 'rgba(198,169,107,0.9)',
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      />
    </motion.div>
  )
}
