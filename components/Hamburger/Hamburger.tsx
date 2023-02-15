import styles from './Hamburger.module.scss'
import classNames from 'classnames'
import IconHome from '../Icons/IconHome/IconHome'

interface IHamburgerProps {
  open: boolean
  onClick: () => void
}

const Hamburger = ({ open, onClick }: IHamburgerProps): JSX.Element => {
  const classes = classNames(styles.hamburger, {
    [styles['hamburger--active']]: open,
  })

  return (
    <div className={classes} onClick={onClick}>
      <IconHome />
    </div>
  )
}

export default Hamburger
