import { useEffect } from 'react'
import { useColorScheme } from 'react-native'
import { toggleTheme } from '../store/ThemeSlice'
import { useTypedDispatch } from '../store'

export const useThemeListener = () => {
  const isDark = useColorScheme() === 'dark'
  const dispatch = useTypedDispatch()
  useEffect(() => {
    dispatch(toggleTheme(isDark ? 'dark' : 'light'))
  }, [isDark])
}
