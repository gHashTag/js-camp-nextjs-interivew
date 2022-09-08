import React, { memo, useCallback, useState } from 'react'
import { FlatList, Pressable, StyleSheet } from 'react-native'
import { Text } from '../TextComponents'
import { Space } from '../Space'
import { IoCheckmarkCircleOutline, IoEllipseOutline } from 'react-icons/io5'
import { useTheme } from '../../hooks'

interface SelectOneManyT {
  variants: string[]
  onChange: (item: string) => void
}

export function SelectOne({ variants, onChange }: SelectOneManyT) {
  const [choice, setChoice] = useState('')

  const handleChange = useCallback(
    (changed: string) => {
      onChange(changed)
      setChoice(changed)
    },
    [onChange]
  )

  return (
    <FlatList
      data={variants}
      style={mainContainer}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={btnsList}
      keyExtractor={(item, index) => String(index)}
      ListFooterComponent={() => <Space height={25} />}
      renderItem={({ item }) => (
        <VariantButtons
          isSelected={choice === item}
          item={item}
          onChange={handleChange}
        />
      )}
    />
  )
}

interface VariantButtonsT {
  onChange: (changed: string) => void
  item: string
  isSelected: boolean
}

const VariantButtons = memo(({ item, onChange, isSelected }: VariantButtonsT) => {
  const {
    colors: { icon, importantInfo }
  } = useTheme()
  console.log('choice')

  return (
    <Pressable
      onPress={() => {
        onChange(item)
      }}
      style={[btnContainer]}
    >
      {isSelected ? (
        <IoCheckmarkCircleOutline size={30} color={importantInfo} />
      ) : (
        <IoEllipseOutline size={30} color={icon} />
      )}
      <Space width={20} />
      <Text withoutMargin text={String(item)} h4 />
    </Pressable>
  )
})

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    paddingVertical: 7,
    paddingHorizontal: 15,
    alignItems: 'center'
  },
  btnsList: {
    paddingHorizontal: 15
  },
  mainContainer: {
    flexDirection: 'row'
  }
})
const { btnContainer, btnsList, mainContainer } = styles
