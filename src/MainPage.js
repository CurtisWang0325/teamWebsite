import React, { Component } from 'react'
// import Forum from './Forum'
// import Schedule from './Schedule'
import { NavLink } from 'react-router-dom'
//import Announcement from './Announcement'
//import Heading from './Heading'
require('./css/MainPage.css')

class MainPage extends Component {
    render() {
        return (
            <div className="MainPage">

                <NavLink to="/Forum/general" className="link" id="to_forum">
                    <div className="unhover">
                    <h3>Forum</h3>
                    <p></p>
                    </div>
                    <div className="hover">
                        {/* 这个div放想展示的信息 比如最新一条信息啥的 后面两个同理*/}
                    </div>
                </NavLink>

                {/* <Forum/> */}
                <NavLink to="/Announcement" id="to_ann" className="link">
                    <div className="unhover">
                        <h3>Announcement</h3>
                        <p></p>
                    </div>
                    <div className="hover">

                    </div>
                </NavLink>
                {/* <Announcement/> */}
                <NavLink to="/Schedule" className="link" id="to_schedule">
                    <div className="unhover">
                        <h3>Schedule</h3>
                        <p>schdule a match with other team</p>
                    </div>
                    <div className="hover">
                        、
                    </div>
                </NavLink>
                {/* <Schedule/> */}

                <div id="background"></div>

            </div>

        )
    }
}
export default MainPage