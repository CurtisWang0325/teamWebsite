import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

require('./css/Heading.css')

class Heading extends Component {

    render() {
        return (
            <div className="nav">
                <ul>
                    <li>
                        <NavLink to="" className="tooltip rotate">
                            Home
                            <span className="tooltip-content">
                                <i className="fa fa-home fa-2x">
                                </i>
                            </span>
                        </NavLink>
                    </li>
                    |
                    <li>
                        <NavLink to="/Announcement" className="tooltip rotate">
                            Announcement
                            <span className="tooltip-content">
                                <i className="fa fa-podcast fa-2x">
                                </i>
                            </span>
                        </NavLink>
                    </li>
                    |
                    <li>
                        <NavLink to="/Forum/general" className="tooltip rotate">
                            Forum
                            <span className="tooltip-content">
                                <i className="fa fa-comments fa-2x">
                                </i>
                            </span>
                        </NavLink>
                    </li>
                    |
                    <li>
                        <NavLink to="/calendar" className="tooltip rotate">
                            calendar
                            <span className="tooltip-content">
                                <i className="fa fa-calendar fa-2x">
                                </i>
                            </span>
                        </NavLink>
                    </li>
                </ul>
            </div>

        )
    }
}


export default Heading