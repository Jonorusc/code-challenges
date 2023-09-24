import React from 'react'
import { useAuth, User } from './AuthContext'

function Login() {
  const { login } = useAuth()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Simulate a login with user data
    const userData: User = {
      email: 'jonlucascp16@outlook.com',
      username: 'João Lucas'
    }
    login(userData)
  }

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
