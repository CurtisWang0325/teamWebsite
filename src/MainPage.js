import React, { Component } from 'react'
// import Forum from './Forum'
// import Schedule from './Schedule'
import { NavLink } from 'react-router-dom'
//import Announcement from './Announcement'
//import Heading from './Heading'

class MainPage extends Component {
    render() {
        return (
            <div className="MainPage">
                <NavLink to="/Announcement">
                    <p>Announcement Placeholder</p>
                </NavLink>
                {/* <Announcement/> */}
                <hr />
                <NavLink to="/Forum">
                    <p>Forum Placeholder</p>
                </NavLink>
                {/* <Forum/> */}
                <hr />
                <NavLink to="/Schedule">
                    <p>Schedule Placeholder</p>
                </NavLink>
                {/* <Schedule/> */}
            </div>

        )
    }
}
export default MainPage