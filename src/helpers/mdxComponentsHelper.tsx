import React, { useMemo } from 'react'
import { StyleSheet, View, Text as RNText } from 'react-native'
import { Text } from '../components'
import { openLink } from '../constants'

export const RenderParagraph = ({ children }) => {
  const getTexts = useMemo(() => {
    switch (true) {
      case typeof children === 'string':
        return <Text p text={children} />
      case Array.isArray(children):
        return children.map((item: any, index: number) => {
          if (typeof item === 'string') {
            return <Text key={index} p text={item} />
          } else {
            const { children, originalType, href } = item.props || {}
            const isBold = originalType === 'strong'
            const isItalic = originalType === 'em'
            const isLink = originalType === 'a'
            return (
              <Text
                p
                onPress={href && openLink(href)}
                key={index}
                bold={isBold}
                italic={isItalic}
                isLink={isLink}
                text={children}
              />
            )
          }
        })
      case children !== null && typeof children === 'object':
        const { children: text, originalType, href } = children.props || {}
        const isBold = originalType === 'strong'
        const isItalic = originalType === 'em'
        const isLink = originalType === 'a'
        return (
          <Text
            p
            onPress={href && openLink(href)}
            bold={isBold}
            italic={isItalic}
            isLink={isLink}
            text={text}
          />
        )
      default:
        return null
    }
  }, [children])

  return <RNText>{getTexts}</RNText>
}
