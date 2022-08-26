import { makeVar } from '@apollo/client'
import { ColorsT, themes, allThemes, CodeThemes, allCodeThemes } from './defaultThemes'

const initialState: themeStateT = {
  colors: themes.dark,
  backgroundImage: require('../../../public/images/backgroundImage.png'),
  codeTheme: CodeThemes.tomorrow
}

export const themeState = makeVar(initialState)

export const themeActions = {
  toggleTheme: (key: allThemes) => {
    themeState({ ...themeState(), colors: themes[key] })
  },
  setCustomTheme: (colors: ColorsT) => {
    themeState({ ...themeState(), colors })
  },
  setCodeTheme: (themeKey: allCodeThemes) => {
    themeState({ ...themeState(), codeTheme: CodeThemes[themeKey] })
  }
}

export const { toggleTheme, setCustomTheme, setCodeTheme } = themeActions

export interface themeStateT {
  colors: ColorsT
  backgroundImage: string
  codeTheme: any
}
