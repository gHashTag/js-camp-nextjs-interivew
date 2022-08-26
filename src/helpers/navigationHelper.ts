import {
  clearSteps,
  clearStepsAndSaveHistory,
  decrementCurrentStep,
  decrementSlide,
  frameStateT,
  incrementCurrentStep,
  incrementSlide,
  initHistorySteps,
  setSlide
} from '../store/Frame'
import router from 'next/router'

export const navigate =
  ({ actionType, prevPage, nextPage, frame }: navigateT) =>
  () => {
    const { currentSlide, steps, currentStep, slideCount } = frame

    // Handle Previous page
    if (actionType === 'prev' && currentSlide === 0) {
      if (router.query && router.pathname) {
        if (router.pathname.length > 1 && prevPage) {
          router.replace(prevPage)
        }
      }
      return false
    }

    // Handle next page
    if (actionType === 'next' && currentSlide >= slideCount) {
      if (router.query && router.pathname && nextPage) {
        router.replace(nextPage)
        setSlide(0)
      }
      return false
    }

    // handle toggle slide
    if (actionType === 'next') {
      if (steps.length > 0 && currentStep < steps.length - 1)
        return incrementCurrentStep()

      clearStepsAndSaveHistory()
      incrementSlide()
    } else if (actionType === 'prev') {
      if (steps.length > 0 && currentStep !== 0) return decrementCurrentStep()

      clearSteps()
      decrementSlide()
      initHistorySteps()
    }
  }

export interface navigateT {
  actionType: 'next' | 'prev'
  prevPage: string
  nextPage: string
  frame: frameStateT
}
