import Link from 'next/link'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import styles from './LandingPage.module.scss'
import HeroHeader from '../HeroHeader/HeroHeader'
import { SyntheticEvent } from 'react'

const LandingPageDesktop = (): JSX.Element => {
  const alignCenter = { display: 'flex', alignItems: 'center', zIndex: '-1' }

  return (
    <main className={styles.main}>
      <Parallax pages={5}>
        <ParallaxLayer
          offset={0}
          speed={0.3}
          style={{ ...alignCenter, justifyContent: 'center' }}
        >
          <HeroHeader />
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 1, end: 1.5 }}
          style={{ ...alignCenter, justifyContent: 'flex-start' }}
          id={'info-section'}
        >
          <div
            className={`${styles.card} ${styles.sticky} ${styles['info-section']}`}
          >
            <span>
              <span>what</span>
              we
              <p>offer</p>
            </span>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={1}
          style={{ ...alignCenter, justifyContent: 'flex-end' }}
        >
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'flex-end',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <div
              className={`${styles.card} ${styles.parallax} ${styles.offer}`}
            >
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
        </ParallaxLayer>
        <ParallaxLayer offset={2.4} speed={-0.1}>
          <div className={styles['image-tiles']}>
            <img src="https://media.istockphoto.com/id/682432560/photo/stunning-luxury-home-exterior-at-sunset.jpg?b=1&s=170667a&w=0&k=20&c=So4g7mqh3Ajo112hyKO2YxIBVn5Ei34SEf2vSmwhp6A=" />
            <img src="https://media.istockphoto.com/photos/beautiful-luxury-home-exterior-at-sunset-featuring-large-covered-picture-id1208206114?b=1&k=20&m=1208206114&s=612x612&w=0&h=fVbIm4ZPRy5h81cippbpEOSw4CAUxHmZo6ayBaKlcn4=" />
            <img src="https://media.istockphoto.com/id/1026205392/photo/beautiful-luxury-home-exterior-at-twilight.jpg?s=612x612&w=0&k=20&c=HOCqYY0noIVxnp5uQf1MJJEVpsH_d4WtVQ6-OwVoeDo=" />
            <img src="https://media.istockphoto.com/id/1219368329/photo/3d-rendering-of-modern-house-with-wood-plank-facade-in-night.jpg?s=612x612&w=0&k=20&c=gISwxOxE0TXordfyRo8g9lyyLzLIlXgl21HKhypEFqo=" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3.5}
          speed={0.2}
          style={{ ...alignCenter, justifyContent: 'flex-end' }}
        >
          <div className={styles['call-to-action-buttons__container']}>
            <Link href="/catalog">Checkout offers</Link>
            <Link href="/login">Create account/login</Link>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 4, end: 4 }}
          offset={5}
          style={{ ...alignCenter, justifyContent: 'flex-start' }}
        >
          <div className={styles.contact}>
            <span>Stay in touch!</span>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={4}
          speed={1.5}
          style={{ ...alignCenter, justifyContent: 'flex-end' }}
        >
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

            <span className={styles.footer}>
              Proudly delivered by{' '}
              <Link href={'https://github.com/dyrdzik97'}>dyrdzik97</Link>©
              Copyright 2023
            </span>
          </div>
        </ParallaxLayer>
      </Parallax>
    </main>
  )
}

export default LandingPageDesktop
