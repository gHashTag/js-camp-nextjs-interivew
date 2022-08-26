import { usePersistReactiveVar } from './usePersistReactiveVar'
import { themeState } from '../store'

export const useTheme = () => {
  return usePersistReactiveVar(themeState, 'themeState')
}
