import Router, { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAuth } from '../components/FireBaseAuth/context/AuthContext'
import SignUpForm from '../components/FireBaseAuth/SignUp/SignUp'

const SignUp = () => {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user !== null) {
      router.push('/')
    }
  }, [router, user])

  return <SignUpForm />
}

export default SignUp
