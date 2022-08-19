import React from 'react'
import { StyleSheet, View } from 'react-native'

export function Slide({ children, id }: SlideT) {
  return <View style={{ ...container }}>{children}</View>
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
  id?: string
}
