import React from 'react'
import { NavLink } from 'react-router-dom'
require('./css/UserInfo.css')

const SignOut = ({ signOut }) => {
  return (
    <NavLink to="">
      <div id="sign_out"
        onClick={signOut}
      >
          signOut  	&nbsp;
        <i className="fas fa-sign-out-alt"></i>
      </div>
    </NavLink>
  )
}

export default SignOut