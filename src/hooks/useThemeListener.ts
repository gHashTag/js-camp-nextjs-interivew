import { useEffect } from 'react'
import { useColorScheme } from 'react-native'
import { toggleTheme } from '../store/Theme'

export const useThemeListener = () => {
  const isDark = useColorScheme() === 'dark'
  useEffect(() => {
    toggleTheme(isDark ? 'dark' : 'light')
  }, [isDark])
}
