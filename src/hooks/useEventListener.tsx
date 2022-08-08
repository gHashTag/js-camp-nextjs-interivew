import { useRef, useEffect } from 'react'
import { navigateT } from '../layouts/SlidePage'

export default function useEventListener({
  eventName,
  handler,
  element
}: useEventListenerT) {
  const windowEl = process.browser ? window : null
  const eventEl = element ?? windowEl
  // Create a ref that stores handler
  const savedHandler = useRef<any>()

  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(
    () => {
      // Make sure element supports addEventListener
      // On
      const isSupported = eventEl && eventEl.addEventListener
      if (!isSupported) return

      // Create event listener that calls handler function stored in ref
      const eventListener = event => savedHandler.current(event)

      // Add event listener
      eventEl.addEventListener(eventName, eventListener)

      // Remove event listener on cleanup
      return () => {
        eventEl.removeEventListener(eventName, eventListener)
      }
    },
    [eventName, eventEl] // Re-run if eventName or element changes
  )
}

interface useEventListenerT {
  eventName: string
  handler: (event: any) => any
  element?: any
}
