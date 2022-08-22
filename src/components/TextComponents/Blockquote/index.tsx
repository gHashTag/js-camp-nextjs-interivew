import React from 'react'
import { StyleSheet, View } from 'react-native'
import { addAlphaToHex } from '../../../constants'
import { useTheme } from '../../../store'
import { Text, TextT } from '../Text'

export const Blockquote = (props: TextT) => {
  const {
    colors: { card, importantInfo }
  } = useTheme()

  const colors = {
    backgroundColor: addAlphaToHex(card, 0.15),
    borderLeftColor: importantInfo
  }

  return (
    <View style={[container, colors]}>
      <Text {...props} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 0,
    borderLeftWidth: 2,
    padding: 10
  }
})
const { container } = styles
