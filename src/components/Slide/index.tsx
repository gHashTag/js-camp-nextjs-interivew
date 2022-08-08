import React from 'react'
import { StyleSheet, View } from 'react-native'
import { H, W } from '../../constants'

export function Slide({ children, id }: SlideT) {
  return (
    <View key={id} style={container}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: W,
    height: H
  }
})

const { container } = styles

interface SlideT {
  children?: JSX.Element
  id?: string
}
