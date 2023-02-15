import Link from 'next/link'
import { Button } from 'theme-ui'

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link href="/signup">
        <Button type="submit" sx={{ mt: 1, bg: '#3F88F5' }}>
          Sign up
        </Button>
      </Link>
      <p>or</p>
      <Link href="/login">
        <Button type="submit" sx={{ mt: 1, bg: '#000' }}>
          Log In
        </Button>
      </Link>
    </div>
  )
}

export default Dashboard
