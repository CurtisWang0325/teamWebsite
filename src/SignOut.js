import React from 'react'
import { NavLink } from 'react-router-dom'
require('./css/UserInfo.css')

const SignOut = ({ signOut }) => {
  return (
    <NavLink to="">
      <p id="sign_out"
        onClick={signOut}
      >
          &nbsp; signOut  	&nbsp;
        <i className="fas fa-sign-out-alt"></i>
      </p>
    </NavLink>
  )
}

export default SignOut