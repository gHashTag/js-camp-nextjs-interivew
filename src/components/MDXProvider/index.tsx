import React from 'react'
import { MDXProvider as MDXProviderReact } from '@mdx-js/react'
import componentsForMDX from '../../componentsForMDX'
import { useThemeListener } from '../../hooks'

export function MDXProvider({ children }) {
  useThemeListener()
  return <MDXProviderReact components={componentsForMDX}>{children}</MDXProviderReact>
}
