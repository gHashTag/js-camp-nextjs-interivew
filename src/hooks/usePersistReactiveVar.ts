import { ReactiveVar, useReactiveVar } from '@apollo/client'
import { useEffect, useMemo } from 'react'
import { makeReactiveVarPersistent } from '../helpers/makeReactiveVarPersistent'

export const usePersistReactiveVar = <T>(
  reactiveVar: ReactiveVar<T>,
  varName: string
) => {
  const rv = useReactiveVar(reactiveVar)

  const makePersistent = useMemo(() => {
    const existVarNames: string[] = []
    return () => {
      if (existVarNames.includes(varName)) return

      makeReactiveVarPersistent(reactiveVar, varName)
      existVarNames.push(varName)
    }
  }, [])

  useEffect(() => {
    makePersistent()
  }, [])

  return rv
}
