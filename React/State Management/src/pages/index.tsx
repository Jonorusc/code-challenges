import React from 'react'
import { AuthProvider } from '@/components/AuthContext'
import Login from '@/components/Login'
import UserProfile from '@/components/UserProfile'

export default function Home() {
  return (
    <div>
      <AuthProvider>
        <h1>Exemple of authentication using Context Api</h1>
        <Login />
        <UserProfile />
      </AuthProvider>
    </div>
  )
}
