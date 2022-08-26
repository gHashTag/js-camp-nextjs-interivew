import { makeVar } from '@apollo/client'

const initialState: frameStateT = {
  currentSlide: 0,
  currentStep: 0,
  steps: [],
  slideCount: 0,
  stepHistory: []
}

export const frameState = makeVar(initialState)

export const frameActions = {
  // currentSlide
  setSlide: (currentSlide: number) => {
    frameState({ ...frameState(), currentSlide })
  },
  incrementSlide: () => {
    const prev = frameState()
    frameState({ ...prev, currentSlide: prev.currentSlide + 1 })
  },
  decrementSlide: () => {
    const prev = frameState()
    frameState({ ...prev, currentSlide: prev.currentSlide - 1 })
  },

  // currentStep
  setCurrentStep: (currentStep: number) => {
    frameState({ ...frameState(), currentStep })
  },
  incrementCurrentStep: () => {
    const prev = frameState()
    frameState({ ...prev, currentStep: prev.currentStep + 1 })
  },
  decrementCurrentStep: () => {
    const prev = frameState()
    frameState({ ...prev, currentStep: prev.currentStep - 1 })
  },

  // steps
  addStep: (step: number) => {
    const prev = frameState()
    frameState({ ...prev, steps: [...prev.steps, step] })
  },
  removeStep: (step: number) => {
    const prev = frameState()
    frameState({ ...prev, steps: prev.steps.filter(a => a !== step) })
  },
  clearSteps: () => {
    const prev = frameState()
    frameState({
      ...prev,
      steps: [],
      stepHistory: prev.stepHistory.filter(a => a.slideId !== prev.currentSlide),
      currentStep: 0
    })
  },

  // slideCount
  setSlideCount: (slideCount: number) => {
    frameState({ ...frameState(), slideCount })
  },
  clearStepsAndSaveHistory: () => {
    const prev = frameState()

    const newStepHistory = prev.stepHistory.filter(a => a.slideId !== prev.currentSlide)
    const stepHistory =
      prev.steps.length > 0
        ? [
            ...newStepHistory,
            {
              slideId: prev.currentSlide,
              step: prev.steps.reverse()[0]
            }
          ]
        : newStepHistory

    frameState({
      ...prev,
      stepHistory,
      steps: [],
      currentStep: 0
    })
  },
  initHistorySteps: () => {
    const prev = frameState()

    const { slideId, step } =
      prev.stepHistory.find(a => a.slideId === prev.currentSlide) || {}

    if (slideId && step > 0) {
      frameState({
        ...prev,
        stepHistory: prev.stepHistory.filter(a => a.slideId !== slideId),
        currentStep: step
      })
    }
  }
}

export const {
  setSlide,
  incrementSlide,
  decrementSlide,
  setCurrentStep,
  incrementCurrentStep,
  decrementCurrentStep,
  addStep,
  removeStep,
  clearSteps,
  setSlideCount,
  clearStepsAndSaveHistory,
  initHistorySteps
} = frameActions

export interface frameStateT {
  currentSlide: number
  currentStep: number
  steps: number[]
  slideCount: number
  stepHistory: stepHistory[]
}

type stepHistory = {
  slideId: number
  step: number
}
