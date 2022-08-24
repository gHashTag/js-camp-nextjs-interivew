import React, { useState } from 'react'
import {
  useWindowDimensions,
  Image as RNImage,
  StyleSheet,
  ImageURISource
} from 'react-native'

export const Img = ({ src, size = 'small' }: ImgT) => {
  const { height: winHeight } = useWindowDimensions()
  const [aspectRatio, setAspectRatio] = useState(0)
  const curSize = size === 'fill' ? winHeight : sizes[size]

  const img = new Image()
  img.onload = () => {
    const ratio = img.width / img.height
    if (aspectRatio !== ratio) {
      setAspectRatio(ratio)
    }
  }
  img.src = src.uri

  const imageSize = {
    height: curSize,
    width: curSize * aspectRatio
  }
  return <RNImage resizeMode="contain" style={[styles.image, imageSize]} source={src} />
}

interface ImgT {
  src: ImageURISource
  size: 'small' | 'medium' | 'big' | 'fill'
}

const sizes = {
  small: 250,
  medium: 400,
  big: 500
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 10
  }
})
