import React from 'react'
import { StyleSheet, View } from 'react-native'

export const TableWrapper = ({ children }: TableWrapperT) => {
  return <View style={container}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 10
  }
})

interface TableWrapperT {
  children: JSX.Element
}

const { container } = styles
