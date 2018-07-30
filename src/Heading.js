import React, { Component } from 'react'
import {auth, googleProvider} from './base'
import UserInfo from './UserInfo'
import { NavLink} from  'react-router-dom'


class Heading extends Component {
    authenticate = () => {
        auth.signInWithPopup(googleProvider)
      }

    render(){
        return (
            <div>
                

                <h1>RHIT LOL</h1>
                <NavLink to="">
                    <button>Home</button>
                </NavLink>
                <NavLink to="/Announcement">
                    <button>Announcement</button>
                </NavLink>
                <NavLink to="/Forum">
                    <button>Forum</button>
                </NavLink>
                <NavLink to="/Schedule">
                    <button>Schedule</button>
                </NavLink>

                
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