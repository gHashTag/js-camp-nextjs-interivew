import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ColorsT, themes, allThemes, CodeThemes, allCodeThemes } from './defaultThemes'
import { HYDRATE } from 'next-redux-wrapper'
import { AppState } from '../'

const initialState: initialStateT = {
  colors: themes.dark,
  backgroundImage: require('../../../public/images/backgroundImage.png'),
  codeTheme: CodeThemes.tomorrow
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
    },
    setCodeTheme: (state, action: PayloadAction<allCodeThemes>) => {
      const themeKey = action.payload
      state.codeTheme = CodeThemes[themeKey]
    }
  },
  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.theme
      }
    }
  }
})

export const { toggleTheme, setCustomTheme, setCodeTheme } = themeSlice.actions

export const themeReducer = themeSlice.reducer

export const selectThemeState = (state: AppState) => state.theme

interface initialStateT {
  colors: ColorsT
  backgroundImage: string
  codeTheme: any
}
