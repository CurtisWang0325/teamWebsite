import React, { Component } from 'react'
import UserInfo from './UserInfo'
import title_pic from './img/title.png'
import google_icon from './img/google_icon.png'

require('./css/Account.css')

class Account extends Component {

    state = {
        showIns:false
    }
    showOrHideIns = () => {
        this.setState({ showIns: !this.state.showIns })
    }
    render() {
        return (
            <div id="top_bar">
                <img src={title_pic} alt="RHITLOL" id="title" />
                <div id="contact_container">
                    <div onClick={this.showOrHideIns}>
                        <i className={"fa fa-question-circle fa-2x"}>
                        </i>
                    </div>
                    <div id="contact_content">
                        {
                            this.state.showIns ?
                                <p>
                                    * Hi, I'm Curtis, a Rose-Hulman LOL major student
                                    <br/>
                                    * My email is wangc6@rose-hulman.edu
                                    <br/>
                                    * You can also text me 812-223-2488
                                    <br />
                                    * Feel free to contact me and talk about anything
                                    <br />
                                    * Thank you for visiting the website and have fun
                                </p>
                                :
                                null
                        }
                    </div>
                </div>
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