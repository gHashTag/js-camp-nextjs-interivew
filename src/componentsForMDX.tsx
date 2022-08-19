import React from 'react'
import SlidePage from './layouts/SlidePage'
import { Steps, Step, ButtonVectorIcon, CodeHighlighter } from './components'
import { Text, View } from 'react-native'

const componentsForMDX = {
  h1: props => <h1 {...props} />,
  code: props => <CodeHighlighter {...props} />,
  SlidePage: props => <SlidePage {...props} />,
  Step: props => <Step {...props} />,
  Steps: props => <Steps {...props} />,
  blockquote: props => (
    <View style={{ flexDirection: 'row' }}>
      <Text>{props.children}</Text>
    </View>
  ),
  btnIcon: props => <ButtonVectorIcon {...props} />
}
export default componentsForMDX
