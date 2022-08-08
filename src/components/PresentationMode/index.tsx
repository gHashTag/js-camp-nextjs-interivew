import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { H, W } from '../../constants'
import { MODES } from '../../store/ModeSlice'

export function PresentationMode({ mode, notes, currentSlide, children }) {
  if (mode === MODES.SPEAKER) {
    return (
      <View style={container}>
        <View style={slide}>{children}</View>
        <ScrollView style={notesContainer}>{notes[currentSlide]}</ScrollView>
      </View>
    )
  }
  return children
}

const slideWidth = W * 0.7

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: H,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  slide: {
    width: slideWidth,
    flexWrap: 'wrap',
    height: slideWidth / 1.6,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5
  },
  notesContainer: {
    marginLeft: 20,
    borderWidth: 1,
    minWidth: 220,
    height: slideWidth / 1.55,
    borderColor: '#000',
    borderRadius: 15
  }
})
const { container, slide, notesContainer } = styles
