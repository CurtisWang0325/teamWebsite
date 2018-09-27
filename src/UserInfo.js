import React, { Component } from 'react'
import SignOut from './SignOut'
import { NavLink } from 'react-router-dom'
require('./css/UserInfo.css')

class UserInfo extends Component {
  render() {
    return (
      <div className="UserInfo">
              <NavLink to="/myAccountPage">
              <p>My Account &nbsp;|</p>
              </NavLink>
              <SignOut signOut={this.props.signOut} />
      </div>
    )
  }
}



export default UserInfo