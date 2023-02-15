import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren, useState } from 'react'
import { ISideBarItem } from '../../models'
import { useAuth } from '../FireBaseAuth/context/AuthContext'
import Hamburger from '../Hamburger/Hamburger'
import Navigation from '../Navigation/Navigation'
import styles from './DefaultLayout.module.scss'

const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
  const { user, logout } = useAuth()
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const onMoveSidebar = () => {
    setOpen((prev) => !prev)
  }

  const sideBarItems: ISideBarItem[] = [
    {
      text: 'Home',
      subtext: "Let's go to our fancy homepage",
      link: '/',
      isVisible: true,
      onClick: onMoveSidebar,
    },
    {
      text: 'Catalog',
      subtext: 'You will find here all of our luxury offers',
      link: '/catalog',
      isVisible: true,
      onClick: onMoveSidebar,
    },
    {
      text: 'Add offer',
      subtext: 'Here you can add your offer to our system',
      link: '/addOffer',
      isVisible: user !== null,
      onClick: onMoveSidebar,
    },
    {
      text: 'My profile',
      subtext: 'Checkout here your profile details',
      link: '/user',
      isVisible: user !== null,
      onClick: onMoveSidebar,
    },
    {
      text: `${!user ? 'Login' : 'Logout'}`,
      subtext: "Get your user profile! Let's go!",
      onClick: () => {
        if (user) {
          logout()
          router.push('/')
        } else {
          router.push('/login')
        }
        onMoveSidebar()
      },
      isVisible: true,
    },
  ]

  return (
    <main className={styles.main}>
      <Navigation onClick={onMoveSidebar} open={open} items={sideBarItems} />
      <div className={styles.container}>{children}</div>
    </main>
  )
}

export default DefaultLayout
