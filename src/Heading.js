import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Heading extends Component {

    render() {
        return (
            <div>
                <NavLink to="">
                    <button>Home</button>
                </NavLink>
                <NavLink to="/Announcement">
                    <button>Announcement</button>
                </NavLink>
                <NavLink to="/Forum/general">
                    <button>Forum</button>
                </NavLink>
                <NavLink to="/Schedule">
                    <button>Schedule</button>
                </NavLink>
            </div>
        )
    }
}


export default Heading