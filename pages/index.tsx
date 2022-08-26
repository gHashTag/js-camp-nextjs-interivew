import React, { useMemo } from 'react'
import { View } from 'react-native'
import { SelectOne, Slide, Text, Row, Space, CenterView } from '../src/components'
import { setCodeTheme, toggleTheme } from '../src/store/Theme'
import {
  allThemes,
  themes,
  CodeThemes,
  allCodeThemes
} from '../src/store/Theme/defaultThemes'

const getKeysList = (obj: object) => () => {
  let keys = []
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      keys.push(key)
    }
  }
  return keys
}
export default function SettingsPage() {
  const themeVariants = useMemo(getKeysList(themes), [themes])
  const codeThemeVariants = useMemo(getKeysList(CodeThemes), [themes])

  const handleChangeTheme = (item: allThemes) => {
    toggleTheme(item)
  }

  const handleChangeCodeTheme = (item: allCodeThemes) => {
    setCodeTheme(item)
  }

  return (
    <Slide>
      <CenterView>
        <Row>
          <View>
            <Text h2 text={'Select theme colors'} />
            <SelectOne onChange={handleChangeTheme} variants={themeVariants} />
          </View>
          <Space width={80} />
          <View>
            <Text h2 text={'Select Code Highlighter theme'} />
            <SelectOne onChange={handleChangeCodeTheme} variants={codeThemeVariants} />
          </View>
        </Row>
      </CenterView>
    </Slide>
  )
}
