import { useCallback, useEffect, useState } from 'react'
import { testMobileDevice } from '../utils/testMobileDevice'

export const useBreakpoint = () => {
  const [isMobile, setIsMobile] = useState(() => {
    if (process.browser) {
      return testMobileDevice()
    }

    return false
  })

  useEffect(() => {
    setIsMobile(testMobileDevice())
  }, [])

  const updateTarget = useCallback((event) => {
    const isLandscape = window.orientation > 0

    setIsMobile(isLandscape || event.matches)
  }, [])

  useEffect(() => {
    const isLandscape = window.orientation > 0
    const mediaQuery = window.matchMedia('(max-width: 768px)')

    mediaQuery.addListener(updateTarget)

    setIsMobile(isLandscape || mediaQuery.matches)

    return () => mediaQuery.removeListener(updateTarget)
  }, [])

  return {
    isMobile,
  }
}
