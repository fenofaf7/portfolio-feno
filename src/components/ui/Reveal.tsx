
import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

interface RevealProps {
    children: ReactNode
    delay?: number
    duration?: number
    direction?: 'up' | 'down' | 'left' | 'right'
    className?: string
}

export default function Reveal({
    children,
    delay = 0,
    duration = 0.6,
    direction = 'up',
    className = '',
}: RevealProps) {
    const shouldReduceMotion = useReducedMotion()

    const offsets = {
        up: { x: 0, y: 20 },
        down: { x: 0, y: -20 },
        left: { x: 20, y: 0 },
        right: { x: -20, y: 0 },
    }

    return (
        <motion.div
            className={className}
            initial={
                shouldReduceMotion
                    ? false
                    : { opacity: 0, ...offsets[direction] }
            }
            whileInView={
                shouldReduceMotion
                    ? undefined
                    : { opacity: 1, x: 0, y: 0 }
            }
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: shouldReduceMotion ? 0 : duration,
                delay: shouldReduceMotion ? 0 : delay,
                ease: 'easeOut',
            }}
        >
            {children}
        </motion.div>
    )
}
