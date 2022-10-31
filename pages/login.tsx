import React from 'react'
import LoginForm from '../components/authentication/loginForm' 
import NavBar from '../components/navBar'

type Props = {}

const Login = (props: Props) => {
  return (
    <div>
        <NavBar />
        <LoginForm />
    </div>
  )
}

export default Login
