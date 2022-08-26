import React from 'react'
import { StyleProp, TextStyle, Text as RNText, TextProps, StyleSheet } from 'react-native'
import { useTheme } from '../../../hooks'

const styles = StyleSheet.create({
  h1Style: {
    fontSize: 36,
    marginVertical: 16
  },
  h2Style: {
    fontSize: 28,
    marginVertical: 15
  },
  h3Style: {
    fontSize: 23,
    marginVertical: 14
  },
  h4Style: {
    fontSize: 20,
    marginVertical: 12
  },
  h5Style: {
    fontSize: 17,
    marginVertical: 10
  },
  h6Style: {
    fontSize: 15,
    marginVertical: 10
  },
  paragraphStyle: {
    fontSize: 13,
    lineHeight: 20,
    fontFamily: 'Merriweather'
  },
  linkStyle: {
    fontSize: 13,
    lineHeight: 20,
    fontFamily: 'Merriweather',
    textDecorationLine: 'underline'
  },
  headersStyle: {
    fontWeight: 'bold',
    fontFamily: 'Merriweather'
  },
  bolderStyle: {
    fontWeight: 'bold'
  },
  italicStyle: {
    fontStyle: 'italic'
  },
  centeredText: {
    textAlign: 'center'
  },
  withoutMarginStyle: {
    marginVertical: 0
  }
})

export type FontType = {
  h1?: boolean
  h2?: boolean
  h3?: boolean
  h4?: boolean
  h5?: boolean
  h6?: boolean
  p?: boolean
  isLink?: boolean
  bold?: boolean
  italic?: boolean
  withoutMargin?: boolean
}

export interface TextT extends TextProps, FontType {
  text?: string | JSX.Element
  textStyle?: StyleProp<TextStyle>
  centerText?: boolean
}

export const Text = ({
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  isLink,
  text,
  textStyle,
  centerText,
  bold,
  italic,
  withoutMargin,
  ...otherProp
}: TextT) => {
  const {
    colors: { paragraph, title, link }
  } = useTheme()

  const isHeader = h1 || h2 || h3 || h4 || h5 || h6
  const color = isHeader || bold ? title : paragraph
  const linkColor = { textDecorationColor: link, color: link }

  return (
    <RNText
      style={[
        h1 && h1Style,
        h2 && h2Style,
        h3 && h3Style,
        h4 && h4Style,
        h5 && h5Style,
        h6 && h6Style,
        p && paragraphStyle,
        isHeader && headersStyle,
        centerText && centeredText,
        { color },
        isLink && { ...linkStyle, ...linkColor },
        bold && bolderStyle,
        italic && italicStyle,
        withoutMargin && withoutMarginStyle,
        textStyle
      ]}
      {...otherProp}
    >
      {text || ' '}
    </RNText>
  )
}

const {
  h1Style,
  h2Style,
  h3Style,
  h4Style,
  h5Style,
  h6Style,
  paragraphStyle,
  linkStyle,
  headersStyle,
  bolderStyle,
  italicStyle,
  centeredText,
  withoutMarginStyle
} = styles
