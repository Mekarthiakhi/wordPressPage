import type { Variants } from 'framer-motion'

export const EASE_LUX = [0.16, 1, 0.3, 1] as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE_LUX },
  },
}

export const stagger = (delayChildren = 0.1, staggerChildren = 0.12): Variants => ({
  hidden: {},
  show: {
    transition: { delayChildren, staggerChildren },
  },
})

export const revealMask: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: EASE_LUX },
  },
}
