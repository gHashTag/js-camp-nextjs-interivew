import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const MODES = {
  SLIDESHOW: 'slideshow',
  SPEAKER: 'speaker'
}

const initialState: initialStateT = {
  mode: MODES.SLIDESHOW
}

export const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<string>) => {
      state.mode = action.payload
    }
  }
})

export const { setMode } = modeSlice.actions

export const modeReducer = modeSlice.reducer

interface initialStateT {
  mode: string
}
