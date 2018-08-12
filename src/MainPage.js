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

                <NavLink to="/Forum" className="link" id="to_forum">
                    <p>Forum Placeholder</p>
                </NavLink>

                {/* <Forum/> */}
                <NavLink to="/Announcement" id="to_ann" className="link">
                    <p>Announcement Placeholder</p>
                </NavLink>
                {/* <Announcement/> */}
                <NavLink to="/Schedule" className="link" id="to_schedule">
                    <p>Schedule Placeholder</p>
                </NavLink>
                {/* <Schedule/> */}

                <div id="background"></div>

            </div>

        )
    }
}
export default MainPage