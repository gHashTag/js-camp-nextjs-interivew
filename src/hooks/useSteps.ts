import { useEffect } from 'react'
import { useTypedDispatch, useTypedSelector } from '../store'
import { addStep, removeStep } from '../store/FrameSlice'

export const useSteps = (order: number) => {
  const { currentStep, steps, currentSlide } = useTypedSelector(st => st.frame)
  const dispatch = useTypedDispatch()

  useEffect(() => {
    if (!steps.includes(order)) {
      dispatch(addStep(order))
    }
    return () => {
      dispatch(removeStep(order))
    }
  }, [order, addStep, currentSlide])

  const stepIndex = steps.findIndex(step => step === order)
  const isVisible = stepIndex >= 0 && stepIndex <= currentStep

  return { isVisible }
}
