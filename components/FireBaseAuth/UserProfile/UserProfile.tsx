import { useRouter } from 'next/router'
import { useState } from 'react'
import { ThemeUIStyleObject, Button, Container, Alert, Message } from 'theme-ui'
import { BorderWrapper } from '../BorderWrapper/BorderWrapper'
import { useAuth } from '../context/AuthContext'

export interface SignupProps {
  sx?: ThemeUIStyleObject
}

export const UserProfile = ({ sx }: SignupProps): JSX.Element => {
  const [error, setError] = useState('')
  const { logout } = useAuth()
  const router = useRouter()

  const { user } = useAuth()

  const handleLogout = async () => {
    try {
      await logout()
      router.push('/')
    } catch (error) {
      setError(`${error}`)
    }
  }

  return (
    <Container sx={{ ...sx }}>
      <BorderWrapper title="User profile">
        <Message>
          Current user: {user?.email}
          <br />
          <br />
          Name: {user?.displayName}
        </Message>
        <Button
          type="submit"
          sx={{ mt: 1, bg: '#3F88F5' }}
          onClick={handleLogout}
        >
          Logout
        </Button>
        {error !== '' && <Alert>{error}</Alert>}
      </BorderWrapper>
    </Container>
  )
}
