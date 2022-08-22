import React from 'react'
import { IoCaretForwardOutline } from 'react-icons/io5'
import { FlatList, StyleSheet, View } from 'react-native'
import { useTheme } from '../../../store'
import { Space } from '../../Space'
import { Text } from '../../TextComponents'

export const UnorderList = ({ items }) => {
  const {
    colors: { card }
  } = useTheme()
  const _renderItem = ({ item, index }) => {
    return (
      <View style={itemContainer}>
        <IoCaretForwardOutline size={10} color={card} />
        <Space width={5} />
        <Text p text={item} />
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
    marginVertical: 2.5
  },
  listContainer: {
    marginLeft: 5
  }
})

const { itemContainer, listContainer } = styles
