import styles from './HeroHeader.module.scss'

const HeroHeader = () => {
  return (
    <span className={styles.hero}>
      Luxury
      <p>investments</p>
      <div className={styles['scroll-down']} />
    </span>
  )
}

export default HeroHeader
