import { FC, Fragment, ReactNode } from 'react'
import { useBreakpoint } from '../../../hooks/useBreakpoint'

interface IBrowserViewProps {
  children: ReactNode
}

const BrowserView = ({ children }: IBrowserViewProps) => {
  const { isMobile } = useBreakpoint()

  return isMobile ? null : <Fragment>{children}</Fragment>
}

export default BrowserView
