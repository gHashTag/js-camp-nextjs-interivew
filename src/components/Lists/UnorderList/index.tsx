import React from 'react'
import { IoCaretForwardOutline } from 'react-icons/io5'
import { FlatList, StyleSheet, View } from 'react-native'
import { useTheme } from '../../../hooks'
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
    <View style={listContainer}>
      <FlatList
        data={items}
        keyExtractor={(item, index) => String(index)}
        renderItem={_renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2.5
  },
  listContainer: {
    marginLeft: 5,
    height: 'auto'
  }
})

const { itemContainer, listContainer } = styles
