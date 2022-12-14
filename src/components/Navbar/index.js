import React from 'react'
import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'

const Navbar = ({ user, setUser }) => {
  const handleLogOut = () => {
    userService.logOut()
    setUser(null)
  }
  return (
    <nav>
      <Link to="/">Logo</Link>
      <Link to='/account'>Profile Page</Link>
      <Link to='/post'>Create Job Listing</Link>
      &nbsp; | &nbsp;
      <h2>Welcome, {user.name}</h2>
      <Link  onClick={handleLogOut}>Log Out</Link>
    </nav>
  )
}

export default Navbar