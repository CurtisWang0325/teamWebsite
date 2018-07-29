import React, {Component} from 'react'
import SignOut from './SignOut'
import { NavLink} from  'react-router-dom'

class UserInfo extends Component{
  render(){
    return (
      <div className="UserInfo">
        <div className="user">
          <span 
            //contentEditable='false'
          >
            {this.props.user.displayName}
          </span>
        </div>
            <NavLink to="/myAccount"><button>My Account</button></NavLink>
          
        <SignOut signOut={this.props.signOut} />
      </div>
    )
  }
}



export default UserInfo