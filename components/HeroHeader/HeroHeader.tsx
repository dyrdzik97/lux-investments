import styles from './HeroHeader.module.scss'

const HeroHeader = () => {
  const handleClickScroll = () => {
    const element = document.getElementById('info-section')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <span className={styles.hero}>
      Luxury
      <p>investments</p>
      <div className={styles['scroll-down']} onClick={handleClickScroll} />
    </span>
  )
}

export default HeroHeader
