import React, { useEffect, useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import {
  ScrollView,
  StyleProp,
  StyleSheet,
  useWindowDimensions,
  View,
  ViewStyle
} from 'react-native'
import copy from 'copy-to-clipboard'
import { ButtonVectorIcon } from '../'
import { GREEN, WHITE } from '../../constants'
import { IoCheckmarkDoneOutline, IoCopyOutline } from 'react-icons/io5'

interface CodeHighlighterT {
  children: string
  className?: string
  viewStyle?: StyleProp<ViewStyle>
  fullFill?: boolean
}

export function CodeHighlighter(props: CodeHighlighterT) {
  const { children, className: language, viewStyle, fullFill = false } = props
  const languageType = language.replace('language-', '')
  const [isCopy, setIsCopy] = useState<boolean>(false)

  useEffect(() => {
    if (isCopy === true) {
      setTimeout(() => setIsCopy(false), 2000)
    }
  }, [isCopy])

  const lines = children.trim().split(/\r?\n/)
  const lastIndex = lines.length - 1
  const TextWithPadding = lines.reduce((pr, cur, id) => {
    const isEnd = lastIndex === id
    const suffix = isEnd ? '        ' : '        \n'
    return pr + cur + suffix
  }, '')

  const handleCopy = () => {
    copy(children)
    setIsCopy(true)
  }

  const { width, height } = useWindowDimensions()
  const maxHeight = height / 1.5

  const fullContainerStyle = { width, height, backgroundColor: '#2D2D2D' }
  const containerStyle = { ...container, maxHeight }

  return (
    <View style={[fullFill ? fullContainerStyle : containerStyle, viewStyle]}>
      <ScrollView bounces={false}>
        <SyntaxHighlighter
          style={tomorrow}
          language={languageType || 'jsx'}
          customStyle={fullFill ? highlighter : withRadiusHighlighter}
          codeTagProps={{
            style: {
              // @ts-ignore
              'font-family': 'Hack, monospace',
              'font-size': '18px',
              'line-height': '22px'
            }
          }}
        >
          {TextWithPadding}
        </SyntaxHighlighter>
      </ScrollView>
      <ButtonVectorIcon
        onPress={handleCopy}
        size={25}
        color={isCopy ? GREEN : WHITE}
        viewStyle={btnStyle}
        IconComponent={isCopy ? IoCheckmarkDoneOutline : IoCopyOutline}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  highlighter: {
    paddingLeft: 10,
    margin: 0
  },
  withRadiusHighlighter: {
    paddingVertical: 10,
    paddingLeft: 10,
    margin: 0
  },
  btnStyle: {
    position: 'absolute',
    right: 13,
    top: 20
  },
  container: {
    marginHorizontal: 30,
    backgroundColor: '#2D2D2D',
    justifyContent: 'center',
    borderRadius: 5,
    overflow: 'hidden'
  }
})
const { highlighter, btnStyle, container, withRadiusHighlighter } = styles
