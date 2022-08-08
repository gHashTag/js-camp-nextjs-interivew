import React, { useEffect } from 'react'
import { MDXProvider as MDXProviderReact } from '@mdx-js/react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import okaidia from 'react-syntax-highlighter/dist/cjs/styles/prism/okaidia'
import SlidePage from '../../layouts/SlidePage'
import { Steps, Step, SpeakerNotes } from '../'
import { useRouter } from 'next/router'
import { useTypedDispatch } from '../../store'
import { setMode } from '../../store/ModeSlice'
import { Text, View } from 'react-native'

export function MDXProvider({ children }) {
  const router = useRouter()
  const newMode = router.query.mode
  const dispatch = useTypedDispatch()

  useEffect(() => {
    if (newMode && typeof newMode === 'string') dispatch(setMode(newMode))
  }, [newMode])

  return (
    // Config located in components because Step component no work in outside variable
    <MDXProviderReact
      components={{
        h1: props => <h1 {...props} />,
        pre: ({ children }: preT) => children,
        code: props => {
          const { className } = props
          const language = className.replace('language-', '')
          return (
            <SyntaxHighlighter
              className={className}
              language={language}
              style={okaidia}
              {...props}
            />
          )
        },
        SlidePage,
        SpeakerNotes,
        Step,
        Steps,
        blockquote: props => (
          <View style={{ flexDirection: 'row' }}>
            <Text>{props.children}</Text>
          </View>
        )
      }}
    >
      {children}
    </MDXProviderReact>
  )
}

interface preT {
  children: JSX.Element
}
