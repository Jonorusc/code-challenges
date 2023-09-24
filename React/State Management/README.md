# React Authentication with Context API

This is a simple example of implementing authentication in a React application using the Context API. In this example, we create a login page and a user profile page, allowing the user to log in and see their profile information.

This app was created using `next-ts-boilerplate`

```bash
npx create-next-app project-name --example "https://github.com/Jonorusc/next-ts-boilerplate"
```

## Getting Started

### Prerequisites

- Node.js and npm should be installed on your machine.
- Yarn or Npm JavaScript package managers

### Installation

1. Clone this repository:

```bash
  git clone https://github.com/Jonorusc/code-challenges.git
  cd React
  cd State Management
```

### Run it locally

1. Once you have installed npm or yarn in your operating system use the follows comands

```bash
  yarn dev
  ## This command will start the dev server locally
```

The application should now be running at http://localhost:3000.

## How it works?

### AuthContext

`AuthContext.tsx` defines the authentication context using the Context API. It manages the user state and provides functions for logging in and out.

code:

```javascript
import React, { createContext, useContext, useState, ReactNode } from 'react'

export type User = {
  username: string
  email: string
  token?: string //if you want to pass a bearer token or another one
}

export type AuthContextType = {
  user: User | null
  login: (userData: User) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  const login = (userData: User) => {
    // Simulate a successful login
    setUser(userData)
  }

  const logout = () => {
    // Simulate a logout
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within an AuthProvider')
  return context
}

```

### Login

The `Login.tsx` component provides a simple login form with a "Login" button. When the button is clicked, it simulates a successful login and updates the user's state.

code:

```javascript
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

```

### UserProfile

The `UserProfile.tsx` component displays the user's profile information, including their username. If the user is not authenticated, it displays a message indicating that the user is not logged in.

code:

```javascript
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

```

`pages/index.tsx` is the main component that wraps the entire application with the AuthProvider to make the authentication context available to all components.

### License
This project is licensed under the MIT License - see the LICENSE file for details.

