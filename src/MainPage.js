import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import p1 from './img/icon1.jpg'
import p2 from './img/icon2.jpg'
import p3 from './img/icon3.jpg'
import p4 from './img/icon4.jpg'
require('./css/MainPage.css')

class MainPage extends Component {
    state = {
        showIns: false,
    }

    showOrHideIns = () => {
        this.setState({ showIns: !this.state.showIns })
    }

    render() {
        return (
            <div className="MainPage">
                <div id="left">
                    <p id="mainPageTitle">
                        Rose-Hulman Institute of Technology 
                        <br/>
                        League of Legends
                    </p>
                    <p id="mainPageContent">
                    <br/>
                        Thanks for visiting the website. This website has just been published. If you have any questions, feel free to contact the manager wangc6@rose-hulman.edu
                    </p>
                </div>
                <div id="right">
                    <div className="pics">
                        <img alt="" src={p1}/>
                        <NavLink to="/Announcement">Announcement</NavLink>
                        <p>View important information here!</p>
                    </div>
                    <div className="pics">
                        <img alt="" src={p2}/>
                        <NavLink to="/Forum/general">Forum</NavLink>
                        <p>Chat in the forum with friends in Rose</p>
                    </div>
                    <div className="pics">
                        <img alt="" src={p3}/>
                        <NavLink to="/Schedule">Schedule</NavLink>
                        <p>Sign up for try-out events and fun games</p>
                    </div>
                    <div className="pics">
                        <img alt="" src={p4}/>
                        <NavLink to="/TeamPage">Team</NavLink>
                        <p>See who is playing tournaments for the school</p>
                    </div>
                </div>
            </div>

        )
    }
}
export default MainPage