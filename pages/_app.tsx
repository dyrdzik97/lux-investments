import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../components/FireBaseAuth/context/AuthContext'
import DefaultLayout from '../components/DefaultLayout/DefaultLayout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </AuthProvider>
  )
}
