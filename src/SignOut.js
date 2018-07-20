import React from 'react'

const SignOut = ({ signOut }) => {
  return (
    <button
      onClick={signOut}
    >
      <i className="fas fa-sign-out-alt"></i>
    </button>
  )
}

export default SignOut