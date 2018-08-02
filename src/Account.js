import React, { Component } from 'react'
import UserInfo from './UserInfo'
import { auth, googleProvider } from './base'


class Account extends Component {
    authenticate = () => {
        auth.signInWithPopup(googleProvider)
    }

    render() {
        return (
            <div>

                {!this.props.signedIn() ?
                    (
                        <button
                            type="button"
                            onClick={this.authenticate}
                        >
                            Sign in with Google
                        </button>
                    )
                    :
                    <UserInfo user={this.props.user} signOut={this.props.signOut} />
                }
            </div>
        )
    }

}





export default Account