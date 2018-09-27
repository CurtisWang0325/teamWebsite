import React, { Component } from 'react'
import UserInfo from './UserInfo'
import title_pic from './img/title.png'
import google_icon from './img/google_icon.png'
import { NavLink } from 'react-router-dom'
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
                {/**
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
                 **/}
                <div className="nav">
                    <ul>
                        <li>
                            <NavLink to="">
                                <p>Home</p>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/Announcement">
                                <p>Announcement</p>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/Forum/general">
                                <p>Forum</p>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/Schedule">
                                <p>Schedule</p>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/TeamPage">
                                <p>Team</p>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                {!this.props.signedIn() ?
                    (
                        <div to="" id="login" onClick={this.props.signIn}>
                            <a>
                                <p>LOG IN</p>
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