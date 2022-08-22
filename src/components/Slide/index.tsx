import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useTheme } from '../../store'

export function Slide({ children }: SlideT) {
  const {
    colors: { background }
  } = useTheme()
  return <View style={{ ...container, backgroundColor: background }}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%'
  }
})

const { container } = styles

interface SlideT {
  children?: JSX.Element
}
