import React, { useEffect, useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { StyleProp, StyleSheet, useColorScheme, View, ViewStyle } from 'react-native'
import copy from 'copy-to-clipboard'
import { ButtonVectorIcon } from '../'
import { GREEN, H } from '../../constants'
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

  const isDark = useColorScheme() === 'dark'
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
  return (
    <View style={[fullFill ? fullFillContainer : container, viewStyle]}>
      <View>
        <SyntaxHighlighter
          style={isDark ? tomorrow : undefined}
          language={languageType || 'jsx'}
          customStyle={highlighter}
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
        <ButtonVectorIcon
          onPress={handleCopy}
          size={25}
          color={isCopy ? GREEN : undefined}
          viewStyle={btnStyle}
          IconComponent={isCopy ? IoCheckmarkDoneOutline : IoCopyOutline}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  highlighter: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingRight: 0,
    paddingLeft: 10
  },
  btnStyle: {
    position: 'absolute',
    right: 13,
    top: 20
  },
  container: {
    backgroundColor: 'red',
    marginHorizontal: 30,
    flex: 1,
    justifyContent: 'center'
  },
  fullFillContainer: {
    height: H,
    width: '100%'
  }
})
const { highlighter, btnStyle, container, fullFillContainer } = styles
