import React, { Component } from 'react'
import {auth, googleProvider} from './base'
import UserInfo from './UserInfo'


class Heading extends Component {
    authenticate = () => {
        auth.signInWithPopup(googleProvider)
      }

    render(){
        return (
            <div>

                <h1>RHIT LOL</h1>
                {!this.props.signedIn()?
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


export default Heading