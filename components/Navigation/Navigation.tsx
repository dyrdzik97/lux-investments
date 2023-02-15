import { ReactNode } from 'react'
import { ISideBarItem } from '../../models'
import Hamburger from '../Hamburger/Hamburger'
import SideBar from '../SideBar/SideBar'

interface INavigationProps {
  open: boolean
  onClick: () => void
  items: ISideBarItem[]
}

const Navigation = ({
  onClick,
  open,
  items,
}: INavigationProps): JSX.Element => {
  return (
    <>
      <Hamburger onClick={onClick} open={open} />
      <SideBar open={open} items={items} />
    </>
  )
}

export default Navigation
