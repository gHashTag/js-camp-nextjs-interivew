import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: initialStateT = {
  currentSlide: 0,
  currentStep: 0,
  steps: [],
  slideCount: 0
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
    },

    // slideCount
    setSlideCount: (state, action: PayloadAction<number>) => {
      state.slideCount = action.payload
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
  setSlideCount
} = frameSlice.actions

export const frameReducer = frameSlice.reducer

interface initialStateT {
  currentSlide: number
  currentStep: number
  steps: number[]
  slideCount: number
}
