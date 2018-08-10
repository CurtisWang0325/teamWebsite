import React, {Component} from 'react'
import UserInfo from './UserInfo'
import {auth, googleProvider} from './base'
import title_pic from './img/title.png'
import google_icon from './img/google_icon.png'

require('./css/Account.css')

class Account extends Component {
    authenticate = () => {
        auth.signInWithPopup(googleProvider)
    }

    render() {
        return (
            <div>
                <img src={title_pic} alt="RHITLOL" id="title"/>
                {!this.props.signedIn() ?
                    (
                        <div className="google" onClick={this.authenticate}>
                            <a href="#">
                                <span> </span>
                                <lable>Sign in with Google+</lable>
                                <div className="clear"></div>
                        </a>
                        </div>
                    )
                    :
                    <UserInfo user={this.props.user} signOut={this.props.signOut}/>
                }
            </div>
        )
    }

}


export default Account