import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { RenderParagraph } from '../../../helpers/mdxComponentsHelper'
import { useTheme } from '../../../store'
import { Space } from '../../Space'
import { Text } from '../../TextComponents'

export const OrderList = ({ items }) => {
  const {
    colors: { card }
  } = useTheme()
  const _renderItem = ({ item, index }) => {
    return (
      <View style={itemContainer}>
        <View style={{ ...orderCircle, borderColor: card }}>
          <Text p textStyle={{ color: card }} text={index + 1} />
        </View>
        <Space width={10} />
        <RenderParagraph>{item?.props?.children || item}</RenderParagraph>
      </View>
    )
  }

  return (
    <FlatList
      style={listContainer}
      data={items}
      keyExtractor={(item, index) => String(index)}
      renderItem={_renderItem}
    />
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3
  },
  listContainer: {
    marginLeft: 5
  },
  orderCircle: {
    borderRadius: 30,
    width: 25,
    height: 25,
    padding: 5,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const { itemContainer, listContainer, orderCircle } = styles
