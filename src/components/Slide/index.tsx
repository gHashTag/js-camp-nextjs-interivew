import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useTheme } from '../../store'
import Image from 'next/image'

export function Slide({ children }: SlideT) {
  const {
    colors: { background },
    backgroundImage
  } = useTheme()

  return (
    <View style={{ ...container, backgroundColor: background }}>
      <Image objectFit="cover" layout="fill" style={slideImage} src={backgroundImage} />
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%'
  },
  slideImage: {
    position: 'absolute',
    zIndex: -10,
    opacity: 0.5
  }
})

const { container, slideImage } = styles

interface SlideT {
  children?: JSX.Element | JSX.Element[] | string
}
