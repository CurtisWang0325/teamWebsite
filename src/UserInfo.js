import React, {Component} from 'react'
import SignOut from './SignOut'

class UserInfo extends Component{
  render(){
    return (
      <div
      className="UserInfo"
      >
      <div className="user">
        <span 
          //contentEditable='false'
        >
          {this.props.user.displayName}

        </span>
      </div>
       <SignOut signOut={this.props.signOut} />
    </div>
    )
  }
}



export default UserInfo