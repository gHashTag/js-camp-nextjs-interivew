import React from 'react'
import { useRouter } from 'next/router'
import { Slide, PresentationMode } from '../components'
import useEventListener from '../hooks/useEventListener'
import useStorage from '../hooks/useStorage'
import { useTypedDispatch, useTypedSelector } from '../store'
import {
  clearSteps,
  decrementCurrentStep,
  decrementSlide,
  incrementCurrentStep,
  incrementSlide,
  setSlide
} from '../store/FrameSlice'
import { MODES, setMode } from '../store/ModeSlice'
import { useSwipeable } from 'react-swipeable'

const NEXT = [13, 32, 39]
const PREV = 37
const PRESENTER = 80

export default function SlidePage({ children, next, prev }) {
  const { currentSlide, steps, currentStep } = useTypedSelector(st => st.frame)
  const { mode } = useTypedSelector(st => st.mode)
  const dispatch = useTypedDispatch()
  const router = useRouter()
  useStorage()
  let slideCount = 0

  const navigate = ({ keyCode, altKey }: navigateT) => {
    // Handle Presentation Mode shortcut
    if (altKey) {
      if (keyCode === PRESENTER) {
        if (mode === MODES.SPEAKER) {
          dispatch(setMode(MODES.SLIDESHOW))
          router.push(
            router.pathname,
            `${router.pathname}?mode=${MODES.SLIDESHOW}#${currentSlide}`,
            { shallow: true }
          )
        } else {
          dispatch(setMode(MODES.SPEAKER))
          router.push(
            router.pathname,
            `${router.pathname}?mode=${MODES.SPEAKER}#${currentSlide}`,
            { shallow: true }
          )
        }
        return false
      }
    }

    // Handle Previous page
    if (keyCode === PREV && currentSlide === 0) {
      if (router.query && router.pathname) {
        if (router.pathname.length > 1 && prev) {
          router.replace(prev)
        }
      }
      return false
    }

    // Handle next page
    if (NEXT.indexOf(keyCode) !== -1 && currentSlide === slideCount) {
      if (router.query && router.pathname && next) {
        router.replace(`${next}?mode=${mode}`)
        dispatch(setSlide(0))
      }
      return false
    }

    // Handle slide changes
    if (NEXT.indexOf(keyCode) !== -1) {
      // Do we have Steps inside the slide? Navigate those first
      if (steps.length > 0 && currentStep < steps.length - 1)
        return dispatch(incrementCurrentStep())

      // Otherwise go to next slide
      dispatch(incrementSlide())
      dispatch(clearSteps())
    } else if (keyCode === PREV) {
      // Do we have Steps inside the slide? Navigate those first
      if (steps.length > 0 && currentStep !== 0) return dispatch(decrementCurrentStep())

      // Otherwise go to prev slide
      dispatch(decrementSlide())
      // router.push(
      //   `${router.pathname}`,
      //   `${router.pathname}?mode=${mode}#${prevState - 1}`
      // );
      dispatch(clearSteps())
    }
  }

  useEventListener({ eventName: 'keydown', handler: navigate })

  const swipeLeft = () => {
    navigate({ keyCode: NEXT[0] })
  }

  const swipeRight = () => {
    navigate({ keyCode: PREV })
  }
  useSwipeable({ onSwipedLeft: swipeLeft, onSwipedRight: swipeRight })

  const slideNotes = () => {
    let generatorCount = 0
    let generatedNotes = []
    // Filter down children by only Slides
    React.Children.map(children, child => {
      // Check for <hr> element to separate slides
      const childType = child && child.props && (child.props.mdxType || [])
      if (childType && childType.includes('hr')) {
        generatorCount += 1
        return
      }
      // Check if it's a SpeakerNotes component
      if (childType && childType.includes('SpeakerNotes')) {
        if (!Array.isArray(generatedNotes[generatorCount])) {
          generatedNotes[generatorCount] = []
        }
        generatedNotes[generatorCount].push(child)
      }
    })
    return generatedNotes
  }

  const renderSlide = () => {
    let generatedSlides = []
    let generatorCount = 0

    // Filter down children by only Slides
    React.Children.map(children, child => {
      // Check for <hr> element to separate slides
      const childType = child && child.props && (child.props.mdxType || [])
      if (childType && childType.includes('hr')) {
        generatorCount += 1
        return
      }

      // Check if it's a SpeakerNotes component
      if (childType && !childType.includes('SpeakerNotes')) {
        // Add slide content to current generated slide
        if (!Array.isArray(generatedSlides[generatorCount])) {
          generatedSlides[generatorCount] = []
        }
        generatedSlides[generatorCount].push(child)
      }
    })

    // Get total slide count
    slideCount = generatorCount

    // Return current slide
    if (currentSlide === 999) {
      router.push(router.pathname, `${router.pathname}?mode=${mode}#${slideCount}`, {
        shallow: true
      })
      dispatch(setSlide(slideCount))
    }
    return <Slide>{generatedSlides[currentSlide]}</Slide>
  }

  return (
    <PresentationMode mode={mode} notes={slideNotes()} currentSlide={currentSlide}>
      {renderSlide()}
    </PresentationMode>
  )
}

export interface navigateT {
  keyCode: number
  altKey?: any
}
