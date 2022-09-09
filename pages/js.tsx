import React, { useEffect } from 'react'
import { Slide, Text, CenterView } from '../src/components'
import { themeState } from '../src/store'

export default function SettingsPage() {
  useEffect(() => {
    //hemeState({ ...themeState(), backgroundImage: ' ' })
  }, [])

  return (
    <Slide>
      <CenterView>
        <Text h2 text={'Select theme colors'} />
        <Text h2 text={'Select Code Highlighter theme'} />
      </CenterView>
    </Slide>
  )
}
