import React from 'react'
import styled from 'styled-components'

const StyledSlide = styled.div`
  width: 100%;
`

export function Slide({ children, id, className }: SlideT) {
  return (
    <StyledSlide id={id} className={className}>
      {children}
    </StyledSlide>
  )
}

interface SlideT {
  children?: JSX.Element
  id?: string
  className?: string
}
