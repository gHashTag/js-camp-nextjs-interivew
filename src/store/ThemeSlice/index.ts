import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Appearance } from 'react-native'
import { ColorsT, themes, allThemes } from './defaultThemes'

const initialState: initialStateT = {
  colors: Appearance.getColorScheme() === 'dark' ? themes.dark : themes.light
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    // currentSlide
    toggleTheme: (state, action: PayloadAction<allThemes>) => {
      const key = action.payload
      state.colors = themes[key]
    },
    setCustomTheme: (state, action: PayloadAction<ColorsT>) => {
      const colors = action.payload
      state.colors = colors
    }
  }
})

export const { toggleTheme, setCustomTheme } = themeSlice.actions

export const themeReducer = themeSlice.reducer

interface initialStateT {
  colors: ColorsT
}
