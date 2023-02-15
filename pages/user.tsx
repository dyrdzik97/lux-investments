import { useRouter } from 'next/router'
import { useAuth } from '../components/FireBaseAuth/context/AuthContext'
import UserProfile from '../components/User/User'

const User = () => {
  const router = useRouter()
  const { user } = useAuth()

  if (user === null) {
    setTimeout(() => {
      router.push('/')
    }, 4000)
    return <p>ERROR you will be redirected to main page</p>
  }

  return <UserProfile user={user} />
}

export default User
