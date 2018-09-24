import React, { Component } from 'react'
import UserInfo from './UserInfo'
import title_pic from './img/title.png'
import google_icon from './img/google_icon.png'

require('./css/Account.css')

class Account extends Component {

    render() {
        return (
            <div id="top_bar">
                <img src={title_pic} alt="RHITLOL" id="title" />
                {!this.props.signedIn() ?
                    (
                        <div className="google" onClick={this.props.signIn}>
                            <a href="#">
                                <span> </span>
                                <lable>Sign in with Google+</lable>
                                <div className="clear"></div>
                            </a>
                        </div>
                    )
                    :
                    <UserInfo user={this.props.user} signOut={this.props.signOut} />
                }
            </div>
        )
    }

}


export default Account