import React from 'react'
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native'
import { IconType } from 'react-icons'
import { IoBanSharp } from 'react-icons/io5'
import { useTheme } from '../../hooks'

interface ButtonVectorIconI {
  IconComponent: IconType
  size?: number
  color?: string
  onPress?: () => void
  viewStyle?: StyleProp<ViewStyle>
}

export function ButtonVectorIcon({
  IconComponent = IoBanSharp,
  onPress,
  size = 20,
  color,
  viewStyle
}: ButtonVectorIconI) {
  const {
    colors: { icon }
  } = useTheme()
  const curColor = color ? color : icon
  const defaultStyle = { width: size }

  return (
    <TouchableOpacity
      style={[defaultStyle, viewStyle]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <IconComponent size={size} color={curColor} />
    </TouchableOpacity>
  )
}
