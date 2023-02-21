import Head from 'next/head'
import { Inter } from '@next/font/google'
import { useAuth } from '../components/FireBaseAuth/context/AuthContext'
import MobileView from '../components/Views/MobileView/MobileView'
import BrowserView from '../components/Views/BrowserView/BrowserView'
import LandingPageMobile from '../components/LandingPageMobile/LandingPageMobile'
import LandingPageDesktop from '../components/LandingPageDesktop/LandingPage'

const Home = () => {
  return (
    <>
      <Head>
        <title>Luxury Investments</title>
        <meta name="description" content="Luxury, fancy houses in your area" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <MobileView>
        <LandingPageMobile />
      </MobileView>
      <BrowserView>
        <LandingPageDesktop />
      </BrowserView>
    </>
  )
}

export default Home
