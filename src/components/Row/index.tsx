import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Row = ({ children }) => {
  return <View style={style.children}>{children}</View>
}

const style = StyleSheet.create({
  children: {
    flexDirection: 'row'
  }
})
