import { motion } from 'motion/react'

/** Smooth editorial scroll reveal — single use per block, optional stagger via `delay`. */
const ease = [0.22, 0.61, 0.36, 1]

export default function Reveal({ children, className = '', delay = 0, y = 22 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-36px 0px -8% 0px' }}
      transition={{ duration: 0.58, ease, delay }}
    >
      {children}
    </motion.div>
  )
}
