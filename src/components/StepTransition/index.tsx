import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { useSteps } from '../../hooks/useSteps'

const TRANS_DISTANCE = '10px'

export function StepTransition({
  children,
  order,
  duration = 0.5,
  start = 'down'
}: StepT) {
  const { isVisible } = useSteps(order)

  const distance = useMemo(() => {
    if (!isVisible) {
      const translate = { translateY: '0px', translateX: '0px' }
      switch (start) {
        case 'down':
          translate.translateY = TRANS_DISTANCE
          break
        case 'top':
          translate.translateY = '-' + TRANS_DISTANCE
          break
        case 'left':
          translate.translateX = '-' + TRANS_DISTANCE
          break
        case 'right':
          translate.translateX = TRANS_DISTANCE
          break
      }
      return translate
    } else {
      return { translateY: '0px', translateX: '0px' }
    }
  }, [isVisible])

  const opacity = isVisible ? 1 : 0

  return (
    <motion.div
      animate={{ opacity, ...distance }}
      transition={{ duration }}
      initial={{ opacity: 0, translateY: '0px', translateX: '0px' }}
    >
      {children}
    </motion.div>
  )
}

interface StepT {
  start: 'down' | 'top' | 'left' | 'right'
  duration: number
  order: number
  children: JSX.Element | string
}
