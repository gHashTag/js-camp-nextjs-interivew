import React from 'react'
import { MDXProvider as MDXProviderReact } from '@mdx-js/react'
import componentsForMDX from '../../componentsForMDX'

export function MDXProvider({ children }) {
  return <MDXProviderReact components={componentsForMDX}>{children}</MDXProviderReact>
}
