import React from 'react'
import { Slide } from '../components'
import useKeypress from 'react-use-keypress'
import { navigate } from '../helpers/navigationHelper'
import { usePersistReactiveVar } from '../hooks'
import { frameState, setSlideCount } from '../store'

export default function SlidePage({ children, next, prev }) {
  const frame = usePersistReactiveVar(frameState, 'frameState')
  const { currentSlide } = frame
  useKeypress(
    'ArrowLeft',
    navigate({ actionType: 'prev', nextPage: next, prevPage: prev, frame })
  )
  useKeypress(
    'ArrowRight',
    navigate({ actionType: 'next', nextPage: next, prevPage: prev, frame })
  )

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

  return <Slide>{generatedSlides[currentSlide]}</Slide>
}
