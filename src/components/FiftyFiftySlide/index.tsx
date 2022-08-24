import React from 'react'
import { Image, ImageURISource, StyleSheet, View } from 'react-native'

export const FiftyFiftySlide = ({ children, imageSource }: FiftyFiftySlideT) => {
  return (
    <View style={mainContainer}>
      <Image resizeMode="cover" style={image} source={imageSource} />
      <View style={content}>{children}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'row'
  },
  image: {
    flex: 1,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20
  },
  content: {
    padding: 15,
    flex: 1
  }
})

const { mainContainer, content, image } = styles

interface FiftyFiftySlideT {
  children: JSX.Element
  imageSource: ImageURISource
}
