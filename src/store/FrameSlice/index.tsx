import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: initialStateT = {
  currentSlide: 0,
  currentStep: 0,
  steps: [],
  slideCount: 0,
  stepHistory: []
}

export const frameSlice = createSlice({
  name: 'frame',
  initialState,
  reducers: {
    // currentSlide
    setSlide: (state, action: PayloadAction<number>) => {
      state.currentSlide = action.payload
    },
    incrementSlide: state => {
      state.currentSlide = state.currentSlide + 1
    },
    decrementSlide: state => {
      state.currentSlide = state.currentSlide - 1
    },

    // currentStep
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload
    },
    incrementCurrentStep: state => {
      state.currentStep = state.currentStep + 1
    },
    decrementCurrentStep: state => {
      state.currentStep = state.currentStep - 1
    },

    // steps
    addStep: (state, action: PayloadAction<number>) => {
      const id = action.payload
      state.steps.push(id)
    },
    removeStep: (state, action: PayloadAction<number>) => {
      const id = action.payload
      state.steps = state.steps.filter(step => step !== id)
    },
    clearSteps: state => {
      state.stepHistory = state.stepHistory.filter(a => a.slideId !== state.currentSlide)
      state.steps = []
      state.currentStep = 0
    },

    // slideCount
    setSlideCount: (state, action: PayloadAction<number>) => {
      state.slideCount = action.payload
    },
    clearStepsAndSaveHistory: state => {
      state.stepHistory = state.stepHistory.filter(a => a.slideId !== state.currentSlide)
      if (state.steps.length > 0) {
        state.stepHistory.push({
          slideId: state.currentSlide,
          step: state.steps.reverse()[0]
        })
      }

      state.steps = []
      state.currentStep = 0
    },
    initHistorySteps: state => {
      const { slideId, step } =
        state.stepHistory.find(a => a.slideId === state.currentSlide) || {}
      if (slideId && step > 0) {
        state.stepHistory.filter(a => a.slideId !== slideId)
        state.currentStep = step
      }
    }
  }
})

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
} = frameSlice.actions

export const frameReducer = frameSlice.reducer

interface initialStateT {
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
