import Router, { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAuth } from '../components/FireBaseAuth/context/AuthContext'
import { Login as LoginForm } from '../components/FireBaseAuth/Login/Login'

const Login = () => {
  return <LoginForm />
}

export default Login
