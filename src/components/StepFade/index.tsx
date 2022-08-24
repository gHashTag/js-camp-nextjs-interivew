import React from 'react'
import { motion } from 'framer-motion'
import { useSteps } from '../../hooks/useSteps'

export function StepFade({ children, order, duration = 1 }: StepT) {
  const { isVisible } = useSteps(order)
  const opacity = isVisible ? 1 : 0

  return (
    <motion.div animate={{ opacity }} transition={{ duration }} initial={{ opacity: 0 }}>
      {children}
    </motion.div>
  )
}

interface StepT {
  duration: number
  order: number
  children: JSX.Element | string
}
