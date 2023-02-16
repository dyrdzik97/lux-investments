import Head from 'next/head'
import { Inter } from '@next/font/google'
import { useAuth } from '../components/FireBaseAuth/context/AuthContext'
import LandingPage from '../components/LandingPage/LandingPage'

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
      <LandingPage />
    </>
  )
}

export default Home
