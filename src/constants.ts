import { Linking } from 'react-native'

export const GREEN = '#2ECC71'
export const RED = 'rgb(255, 69, 58)'
export const WHITE = '#fff'
export const BLACK = '#17191A'

export const addAlphaToHex = (color: string, opacity: number) => {
  const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255)
  return color + _opacity.toString(16).toUpperCase()
}

export const openLink = (href: string) => () => {
  Linking.openURL(href)
}
