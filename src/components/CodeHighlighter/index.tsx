import React, { useEffect, useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
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
import { useTheme } from '../../store'

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
  const { codeTheme } = useTheme()
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
          style={codeTheme}
          language={languageType || 'jsx'}
          customStyle={fullFill ? highlighter : withRadiusHighlighter}
          codeTagProps={{
            style: {
              fontFamily: 'Hack, monospace',
              fontSize: '17px',
              lineHeight: '22px'
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
    top: 15
  },
  container: {
    marginHorizontal: 15,
    backgroundColor: '#2D2D2D',
    justifyContent: 'center',
    borderRadius: 5,
    overflow: 'hidden'
  }
})
const { highlighter, btnStyle, container, withRadiusHighlighter } = styles
