import Link from 'next/link'
import styles from './LandingPageMobile.module.scss'
import HeroHeader from '../HeroHeader/HeroHeader'
import { useRouter } from 'next/router'

const LandingPageMobile = (): JSX.Element => {
  const router = useRouter()

  const onClickImages = () => {
    router.push('/catalog')
  }

  return (
    <main className={styles.main}>
      <div className={styles.background} />
      <HeroHeader />
      <div className={styles['info-section']} id={'info-section'}>
        <span>
          <span>what</span>
          we
          <p>offer</p>
        </span>
      </div>

      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'flex-end',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <div className={styles.offer}>
          <ul>
            <li>
              Complexive environment to adding and searching offers of fancy
              invesments, houses etc.
            </li>
            <li>Fully charged pannel to management of your offer</li>
            <li>Stable prices</li>
            <li>24/7 support</li>
            <li>Only real offers, fake's are banned</li>
            <li>
              You receive <b>luxury</b> service
            </li>
            <li>Support of specialists</li>
            <li>Guarantee of loyalty</li>
          </ul>
        </div>
      </div>

      <div className={styles['image-tiles']} onClick={onClickImages}>
        <img src="https://media.istockphoto.com/id/682432560/photo/stunning-luxury-home-exterior-at-sunset.jpg?b=1&s=170667a&w=0&k=20&c=So4g7mqh3Ajo112hyKO2YxIBVn5Ei34SEf2vSmwhp6A=" />
        <img src="https://media.istockphoto.com/photos/beautiful-luxury-home-exterior-at-sunset-featuring-large-covered-picture-id1208206114?b=1&k=20&m=1208206114&s=612x612&w=0&h=fVbIm4ZPRy5h81cippbpEOSw4CAUxHmZo6ayBaKlcn4=" />
        <img src="https://media.istockphoto.com/id/1026205392/photo/beautiful-luxury-home-exterior-at-twilight.jpg?s=612x612&w=0&k=20&c=HOCqYY0noIVxnp5uQf1MJJEVpsH_d4WtVQ6-OwVoeDo=" />
        <img src="https://media.istockphoto.com/id/1219368329/photo/3d-rendering-of-modern-house-with-wood-plank-facade-in-night.jpg?s=612x612&w=0&k=20&c=gISwxOxE0TXordfyRo8g9lyyLzLIlXgl21HKhypEFqo=" />
      </div>

      <div className={styles['call-to-action-buttons__container']}>
        <Link href="/catalog">Checkout offers</Link>
        <Link href="/login">Create account/login</Link>
      </div>

      <div className={styles.contact}>
        <span>Stay in touch!</span>
      </div>

      <div
        className={`${styles.card} ${styles.parallax} ${styles.contact__details}`}
      >
        <span>
          Let's talk:
          <a href="tel:+123456890">234567890</a>
        </span>
        <span>
          Send us email:
          <a href="mailto:email@example.com">help@luxury.com</a>
        </span>
      </div>
      <div className={styles.footer}>
        Proudly delivered by{' '}
        <Link href={'https://github.com/dyrdzik97'}>dyrdzik97</Link>© Copyright
        2023
      </div>
    </main>
  )
}

export default LandingPageMobile
