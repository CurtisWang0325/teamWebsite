import React, { Component } from 'react'
import UserInfo from './UserInfo'
import { NavLink } from 'react-router-dom'
import title from './img/title.png'
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
                <img src={title}/>
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