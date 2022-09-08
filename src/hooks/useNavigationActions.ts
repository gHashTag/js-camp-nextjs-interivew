import { usePersistReactiveVar } from './usePersistReactiveVar'
import { useCallback } from 'react'
import { frameState } from '../store'

export const useNavigationActions = ({ nextPagePath, prevPagePath }) => {
  const { currentSlide, steps, currentStep, slideCount } = usePersistReactiveVar(
    frameState,
    'frameState'
  )

  const goBack = useCallback(() => {
    //
  }, [prevPagePath])

  const goNext = useCallback(() => {
    //
  }, [nextPagePath])

  return { goBack, goNext }
}

export interface useNavigationActionsT {
  prevPage: string
  nextPage: string
}
