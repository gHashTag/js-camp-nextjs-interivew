import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useTypedDispatch, useTypedSelector } from '../store'
import { setSlide } from '../store/FrameSlice'

const keys = {
  slide: 'js-camp-nextjs-interivew-slide',
  page: 'js-camp-nextjs-interivew-page'
}

const useStorage = () => {
  const { currentSlide } = useTypedSelector(st => st.frame)
  const dispatch = useTypedDispatch()
  const router = useRouter()
  const currentPage =
    typeof router.query.slide === 'string' && parseInt(router.query.slide, 10)
  const [focused, setFocused] = useState(false)

  /**
   * Checks when user enters (focus) or
   * leaves (blur) browser window/tab
   */
  const handleFocus = () => setFocused(true)
  const handleBlur = () => setFocused(false)

  /**
   * Updates route or context with local storage data
   * from event listener
   * @param {*} e
   */
  const handleStorageChange = e => {
    const n = parseInt(e.newValue, 10)
    const syncedSlide = localStorage.getItem(keys.slide)
    // if (focused) return
    if (Number.isNaN(n)) return
    switch (e.key) {
      case keys.page:
        router.push(`/slides/${parseInt(String(n), 10)}#${syncedSlide}`)
        break
      case keys.slide:
        window.location.hash = `#${n}`
        dispatch(setSlide(n))
        break
      default:
        break
    }
  }

  useEffect(() => {
    setFocused(document.hasFocus())
  }, [])

  useEffect(() => {
    if (process.browser) {
      if (!focused) window.addEventListener('storage', handleStorageChange)
      window.addEventListener('focus', handleFocus)
      window.addEventListener('blur', handleBlur)
    }
    return () => {
      if (process.browser) {
        if (!focused) window.removeEventListener('storage', handleStorageChange)
        window.removeEventListener('focus', handleFocus)
        window.removeEventListener('blur', handleBlur)
      }
    }
  }, [focused])

  /**
   * Sync localstorage with changes to slides or pages
   */
  useEffect(() => {
    if (!focused) return
    localStorage.setItem(keys.slide, String(currentSlide))
    localStorage.setItem(keys.page, String(currentPage))
  }, [focused, currentSlide, currentPage])
}

export default useStorage
