import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

require('./css/Heading.css')

class Heading extends Component {

    render() {
        return (
            <div className="nav">
                <ul>
                    <li>
                        <NavLink to="">
                            Home
                        </NavLink>
                    </li>
                    |
                    <li>
                        <NavLink to="/Announcement">
                            Announcement
                        </NavLink>
                    </li>
                    |
                    <li>
                        <NavLink to="/Forum/general">
                            Forum
                        </NavLink>
                    </li>
                    |
                    <li>
                        <NavLink to="/Schedule">
                            Schedule
                        </NavLink>
                    </li>
                    |
                    <li>
                        <NavLink to="/TeamPage">
                            Team
                        </NavLink>
                    </li>
                </ul>
            </div>

        )
    }
}


export default Heading