import { ReactiveVar } from '@apollo/client'
import AsyncStorage from '@react-native-async-storage/async-storage'

const getCleanValueForStorage = (value: unknown) => {
  return typeof value === 'string' ? value : JSON.stringify(value)
}

export const makeReactiveVarPersistent = async <T>(
  rv: ReactiveVar<T>,
  storageName: string
) => {
  let value: T

  const previousValue = await AsyncStorage.getItem(storageName)

  if (previousValue !== null) {
    try {
      const parsed = await JSON.parse(previousValue)
      value = parsed
    } catch {
      value = previousValue as unknown as T
    }
  }

  value && rv(value)

  const onNextChange = (newValue: T | undefined) => {
    try {
      if (newValue === undefined) {
        AsyncStorage.removeItem(storageName)
      } else {
        AsyncStorage.setItem(storageName, getCleanValueForStorage(newValue))
      }
    } catch (err) {
      console.log('🚀 - err', err)
    }

    rv.onNextChange(onNextChange)
  }

  rv.onNextChange(onNextChange)
}
