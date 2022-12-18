import React from 'react'
import LoginForm from '../../components/LoginForm'

const LoginInPage = ({ signInUser }) => {
  return (
    <LoginForm  signInUser={signInUser}/>
  )
}

export default LoginInPage