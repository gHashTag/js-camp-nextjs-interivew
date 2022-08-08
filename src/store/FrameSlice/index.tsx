import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: initialStateT = {
  currentSlide:
    process.browser && window.location.hash
      ? parseInt(window.location.hash.replace('#', ''))
      : 0,
  currentStep: 0,
  steps: []
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
      state.steps = []
      state.currentStep = 0
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
  clearSteps
} = frameSlice.actions

export const frameReducer = frameSlice.reducer

interface initialStateT {
  currentSlide: number
  currentStep: number
  steps: number[]
}
