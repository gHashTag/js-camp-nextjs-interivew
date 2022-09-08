import React, { useMemo } from 'react'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import { addAlphaToHex } from '../../constants'
import { RenderParagraph } from '../../helpers/mdxComponentsHelper'
import { useTheme } from '../../hooks'
import { Text } from '../TextComponents'

const BORDER_WIDTH = 1

export const TableRow = ({ tr }: TableT) => {
  const {
    colors: { border: borderColor }
  } = useTheme()

  return (
    <View style={[container, { borderColor }]}>
      {tr.map((item, id) => (
        <RenderItem key={id} item={item} />
      ))}
    </View>
  )
}

const RenderItem = ({ item }: any) => {
  const { align, originalType, children } = item?.props

  const isTableHead = originalType === 'th'
  const {
    colors: { border: borderColor, icon, evenRows }
  } = useTheme()
  const cellStyle: StyleProp<ViewStyle> = { alignItems: 'center', borderColor }

  switch (align) {
    case 'left':
      cellStyle.alignItems = 'flex-start'
      break
    case 'right':
      cellStyle.alignItems = 'flex-end'
      break
  }

  const backgroundColor = useMemo(() => {
    if (isTableHead) {
      return addAlphaToHex(icon, 0.3)
    }
    return addAlphaToHex(evenRows, 0.3)
  }, [isTableHead])

  return (
    <View style={[cell, cellStyle, { backgroundColor }]}>
      <View style={subCellContainer}>
        {isTableHead ? (
          <Text text={children} h5 withoutMargin />
        ) : (
          RenderParagraph({ children: item })
        )}
      </View>
    </View>
  )
}

interface TableT {
  tr: JSX.Element[]
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopWidth: BORDER_WIDTH,
    borderLeftWidth: BORDER_WIDTH
  },
  cell: {
    flex: 1,
    borderRightWidth: BORDER_WIDTH,
    borderBottomWidth: BORDER_WIDTH
  },
  subCellContainer: {
    padding: 7
  },
  headerBackground: {
    opacity: 0.3,
    position: 'absolute',
    width: '100%',
    height: '100%'
  }
})

const { container, cell, headerBackground, subCellContainer } = styles
