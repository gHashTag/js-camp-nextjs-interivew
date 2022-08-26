import React from 'react'
import SlidePage from './layouts/SlidePage'
import {
  Steps,
  StepTransition,
  ButtonVectorIcon,
  CodeHighlighter,
  Text,
  Blockquote,
  Img,
  StepFade,
  TableRow,
  TableWrapper
} from './components'
import { MDXProviderComponentsProp } from '@mdx-js/react'
import { OrderList, UnorderList } from './components/Lists'
import { RenderParagraph } from './helpers/mdxComponentsHelper'
import { FiftyFiftySlide } from './components/FiftyFiftySlide'

const componentsForMDX: MDXProviderComponentsProp = {
  h1: ({ children }) => <Text h1 text={children} />,
  h2: ({ children }) => <Text h2 text={children} />,
  h3: ({ children }) => <Text h3 text={children} />,
  h4: ({ children }) => <Text h4 text={children} />,
  h5: ({ children }) => <Text h5 text={children} />,
  h6: ({ children }) => <Text h6 text={children} />,
  p: RenderParagraph,
  code: props => <CodeHighlighter {...props} />,
  a: props => <Text isLink text={props.children} />,
  ol: ({ children }) => <OrderList items={children} />,
  ul: ({ children }) => <UnorderList items={children} />,
  img: props => <Img {...props} />,
  tr: props => {
    return <TableRow tr={props.children} />
  },
  table: props => <TableWrapper {...props} />,
  FiftyFiftySlide: props => <FiftyFiftySlide {...props} />,
  SlidePage: props => <SlidePage {...props} />,
  StepTransition: props => <StepTransition {...props} />,
  StepFade: props => <StepFade {...props} />,
  Steps: props => <Steps {...props} />,
  blockquote: ({ children }) => <Blockquote text={children} />,
  btnIcon: props => <ButtonVectorIcon {...props} />
}
export default componentsForMDX
