import { store } from '../store'
import {
  clearSteps,
  clearStepsAndSaveHistory,
  decrementCurrentStep,
  decrementSlide,
  incrementCurrentStep,
  incrementSlide,
  initHistorySteps,
  setSlide
} from '../store/FrameSlice'
import router from 'next/router'

export const navigate =
  ({ actionType, prevPage, nextPage }: navigateT) =>
  () => {
    const { dispatch } = store
    const {
      frame: { currentSlide, steps, currentStep, slideCount }
    } = store.getState()

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
        dispatch(setSlide(0))
      }
      return false
    }

    // handle toggle slide
    if (actionType === 'next') {
      if (steps.length > 0 && currentStep < steps.length - 1)
        return dispatch(incrementCurrentStep())

      dispatch(clearStepsAndSaveHistory())
      dispatch(incrementSlide())
    } else if (actionType === 'prev') {
      if (steps.length > 0 && currentStep !== 0) return dispatch(decrementCurrentStep())

      dispatch(clearSteps())
      dispatch(decrementSlide())
      dispatch(initHistorySteps())
    }
  }

export interface navigateT {
  actionType: 'next' | 'prev'
  prevPage: string
  nextPage: string
}
