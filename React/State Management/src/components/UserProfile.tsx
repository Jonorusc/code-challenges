import React from 'react'
import { useAuth } from './AuthContext'

function UserProfile() {
  // here we're getting the logout function from the useauth which's in context
  const { user, logout } = useAuth()

  if (!user) {
    return <p>User is not authenticated</p>
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Username: {user.username}</p>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default UserProfile
