import React from 'react'

export function Steps({ children }) {
  const renderItems = (element: JSX.Element, index: number) => (
    <element.type key={index} order={index} {...element.props}>
      {element.props.children}
    </element.type>
  )

  return <div>{children.map(renderItems)}</div>
}
