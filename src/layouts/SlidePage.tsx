import React, { useMemo } from 'react'
import { Slide } from '../components'
import useKeypress from 'react-use-keypress'
import { navigate } from '../helpers/navigationHelper'
import { usePersistReactiveVar } from '../hooks'
import { frameState, setSlideCount } from '../store'
import { useRouter } from 'next/router'

export default function SlidePage({ children, next, prev }) {
  const { currentSlide } = usePersistReactiveVar(frameState, 'frameState')
  const { pathname } = useRouter()
  useKeypress(
    'ArrowLeft',
    navigate({ actionType: 'prev', nextPage: next, prevPage: prev })
  )
  useKeypress(
    'ArrowRight',
    navigate({ actionType: 'next', nextPage: next, prevPage: prev })
  )
  const slides = useMemo(() => {
    const generatedSlides = []
    let generatorCount = 0
    // Filter down children by only Slides
    children.forEach(child => {
      // Check for <hr> element to separate slides
      const childType = child && child.props && (child.props.mdxType || [])
      if (childType && childType.includes('hr')) {
        generatorCount += 1
        return
      }
      if (!Array.isArray(generatedSlides[generatorCount])) {
        generatedSlides[generatorCount] = []
      }
      generatedSlides[generatorCount].push(child)
    })
    setSlideCount(generatorCount)
    return generatedSlides
  }, [pathname])

  return <Slide>{slides[currentSlide]}</Slide>
}
