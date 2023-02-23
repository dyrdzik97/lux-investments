import { User } from 'firebase/auth'
import Link from 'next/link'
import { useRouter } from 'next/router'
import BackButton from '../BackButton/BackButton'
import styles from './User.module.scss'

interface IUserProps {
  user: User
}

const UserProfile = ({ user }: IUserProps): JSX.Element => {
  const router = useRouter()
  return (
    <div className={styles.user}>
      <h2>User profile</h2>
      <div>
        <div className={styles.user__details}>
          <span>User email</span>
          <p>{user.email}</p>
        </div>
        <div className={styles.user__details}>
          <Link href="/catalog" passHref>
            <span>Your offers</span>
          </Link>
        </div>
      </div>
      <BackButton />
    </div>
  )
}

export default UserProfile
