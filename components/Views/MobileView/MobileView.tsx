import { FC, Fragment, ReactNode } from 'react'
import { useBreakpoint } from '../../../hooks/useBreakpoint'

interface IMobileViewProps {
  children: ReactNode
}

const MobileView = ({ children }: IMobileViewProps) => {
  const { isMobile } = useBreakpoint()

  return isMobile ? <Fragment>{children}</Fragment> : null
}

export default MobileView
