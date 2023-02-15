import { useRouter } from 'next/router'
import IconArrow from '../Icons/IconArrow/IconArrow'
import styles from './BackButton.module.scss'

const BackButton = (): JSX.Element => {
  const router = useRouter()

  return (
    <div className={styles['back-button']} onClick={() => router.back()}>
      <IconArrow orientation="left" />
    </div>
  )
}

export default BackButton
