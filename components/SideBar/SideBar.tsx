import { time } from 'console'
import Link from 'next/link'
import { ReactNode, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { string } from 'yup/lib/locale'
import { ISideBarItem } from '../../models'
import styles from './SideBar.module.scss'

interface ISideBarProps {
  open: boolean
  items: ISideBarItem[]
}

const SideBar = ({ open, items }: ISideBarProps): JSX.Element => {
  const { right } = useSpring({
    from: { right: '-100%' },
    right: open ? '0' : '-100%',
  })

  return (
    <animated.div style={{ right: right }} className={styles.sidebar}>
      <div className={styles.sidebar__content}>
        {items.map((item, index) => {
          if (item.isVisible) {
            if (!item.link) {
              return (
                <span
                  key={index}
                  className={styles.sidebar__item}
                  onClick={item.onClick}
                >
                  {item.text}
                  {item.subtext && <p>{item.subtext}</p>}
                </span>
              )
            }
            return (
              <Link
                key={index}
                href={item.link || ''}
                onClick={item.onClick}
                className={styles.sidebar__item}
              >
                {item.text}
                {item.subtext && <p>{item.subtext}</p>}
              </Link>
            )
          }
          return null
        })}
      </div>
    </animated.div>
  )
}

export default SideBar
