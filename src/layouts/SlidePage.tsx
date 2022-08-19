import React from 'react'
import { Slide } from '../components'
import { useTypedSelector } from '../store'
import useKeypress from 'react-use-keypress'
import { navigate } from '../helpers/navigationHelper'
import { setSlideCount } from '../store/FrameSlice'
import { useDispatch } from 'react-redux'

export default function SlidePage({ children, next, prev }) {
  const { currentSlide } = useTypedSelector(st => st.frame)
  const dispatch = useDispatch()
  useKeypress(
    'ArrowLeft',
    navigate({ actionType: 'prev', nextPage: next, prevPage: prev })
  )
  useKeypress(
    'ArrowRight',
    navigate({ actionType: 'next', nextPage: next, prevPage: prev })
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
  dispatch(setSlideCount(generatorCount))

  return <Slide>{generatedSlides[currentSlide]}</Slide>
}
