import React from 'react'
import SignOut from './SignOut'

const UserInfo = ({ user, signOut }) => {
  return (
    <div
      className="UserInfo"
    >
      <div className="user">
        {user.displayName}
      </div>
       <SignOut signOut={signOut} />
    </div>
  )
}



export default UserInfo