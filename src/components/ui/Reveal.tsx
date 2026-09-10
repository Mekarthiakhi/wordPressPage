import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { EASE_LUX } from '../../lib/motion'

type Props = {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  once?: boolean
}

export default function Reveal({ children, delay = 0, y = 30, className, once = true }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 0.9, ease: EASE_LUX, delay }}
    >
      {children}
    </motion.div>
  )
}
