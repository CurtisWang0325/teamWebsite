import React from 'react'
import { NavLink } from 'react-router-dom'

const SignOut = ({ signOut }) => {
  return (
    <NavLink to="">
      <button
        onClick={signOut}
      >
        <i className="fas fa-sign-out-alt"></i>
      </button>
    </NavLink>
  )
}

export default SignOut