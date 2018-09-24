import React, { Component } from 'react'
import SignOut from './SignOut'
import { NavLink } from 'react-router-dom'
require('./css/UserInfo.css')

class UserInfo extends Component {
  render() {
    return (
      <div className="UserInfo">
        <div className="user">
          <span>
            Hi! &nbsp;
            {this.props.user.name || this.props.user.googleName}
          </span>
        </div>
        <NavLink to="/myAccountPage">
          <div id="to_account">My Account</div> &nbsp;|
        </NavLink>
        <SignOut signOut={this.props.signOut} />
      </div>
    )
  }
}



export default UserInfo