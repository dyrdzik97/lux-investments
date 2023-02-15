import { User } from 'firebase/auth'
import BackButton from '../BackButton/BackButton'
import styles from './User.module.scss'

interface IUserProps {
  user: User
}

const UserProfile = ({ user }: IUserProps): JSX.Element => {
  return (
    <div className={styles.user}>
      <h2>User profile</h2>
      <div>
        <div className={styles.user__details}>
          <span>User name</span>
          <p>{user.displayName ? user.displayName : '-'}</p>
        </div>
        <div className={styles.user__details}>
          <span>User email</span>
          <p>{user.email}</p>
        </div>
        <div className={styles.user__details}>
          <span>User id</span>
          <p>{user.uid}</p>
        </div>
      </div>
      <BackButton />
    </div>
  )
}

export default UserProfile
