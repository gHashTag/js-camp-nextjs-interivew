import { usePersistReactiveVar } from './usePersistReactiveVar'
import { useEffect } from 'react'
import { addStep, frameState, removeStep } from '../store/Frame'

export const useSteps = (order: number) => {
  const { currentStep, steps, currentSlide } = usePersistReactiveVar(
    frameState,
    'frameState'
  )

  useEffect(() => {
    if (!steps.includes(order)) {
      addStep(order)
    }
    return () => {
      removeStep(order)
    }
  }, [order, addStep, currentSlide])

  const stepIndex = steps.findIndex(step => step === order)
  const isVisible = stepIndex >= 0 && stepIndex <= currentStep

  return { isVisible }
}
