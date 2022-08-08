import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTypedDispatch, useTypedSelector } from '../../store'
import { addStep, removeStep } from '../../store/FrameSlice'

const TRANSLATE_Y_DISTANCE = '-1em'

export function Step({ children, order, duration = 0.5 }) {
  const { currentStep, steps } = useTypedSelector(st => st.frame)
  const dispatch = useTypedDispatch()

  useEffect(() => {
    if (!steps.includes(order)) {
      dispatch(addStep(order))
    }
    return () => {
      dispatch(removeStep(order))
    }
  }, [order, addStep])

  const stepIndex = steps.findIndex(step => step === order)
  const isVisible = stepIndex >= 0 && stepIndex <= currentStep
  const opacity = isVisible ? 1 : 0
  const translateY = isVisible ? 0 : TRANSLATE_Y_DISTANCE

  return (
    <motion.div
      animate={{ opacity, translateY }}
      transition={{ duration }}
      initial={{ opacity: 0, translateY: TRANSLATE_Y_DISTANCE }}
    >
      {children}
    </motion.div>
  )
}
